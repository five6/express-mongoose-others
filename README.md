### express mongoose
    使用nodejs + mongodb 快速构建项目,前端使用基于bootstrap风格的ui，可用于各种场景的web风格。
#### 安装部署
    nodeJs（v8.0以上） 、mongodb(3.4)、
    
```
 1. 安装 `Node.js[必须]` `MongoDB[必须]``
 2. 启动mongodb
 3. install 依赖包
 4. 启动npm run （dev | prod）启动项目
 5. 访问地址http://localhost:8888
```
### 开发模块流程

##### 1.1 page部分

```
1. 在 /assets/views目录新建模块目录 比如: blog/ ，目录里面放需要的html，比如发布blog，可以创建create.html。
2. 在 /assets/js目录新建1里面使用的js 文件，在html引用js文件。
```
##### 1.2 server部分
```
1. 在 /models/目录新建1.1部分功能需要的mongoose model
2. 在 /controllers/目录新建1所需要的controller目录，里面放page 和api两个文件，命名方式就按模块.page、模块.api来命名以区分功能。注入路由
3. 在config/common目录的menu里面添加菜单。
4. 在config/development、production配置的controllers里面引入需要起作用的CONTROLLER。
5. 保存更改nodemon会自动重启项目。前台就可以看到对应的模块了。

```

