import { Children, cloneElement, isValidElement, type HTMLAttributes, type ReactNode } from "react";

const technicalNames = String.raw`\b[A-Za-z0-9]+(?:[-/][A-Za-z0-9]+)+\b`;
const measurements = String.raw`[−+-]?\b\d+(?:[.,]\d+)*(?:[–−-]\d+(?:[.,]\d+)*)?[ \u00a0]?(?:dB/GHz|dB|ppm/°C|GHz|MHz|kHz|Hz|KiB|MiB|nm|[µμ]m|mm|cm|mV|V|mA|[µμ]A|A|ns|[µμ]s|ms|s|°C)(?![A-Za-z])`;

function protectedPattern(keepTogether: readonly string[]) {
  const phrases = keepTogether.filter(Boolean).sort((a, b) => b.length - a.length)
    .map(phrase => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  return new RegExp(`(${[...phrases, measurements, technicalNames].join("|")})`, "gu");
}

function keepTechnicalNames(text: string, keepTogether: readonly string[]): ReactNode {
  return text.split(protectedPattern(keepTogether)).map((part, i) =>
    i % 2 === 1 && part.length <= 24
      ? <span className="text-ending" key={i}>{part}</span> : part,
  );
}

// Keep a short Chinese ending together without changing the copied text.
// Latin tokens are kept whole; long URLs and code retain normal wrapping.
function protectEnding(children: ReactNode, keepTogether: readonly string[]): ReactNode {
  const nodes = Children.toArray(children);
  for (let i = nodes.length - 1; i >= 0; i--) {
    const node = nodes[i];
    if (typeof node === "string" && node.trim()) {
      if (!/\p{Script=Han}/u.test(node)) {
        nodes[i] = <span key="text">{keepTechnicalNames(node, keepTogether)}</span>;
        break;
      }
      const tokens = [...node.matchAll(/[A-Za-z0-9]+(?:[.\-/×][A-Za-z0-9]+)*|[^\s]/gu)];
      let count = 0;
      let start = node.length;
      for (let j = tokens.length - 1; j >= 0; j--) {
        start = tokens[j].index!;
        if (/[\p{Script=Han}A-Za-z0-9]/u.test(tokens[j][0])) count++;
        if (count >= 4) break;
      }
      // Do not cut a selected phrase or a measurement at the ending boundary.
      for (const match of node.matchAll(protectedPattern(keepTogether))) {
        if (match[0].length <= 24 && match.index! < start && match.index! + match[0].length > start) {
          start = match.index!;
        }
      }
      if (count >= 4 && node.length - start <= 24) {
        nodes[i] = <span key="ending">{keepTechnicalNames(node.slice(0, start), keepTogether)}<span className="text-ending">{node.slice(start)}</span></span>;
      } else {
        nodes[i] = <span key="text">{keepTechnicalNames(node, keepTogether)}</span>;
      }
      break;
    }
    if (isValidElement<{ children?: ReactNode }>(node)) {
      nodes[i] = cloneElement(node, {}, protectEnding(node.props.children, keepTogether));
      break;
    }
  }
  return nodes;
}

type Props = HTMLAttributes<HTMLElement> & {
  as?: "p" | "span" | "h1" | "h2" | "h3" | "li" | "dd" | "figcaption";
  keepTogether?: readonly string[];
};

export default function ReadingText({ as: Tag = "p", children, keepTogether = [], ...props }: Props) {
  return <Tag {...props}>{protectEnding(children, keepTogether)}</Tag>;
}
