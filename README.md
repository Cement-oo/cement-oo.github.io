# 公益中转分享

这是一个无需构建的静态导航页，用于集中展示中转站点、注册方式和福利活动。页面采用紧凑卡片布局，点击整张卡片即可跳转。

## 修改内容

只需打开 [app.js](./app.js)，修改顶部的 `siteConfig`：

- `brand`、`title`、`intro`：页面标题和介绍。
- `githubUrl`：页面右上角的 GitHub 入口。
- `entries`：站点信息流。每条填写 `publishedAt`、`kind`、`name`、`summary`、`details`、`registration`、`benefits`、`url` 和 `tone`。
- `tone` 可用 `active`（正常）、`limited`（备用）或 `notice`（公告）。

每张信息卡会直接显示介绍、注册方式、发布时间和福利标签。访客点击整张卡片后会跳转到对应的 `url`，没有额外详情页或弹窗。

示例中的 `https://example.com` 都是占位链接，发布前应替换为自己的真实邀请链接。

## 发布到 GitHub Pages

1. 在 GitHub 创建一个仓库，例如 `gongyi-share`。
2. 将本目录中的 `index.html`、`styles.css`、`app.js`、`README.md` 提交并推送到 `main` 分支。
3. 打开仓库的 **Settings** -> **Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**，分支选择 `main`，目录选择 `/(root)`，然后保存。
5. 等待 GitHub 部署完成，访问页面提示的 `https://用户名.github.io/仓库名/` 地址。

若仓库命名为 `用户名.github.io`，最终地址会是 `https://用户名.github.io/`。

## 注意

页面只应公开展示你有权发布的链接，并遵守对应平台的推广和广告规则。不要把密码、令牌、内部管理地址或任何敏感配置提交到 GitHub。
