import { Int8SystolicNpuPage } from "../../../projects/int8-systolic-npu/page";
import { pageMetadata } from "../../../../lib/site";
export const metadata = pageMetadata("INT8 Systolic NPU", "A 4×4 INT8 NPU with layer-by-layer MNIST CNN RTL verification. MNIST runs in 74,527 cycles. ResNet-8 completes a quantized-zero-input RTL run; numerical validation is pending.", "/projects/int8-systolic-npu", "en");
export default function Page() { return <Int8SystolicNpuPage locale="en" />; }
