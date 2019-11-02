const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({
	origin: "http://localhost:5000",
	optionsSuccessStatus: 200
}))

app.get("/ping", (req, res) => {
	res.send("pong")
})

app.post("/upload", (req, res) => {
	res.json({
		status: "ok"
	})
})

module.exports = app
