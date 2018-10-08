# Development

## 判断环境

```
node = 6+
npm = 3+
```

## 创建分支
```bash
git checkout -b xx-feature
```
建议：
windows:安装小乌龟
mac:安装sourcetree
安装 ios 依赖
```sh
cd ios
pod install
```

## 安装依赖
```bash
yarn
```
或者
```bash
npm install
```


?这里应该要从上级目录启动的，不知道为啥一直不行。
?大家一起找找原因和解决方案
## 安装demo依赖
```bash
cd rn
yarn 
(or npm install)
```
## 启动项目
注意是在rn目录执行
```bash
npm run ios
```
或者
```bash
npm run android
```


##开发组件
先在rn/components里面开发
注意尽量不要使用第三方的组件，
有使用的要特别声明，
这涉及到后续的runtimes的支持问题。

