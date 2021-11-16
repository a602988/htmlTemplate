# 結構說明
```
│
├─── build/
│   │
│   ├─── html-conf.js             # 頁面檔案
│   ├─── js-conf.js               # 使用的js
│   ├─── html-conf-example.js     # 範例/頁面檔案
│   ├─── js-conf-example.js       # 範例/使用的js
│   ├─── webpack.base.conf.js     # Webpack 共用配置檔 (等待合併)
│   ├─── webpack.dev.conf.js      # 開發環境配置檔
│   └─── webpack.prod.conf.js     # 生產環境配置檔
├─── dist/                        #產出的檔案 不需要加入Git
├─── src/                         #原始檔案
│   │
│   ├─── assets/                  # 靜態資源
│   ├─── example/                 # 範例頁面
│   └─── page/                    # 專案頁面
├─── postcss.config.js 瀏覽器相容設定檔
├─── server.js npm run server 運行檔案

```
## 運行

建立檔案

` npm run build` 

運行server

` npm run server` 


## 使用套件

### preloader

- [pace-js](https://codebyzach.github.io/pace/)
