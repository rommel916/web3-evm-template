## 核心流程伪代码如下：

```javascript
let newVersion = getNewVersion();
// 更新版本号
updateVersion(newVersion);
// git 增加 tag 并提交
gitOperations(newVersion);
// 设置 npm 源
const oldRegistryUrl = await setNpmRegistry();
// 检测是否已经登录 npm
await ensureNpmLoggedIn();
// 发布到 npm
await publishToNpm();
// 恢复 npm 源
await restoreNpmRegistry(oldRegistryUrl);
```
