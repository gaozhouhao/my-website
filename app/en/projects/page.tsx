import { ProjectsPage } from "../../projects/Content";
import { pageMetadata } from "../../../lib/site";
export const metadata = pageMetadata("Projects", "IC design, RTL, SoC, ASIC flow, verification, and hardware projects by Gao Zhouhao.", "/projects", "en");
export default function Page() { return <ProjectsPage locale="en" />; }
