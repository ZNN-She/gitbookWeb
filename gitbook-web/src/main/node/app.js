const Koa = require("koa");
const path = require("path");
const bodyparser = require("koa-bodyparser");
const Router = require("koa-router");
const koaStatic = require("koa-static");

const app = new Koa();
const router = new Router();

// const staticPath = "../webapp";
// const staticPath = "/root/opt/www/gitbook/_book";
const staticPath = "../../../../../gitbook/_book";

app.use(bodyparser());

app.use(router.routes()).
    use(router.allowedMethods());

app.use(koaStatic(path.join(__dirname, staticPath)));

app.listen(3001, () => {

    console.log("[Koa2] start-quick is starting at port 3001");

});
