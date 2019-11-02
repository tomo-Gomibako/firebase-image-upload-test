import Api from "./lib/Api.js"

function click_button() {
	console.log("clicked!")
}

let image
function file_changed(files) {
	image = files[0]
}
async function file_upload() {
	const file = image
	const form = new FormData()
	form.append("file", file)
	await Api.post_form(`/upload`, form)
}

window.click_button = click_button
window.file_changed = file_changed
window.file_upload = file_upload
