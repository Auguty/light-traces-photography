# 光迹 · 摄影手记

一个用于整理摄影作品、旅途记录和个人手记的响应式摄影网站。

## 在线访问

[https://auguty.github.io/](https://auguty.github.io/)

## 功能

- 按主题筛选摄影作品
- 点击照片进入沉浸式大图浏览
- 摄影手记、个人介绍和联系模块
- 响应式桌面与移动端布局
- 集中式内容配置，模块可排序、停用或删除
- 可生成单文件版本，便于免费发布到 GitHub Pages

## 技术栈

- React
- Vite
- GitHub Pages

## 本地运行

```bash
npm install
npm run dev
```

构建生产版本：

```bash
npm run build
```

生成可直接上传到 `Auguty.github.io` 仓库的单文件版本：

```bash
npm run release
```

生成文件位于 `release/index.html`。

## 内容维护

网站文字、照片和模块顺序集中在：

```text
src/data/site-content.js
```

编辑 `sectionRegistry` 可调整首页模块顺序；把模块的 `enabled` 改为 `false` 即可暂时隐藏。

## 项目结构

```text
src/
├─ components/PhotographySite.jsx  # 页面与交互组件
├─ data/site-content.js            # 照片、文字和模块配置
├─ main.jsx                        # 应用入口
└─ styles.css                      # 全站样式
scripts/
└─ build-single-file.mjs           # 单文件发布脚本
```

## 图片说明

当前演示图片来自 Unsplash。替换为个人作品时，请同时更新图片地址、标题、地点和替代文字。
