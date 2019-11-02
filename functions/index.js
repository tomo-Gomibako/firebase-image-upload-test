const functions = require("firebase-functions")

const api = require("./modules/api")

module.exports = {
	api: functions.https.onRequest(api)
}
