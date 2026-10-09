# alexxia.ccwu.cc — 个人静态站

由 dnshe 免费域名 + Cloudflare Pages 托管的零成本个人站。

## 板块
- `index.html` — 首页（导航 + 三个板块入口）
- `articles.html` / `article-sample.html` — 图文博客（列表 + 文章页）
- `fund.html` — 基金持仓看板（iframe 加载 `fund-dashboard.html`，打码分享版，不暴露真实持仓）
- `gallery.html` — 摄影作品网格
- `style.css` / `app.js` — 全站共用样式与交互（明暗主题切换、移动端自适应）

## 部署
- Cloudflare Pages（Workers 静态资产）连本仓库自动部署；推送 `main` 即重新上线。
- 自定义域：`alexxia.ccwu.cc`（DNS 托管在 Cloudflare，NS: dante / kate）。

## 自动更新基金看板
`fund-dashboard.html` 由桌面 `SG bank` 的「基金持仓看板-分享版.html」生成。
本地基金更新任务改写数据后，应重新生成该文件并 `git commit & push`，线上自动刷新。

## 注意
- 公开站仅用**打码分享版**，真实持仓不公开。
- `*.ccwu.cc` 免费子域在国内可能被运营商/反诈拦截；本站自身内容已正常，如遇拦截为域名级限制。
