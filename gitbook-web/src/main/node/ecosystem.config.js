/**
 * Created by zhangnanning on 2019/5/29.
 */
module.exports = {
    apps : [
        {
            name: "gitbookWeb",
            script: "./app.js",
            watch: true,
            env: {
                "PORT": 3000,
                "NODE_ENV": "development",
                "STATIC_PATH": "./webapp",
            },
            env_production: {
                "PORT": 8080,
                "NODE_ENV": "production",
                "STATIC_PATH": "../../../../../www/gitbook/_book",
            }
        }
    ]
};
