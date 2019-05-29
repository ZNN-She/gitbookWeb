const Koa = require("koa");
const path = require("path");
const bodyparser = require("koa-bodyparser");
const Router = require("koa-router");
const koaStatic = require("koa-static");

const app = new Koa();
const router = new Router();

console.log("--------");
console.log(process.env);
console.log("--------");

const devPath = "../webapp";
const staticPath = process.env.STATIC_PATH || devPath;
const port = process.env.PORT || 3000;

console.log("--------");
console.log("staticPath----" + staticPath);
console.log("--------");

console.log("--------");
console.log("port----" + staticPath);
console.log("--------");

app.use(bodyparser());

app.use(router.routes()).
    use(router.allowedMethods());

app.use(koaStatic(path.join(__dirname, staticPath)));

app.listen(port, () => {

    console.log("[Koa2] start-quick is starting at port " + port);

});
