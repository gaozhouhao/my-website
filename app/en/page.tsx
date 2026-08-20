import { HomePage } from "../page";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("IC Design Portfolio", "Gao Zhouhao's IC design portfolio with evidence across analog IC, RTL, SoC, ASIC flow, verification, and hardware.", "/", "en");
export default function EnglishHome() { return <HomePage locale="en" />; }
