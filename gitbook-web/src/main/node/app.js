const Koa = require("koa");
const path = require("path");
const bodyparser = require("koa-bodyparser");
const Router = require("koa-router");
const koaStatic = require("koa-static");

const app = new Koa();
const router = new Router();

const devPath = "../webapp";
const prodPath = "../../../../../www/gitbook/_book";
const staticPath = process.env.NODE_ENV === "PROD" ? prodPath : devPath; // 根据变量区分环境
const port = process.env.NODE_ENV === "PROD" ? 8080 : 3000; // 根据变量区分环境

app.use(bodyparser());

app.use(router.routes()).
    use(router.allowedMethods());

app.use(koaStatic(path.join(__dirname, staticPath)));

app.listen(port, () => {

    console.log("[Koa2] start-quick is starting at port " + port);

});
