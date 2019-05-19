import express from "express"
import helmet from "helmet"
import compression from "compression"

import config from "../config"

const app = express()
app.set("view engine", "pug")
app.locals.config = config
app.use(helmet())
app.use(compression())

app.get("/health", (req, res) => res.send("ok"))
app.get("/", (req, res) => res.render("index"))
app.use("/public", express.static("public", {index: false, maxAge: 60 * 60 * 24 * 10}))

app.listen(config.port, () => console.log(`server listening on http://localhost:${config.port}/ in ${config.mode} mode`))
