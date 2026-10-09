import { Int8SystolicNpuPage } from "../../../projects/int8-systolic-npu/page";
import { pageMetadata } from "../../../../lib/site";
export const metadata = pageMetadata("INT8 Systolic NPU", "A 4×4 INT8 NPU with layer-by-layer MNIST CNN RTL verification. Three operand-loading optimizations reduce total cycles from 531,563 to 76,443.", "/projects/int8-systolic-npu", "en");
export default function Page() { return <Int8SystolicNpuPage locale="en" />; }
