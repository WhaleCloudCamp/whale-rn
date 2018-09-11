# Whale-RN

此文件为设计内容，后续移动到开发人员文档中。

一个React-Native的组件库。组件库尽量使用纯js编写，以保证ios和android平台的表现相同。代码使用es7编写，配合d.ts文件达到联想输入的效果。不使用typescript开发，减少后续开发人员的学习成本。

## 目录结构

```bash
├── /components/           # RN组件
├── /docs/                 # 使用文档 [.vuepress](https://github.com/vuejs/vuepress) 
├── /script/               # 执行脚本，编译或其他
├── /tests/                # 通用的测试文件
├── /themes/               # 通用的样式配置
├── /rn/                   # rn demo
├── /web-example/          # web预览demo 预计通过rn-web runtimes实现
├── .gitignore             # git忽略文件
├── .eslintrc              # 代码规范
├── development.md         # 开发人员文档
├── index.js               # 项目主入口
├── README.md              # 项目说明文件
├── package.json           # 项目信息
```
以下对这些设计做一一说明。
### components 目录结构

```bash
├── /usage/                # 用法展示
│   ├── index.js           # 主入口
├── /style/                # 样式文件
│   ├── index.js           # 样式文件的主入口，便于统一引用
├── /__tests__/            # 测试目录，独立的测试文件
├── index.js               # 组件的主入口
├── index.md               # 组件的说明文档
```
以上的index.md,后续用于docs文档的构建和vscode插件的编写。
### docs 文档目录
预计使用vuepress实现。将markdown文件直接转化成官网

### scripts 辅助脚本
将一些常用的node辅助脚本放在这个地方，通过yarn调用package-scripts执行。
可能是node脚本，也可能是sh。
可能但不一定会有，将es7的用法转化成es5，放宽模块的使用宿主环境要求。
还有文件操作等。
### tests 通用测试脚本
使用jest编写测试文件。

### themes 通用的样式配置
皮肤和主色调什么的在这里

### rn demo
组件在rn中的演示应用，因为只做效果展示，没有太多的数据流，暂时考虑使用[react-native-cli](https://github.com/facebook/react-native)新建的项目做初始化项目，如果后续涉及到数据流，网络请求等复杂化情况，则考虑用[whale-oss-cli](https://github.com/react-native-examples/whale-oss-cli)脚手架项目替换。

### web-example 演示demo
需要React-Native Web Runtime，预计通过修改[react-native-web](https://github.com/necolas/react-native-web)来实现，工作量大的话，考虑将rn组件build成html，再在web中引入。后续用于做dnd构建方案（可视化构建应用）。

### index.js 项目主入口
npm main入口

### eslint 
代码规范，统一一些用法。还可以结合precommit，对不合格的代码，禁止提交。
结合prettier，自动修改不规范文件。