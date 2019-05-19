import webpackConfigFactory from "./webpack.config"

const config = {}
config.mode = process.env.NODE_ENV || "development"
config.port = process.env.PORT || 3000

config.webpackConfig = webpackConfigFactory({}, {mode: config.mode})
config.urlPrefix = config.mode === "development" ? `http://localhost:${config.webpackConfig.devServer.port}` : ""

export default config
