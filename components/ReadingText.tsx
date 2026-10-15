import { Children, cloneElement, isValidElement, type HTMLAttributes, type ReactNode } from "react";

function keepTechnicalNames(text: string): ReactNode {
  return text.split(/(\b[A-Za-z0-9]+(?:[-/][A-Za-z0-9]+)+\b)/g).map((part, i) =>
    /^[A-Za-z0-9]+(?:[-/][A-Za-z0-9]+)+$/.test(part) && part.length <= 24
      ? <span className="text-ending" key={i}>{part}</span> : part,
  );
}

// Keep a short Chinese ending together without changing the copied text.
// Latin tokens are kept whole; long URLs and code retain normal wrapping.
function protectEnding(children: ReactNode): ReactNode {
  const nodes = Children.toArray(children);
  for (let i = nodes.length - 1; i >= 0; i--) {
    const node = nodes[i];
    if (typeof node === "string" && node.trim()) {
      if (!/\p{Script=Han}/u.test(node)) {
        nodes[i] = <span key="text">{keepTechnicalNames(node)}</span>;
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
      if (count >= 4 && node.length - start <= 24) {
        nodes[i] = <span key="ending">{keepTechnicalNames(node.slice(0, start))}<span className="text-ending">{node.slice(start)}</span></span>;
      } else {
        nodes[i] = <span key="text">{keepTechnicalNames(node)}</span>;
      }
      break;
    }
    if (isValidElement<{ children?: ReactNode }>(node)) {
      nodes[i] = cloneElement(node, {}, protectEnding(node.props.children));
      break;
    }
  }
  return nodes;
}

type Props = HTMLAttributes<HTMLElement> & {
  as?: "p" | "h1" | "h2" | "h3" | "li" | "dd" | "figcaption";
};

export default function ReadingText({ as: Tag = "p", children, ...props }: Props) {
  return <Tag {...props}>{protectEnding(children)}</Tag>;
}
