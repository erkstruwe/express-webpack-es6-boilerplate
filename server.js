const express = require("express")
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")

const app = express()
const webpackConfig = require("./webpack.config.js")
const compiler = webpack(webpackConfig)

app.use(express.static("public"))
app.use(webpackDevMiddleware(compiler, {publicPath: webpackConfig.output.publicPath}))

app.listen(3000, () => console.log("server listening on http://localhost:3000/"))
