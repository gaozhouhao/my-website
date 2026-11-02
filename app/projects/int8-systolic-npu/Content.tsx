import Overview from "./Overview";
import type { Locale } from "../../../lib/i18n";
import { pageMetadata } from "../../../lib/site";
export const metadata = pageMetadata("INT8 NPU", "独立设计与实现 4×4 INT8 NPU 及 TFLite/ONNX 编译工具；ResNet-50 的 72 条任务通过 RTL 数值校验，相比 Burst 串行基线整网周期减少 59.65%。", "/projects/int8-systolic-npu", "zh");
export function Int8SystolicNpuPage({locale}:{locale:Locale}) { return <Overview locale={locale}/>; }
export default function Page() { return <Overview locale="zh"/>; }
