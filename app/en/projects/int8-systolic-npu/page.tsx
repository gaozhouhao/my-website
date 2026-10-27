import { Int8SystolicNpuPage } from "../../../projects/int8-systolic-npu/Content";
import { pageMetadata } from "../../../../lib/site";
export const metadata = pageMetadata("INT8 Systolic NPU", "A custom 4×4 INT8 NPU and TFLite/ONNX compiler. All 72 ResNet-50 tasks pass RTL numerical checks, with 59.65% fewer cycles than the Burst serial baseline.", "/projects/int8-systolic-npu", "en");
export default function Page() { return <Int8SystolicNpuPage locale="en" />; }
