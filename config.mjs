import webpackConfig from "./webpack.config"

export const config = {}
config.mode = webpackConfig.mode
config.port = process.env.PORT || 3000

config.urlPrefix = config.mode === "development" ? `http://localhost:${webpackConfig.devServer.port}` : ""
