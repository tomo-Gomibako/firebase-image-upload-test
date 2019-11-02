const FETCH_OPTS = {
	mode: "cors",
	cache: "no-cache",
	credentials: "same-origin",
	headers: {
		"Content-Type": "application/json; charset=utf-8",
	},
	redirect: "follow",
	referrer: "no-referrer"
}

const url_base = "http://localhost:5001"

export default {
	async get(endpoint) {
		const res = await fetch(`${url_base}${endpoint}`)
		return await res.json()
	},
	async post(endpoint, data) {
		if(typeof data !== "object") {
			console.error("data must be an object.")
			return
		}
		const res = await fetch(`${url_base}${endpoint}`, {
			...FETCH_OPTS,
			method: "POST",
			body: JSON.stringify(data)
		})
		return await res.json()
	},
	async post_form(endpoint, data) {
		if(!data instanceof FormData) {
			console.error("data must be an instance of FormData.")
			return
		}
		const res = fetch(`${url_base}${endpoint}`, {
			...FETCH_OPTS,
			method: "POST",
			body: data
		})
		return await res.json()
	}
}
