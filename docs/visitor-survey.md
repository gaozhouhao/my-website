# 访客小问卷

全站累计前台浏览 60 秒后展示一次自愿单选问卷，随路径切换中英文。
选择：招聘 / 技术交流 / 随便逛逛。关闭后本地当天不再展示；提交成功后该浏览器不再展示。
清除浏览器数据或换设备会重置此行为。只统计自愿回答者，不能代表全部访客。

## 开通（Vercel + Upstash Redis Free）

1. Vercel 项目 → Storage → Create Database → Upstash for Redis，接受条款后选择 **Free**，不升级付费套餐。
2. 命名 `portfolio-visitor-survey` 并连接 `my-website` 的 Production 环境。数据库连接变量由集成添加。
3. 服务端支持 `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`，也支持集成默认的 `KV_REST_API_URL` / `KV_REST_API_TOKEN`。
4. 添加服务端变量 `VISITOR_SURVEY_ENABLED=true`，重新部署。没有开关或连接变量时不弹问卷。
5. 测试提交一次后在后台检查计数增长。切勿将数据库 Token 设置为 `NEXT_PUBLIC_` 变量或提交 Git。

## 查看结果

登录 Vercel → my-website → Storage → portfolio-visitor-survey → Open in Upstash → Data Browser。
搜索 `survey:v1:results`：`recruiting` 招聘、`technical` 技术、`browsing` 随便逛逛、`total` 总回答数。
月份统计为 `survey:v1:month:YYYY-MM`（UTC 月份）。没有回答前不会创建这些记录。
各类占比 = 对应回答数 ÷ total；这是回答者构成，不是全部访客构成。
后台依赖供应商账户登录，网站不提供公开读取统计接口。

## 数据与限制

- 永久记录仅含分类总数与月度分类总数，不含姓名、邮箱、逐条访问路径或原始 IP。
- 浏览器随机 ID 用于重试去重；服务端只保留其 HMAC 值，365 天后到期。
- 用每日变换的 IP HMAC 做短时限流（1 小时），原始地址不写数据库。托管商仍可能有自身运行日志。
- 每个网络地址每小时最多 20 次新回答，全站每天最多 500 次。达到上限返回可跳过的错误，不记录假成功。
- 这是轻量匿名调查，不防止换浏览器或恶意脚本刷票，不能当成严格身份核验。
- 提交失败不会标记完成，重试同一 ID 不重复计数。
- 关闭功能：将 `VISITOR_SURVEY_ENABLED` 设为 `false` 并重新部署。

## 验证

`node --test tests/visitor-survey.test.mjs`（Node 24），`npm run lint`，`npm run build`。
上线后人工检查两种语言、60 秒触发、跳过/刷新、成功/刷新，以及后台统计。
