# PRD: Personal Web — 个人网站

## Problem Statement

j c 需要一个个人网站来展示自己的 demo 项目和文章内容。目前没有个人网站，demo 项目和文章散落在各处，没有一个统一的展示平台。

## Solution

搭建一个基于 Next.js + TypeScript 的个人网站，复刻 huasheng.ai 的深色暖调视觉风格。使用纯 MDX 文件管理内容，部署到 Vercel。网站包含首页、项目展示、文章博客三大模块，初始使用 placeholder 内容跑通完整流程。

## User Stories

1. As a **网站访客**，我想要在首页看到一段简短的自我介绍，以便快速了解网站主人是谁
2. As a **网站访客**，我想要在首页看到精选的 3-4 个项目卡片，以便快速浏览代表作品
3. As a **网站访客**，我想要在首页看到最近的几篇文章，以便了解作者最新产出
4. As a **网站访客**，我想要点击导航栏的"项目"进入项目列表页，以便浏览所有项目
5. As a **网站访客**，我想要在项目列表页看到每个项目的编号、标题、描述、类型标签和外部链接，以便决定深入了解哪个
6. As a **网站访客**，我想要点击一个项目进入详情页，以便查看完整的项目介绍
7. As a **网站访客**，我想要在项目详情页直接交互 demo（如果有的话），以便体验项目效果
8. As a **网站访客**，我想要在项目详情页看到项目的 GitHub / 外部链接，以便访问源码或在线版本
9. As a **网站访客**，我想要点击导航栏的"文章"进入文章列表页，以便浏览所有文章
10. As a **网站访客**，我想要在文章列表页看到文章标题、日期和摘要，以便决定阅读哪篇
11. As a **网站访客**，我想要点击一篇文章进入详情页，以便阅读全文内容
12. As a **网站访客**，我想要在移动端也能正常浏览网站，以便在手机上访问
13. As a **网站访客**，我想要看到页面入场动画和 hover 交互效果，以便获得良好的视觉体验
14. As a **内容作者**，我想要通过在 `content/projects/` 目录下添加 MDX 文件来新增项目，以便不写代码就能更新网站
15. As a **内容作者**，我想要通过在 `content/blog/` 目录下添加 MDX 文件来新增文章，以便不写代码就能更新网站
16. As a **内容作者**，我想要在项目 MDX 文件中嵌入 React 组件作为交互式 demo，以便展示项目的实际效果
17. As a **开发者**，我想要项目使用 TypeScript 严格模式，以便减少运行时错误
18. As a **开发者**，我想要项目配置 ESLint + Prettier，以便保持代码风格一致
19. As a **开发者**，我想要一键 `bun run dev` 启动本地开发服务器，以便快速预览
20. As a **开发者**，我想要项目支持 Vercel 零配置部署，以便 push 即上线
21. As a **网站访客**，我想要看到固定顶部导航栏，以便随时切换页面
22. As a **网站访客**，我想要导航栏在滚动时改变背景透明度，以便不影响首屏视觉
23. As a **网站访客**，我想要在项目卡片上 hover 时看到颜色变化和位移动画，以便获得交互反馈
24. As a **网站访客**，我想要在首页看到装饰性的"REEL · SCENE"电影叙事标签，以便感受 huasheng.ai 风格的排版特色
25. As a **网站访客**，我想要看到深色和浅色区块交替的页面布局，以便获得节奏感的视觉体验
26. As a **网站访客**，我想要看到斜体 display 字体的大标题，以便感受独特的品牌调性
27. As a **网站访客**，我想要在页面底部看到 footer，以便了解版权和位置信息

## Implementation Decisions

### 模块划分

#### 1. Project Scaffolding（项目脚手架）
- 初始化 Next.js 14+ App Router + TypeScript 项目
- 配置 Tailwind CSS + shadcn/ui
- 配置 ESLint + Prettier
- 使用 bun 作为包管理器

#### 2. Design System（设计系统）
- 定义 Tailwind 主题扩展：颜色、字体、间距
- 颜色 token：`background` (#0E0D0B)、`foreground` (#F2EADC)、`accent` (#BC9B6A)、`surface-light` (#F2EADC / #ECE4D4)、`surface-dark-text` (#1B1611)
- 字体配置：Google Fonts 引入 Display 字体（含 italic）、等宽字体、sans-serif
- 全局 CSS 变量和基础样式

#### 3. Layout & Navigation（布局与导航）
- 固定顶部导航栏组件，滚动时透明度渐变
- 等宽小字 + 宽字距的导航样式
- 响应式移动端汉堡菜单
- Footer 组件

#### 4. Content Layer（内容层）
- MDX 处理：使用 `next-mdx-remote` 或 `contentlayer`（推荐 `next-mdx-remote/rsc`）
- 项目内容 schema（frontmatter）：title, slug, description, type (demo/link), date, externalUrl?, demoComponent?
- 文章内容 schema（frontmatter）：title, slug, date, summary
- 内容读取工具函数：`getProjects()`, `getProject(slug)`, `getBlogPosts()`, `getBlogPost(slug)`
- 内容按日期倒序排列

#### 5. Home Page（首页）
- Hero 区块：大号 display 标题（含 italic + 金色）、副标题、CTA 按钮
- 装饰性叙事标签（"REEL 01 · SCENE 001"）
- 精选项目区块：3-4 个项目卡片，深色/浅色交替背景
- 最近文章区块：列表形式展示最新文章
- 入场动画（scroll reveal）

#### 6. Projects Module（项目模块）
- `/projects` 列表页：编号列表，标题 + 描述 + 类型标签，hover 左移动画
- `/projects/[slug]` 详情页：项目介绍 + 交互式 demo 嵌入（React 组件）或外部链接
- 项目类型区分：demo 类型直接嵌入组件，link 类型显示按钮跳转

#### 7. Blog Module（文章模块）
- `/blog` 列表页：日期 + 标题 + 摘要
- `/blog/[slug]` 详情页：MDX 渲染，排版优化（标题层级、代码块、引用样式）

#### 8. Placeholder Content（占位内容）
- 2-3 个示例项目（含 1 个 demo 类型、1-2 个 link 类型）
- 1-2 篇示例文章

#### 9. Deployment Config（部署配置）
- `next.config.js` 配置静态导出或 Vercel 适配
- `vercel.json`（如需要）

### 技术选型补充

- **MDX 方案**: `next-mdx-remote/rsc` — 轻量，App Router 原生兼容，不引入额外构建步骤
- **动画方案**: `framer-motion` — scroll reveal 入场动画 + hover 交互
- **图标**: `lucide-react` — 与 huasheng.ai 一致
- **包管理器**: bun（CLAUDE.md 要求）

## Testing Decisions

本项目为内容展示型网站，无复杂业务逻辑，测试策略以视觉验证为主：

- **不写单元测试** — 没有需要隔离测试的业务逻辑模块
- **视觉验证** — 每个页面完成后用浏览器检查渲染效果，对比 huasheng.ai 参考
- **响应式验证** — 在桌面端和移动端检查布局
- **构建验证** — `bun run build` 无报错即可

## Out of Scope

- **暗色模式切换** — 网站本身就是深色主题，不需要切换
- **分类/标签系统** — 初期内容量少，不需要
- **搜索功能** — 内容少时不需要
- **评论系统** — 暂不需要
- **CMS 集成** — 纯 MDX 文件管理
- **i18n / 多语言** — 纯中文
- **SEO 优化 beyond 默认** — Next.js 默认 meta 即可，暂不做额外 SEO
- **Analytics** — 暂不集成
- **真实内容填充** — 初始用 placeholder

## Further Notes

- 视觉风格严格复刻 huasheng.ai，颜色值、字体风格、排版节奏都从该网站源码中提取
- 项目文件结构遵循 Next.js App Router 约定：`app/` 目录路由，`components/` 放组件，`content/` 放 MDX 文件
- CLAUDE.md 要求使用 bun 而非 npm/npx，TypeScript 而非 Python
