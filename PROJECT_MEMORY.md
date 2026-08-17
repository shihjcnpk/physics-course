# Project Memory

## 项目

- 项目路径：`D:\tools\Physics Course`
- GitHub仓库：`https://github.com/shihjcnpk/physics-course`
- 在线地址：`https://shihjcnpk.github.io/physics-course/#/`
- 前端：React + TypeScript + Vite
- 路由：`HashRouter`，与数学课程一致，避免GitHub Pages深链404
- Vite base：`/physics-course/`
- 学习进度：浏览器`localStorage`本机保存

## 发布流程

1. `python scripts/generate_course.py`
2. `python validation/validate_course.py`
3. `python validation/test_physics_examples.py`
4. `npm run build`
5. 提交并推送`main`
6. `npm run deploy:pages`把`dist`发布到`gh-pages`分支

## 约束

- 不添加SPA重定向文件；使用`#/`哈希路由。
- 教材第二导航由`data/textbook_chapters.json`驱动，共22章92节。
- 修改课程内容应先改生成源，再重新生成，避免Markdown与JSON不一致。
- Git用户：`shihj / shihj@sina.cn`。
