const webpackConfig = require("./webpack.config")

const config = {}
config.mode = webpackConfig.mode
config.port = process.env.PORT || 3000

config.urlPrefix = config.mode === "development" ? "http://localhost:3001" : webpackConfig.devServer.port

module.exports = config
