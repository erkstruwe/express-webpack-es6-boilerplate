const path = require("path")

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: {
        index: "./client/index.js",
    },
    output: {
        path: path.join(__dirname, "public/generated"),
        publicPath: "/public/generated",
    },
    devServer: {
        port: process.env.DEV_SERVER_PORT || 3001,
    },
}
