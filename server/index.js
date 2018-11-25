const express = require("express")
const helmet = require("helmet")
const compression = require("compression")

const config = require("../config")
const webpackConfig = require("../webpack.config")

const app = express()
app.set("view engine", "pug")
app.locals.config = config
app.locals.webpackConfig = webpackConfig
app.use(helmet())
app.use(compression())

app.get("/", (req, res) => res.render("index"))
app.use("/public", express.static("public", {index: false, maxAge: 60 * 60 * 24 * 10}))

app.listen(config.port, () => console.log(`server listening on http://localhost:${config.port}/ in ${config.mode} mode`))
