module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: "./client/main.js",
    output: {
        publicPath: "/",
    },
}
