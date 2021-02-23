# vscode 常用插件

::: tip 描述
vscode 常用插件
:::

|  插件名   | 功能  |
|  ----  | ----:  |
| Beautify  | 代码格式化 |
| ESLint  | 代码检测 |
| Git Graph  | Git提交记录可视化 |
| Git History  | Git 历史记录 |
| Vetur  | Vue 工具 |
| vscode-fileheader  | 文件头描述 |

<br/>

## `ESLint` 的使用

如果安装启用 `ESLint` 后，仍没有检测效果，在 `vs-code` 中执行 `Ctrl + Shift + p` 打开命令执行面板，执行 `ESLint: Manage Library Execution`, 在弹出框中执行 `Allow Everywhere`。

保存自动修复配置：

打开 `setting.json` 文件，复制粘贴以下配置：

```json
"editor.codeActionsOnSave": {
   "source.fixAll.eslint": true
 },
```
