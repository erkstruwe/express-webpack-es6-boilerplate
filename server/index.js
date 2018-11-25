const express = require("express")

const config = require("../config")
const webpackConfig = require("../webpack.config")

const app = express()
app.set("view engine", "pug")
app.locals.config = config
app.locals.webpackConfig = webpackConfig

app.get("/", (req, res) => res.render("index"))
app.use("/public", express.static("public"))

app.listen(config.port, () => console.log(`server listening on http://localhost:${config.port}/ in ${config.mode} mode`))
