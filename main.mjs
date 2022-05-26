import http from "http"
import ytdl from "ytdl-core"

const port = process.argv[2] || 3772

const server = http.createServer((req, res) => {
	let url = req.url.substr(1)
	if(["favicon.ico",""].includes(url)) {
		res.writeHead(404)
		res.end()
		return
	}

	ytdl.getInfo(url).then(i => {
		res.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"})
		res.end(JSON.stringify(i))
	})
	.catch(e => {
		console.log("---- Error getting ytdl info ----")
		console.log(`url: ${url}`)
		console.log(e)
		console.log("---------------------------------")
		res.writeHead(500)
		res.end()
		return
	})

})

server.on("error", console.error)

server.listen(port, () => console.log(`Server running on port ${port}\nnode . <port>\tto set port`))

//ytdl.getInfo("https://www.youtube.com/watch?v=dQw4w9WgXcQ").then(a => console.dir(a, {depth: 1}))
