import Overview from "./Overview";
import type { Locale } from "../../../lib/i18n";
import { pageMetadata } from "../../../lib/site";
export const metadata = pageMetadata("自研 INT8 NPU", "从乘加单元到完整神经网络推理：基于 SystemVerilog 设计 4×4 脉动阵列，完成模型编译、RTL 验证与存储优化。", "/projects/int8-systolic-npu", "zh");
export function Int8SystolicNpuPage({locale}:{locale:Locale}) { return <Overview locale={locale}/>; }
export default function Page() { return <Overview locale="zh"/>; }
