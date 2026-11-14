import { HomePage } from "../Content";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("IC Design Portfolio", "Gao Zhouhao's digital IC, RTL, and SoC projects, alongside analog circuit design and embedded hardware.", "/", "en");
export default function EnglishHome() { return <HomePage locale="en" />; }
