# dao-webtool
web前端自动化打包工具
```
 "bin": "bin/index.js", //命令行工具入口
  "scripts": {
    "test": "test",
    "npmzip":"npm un -g && npm i -g", //当前命令到全局(npm run npmzip)
    "git":"git pull && git add . && git commit -m 'uploade' && git push"//提交到github
  },
```