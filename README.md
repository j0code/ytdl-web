# ytdl-web

ytdl-web is a light-weight webservice that provides ytdl.getInfo() over http

### Setup
First, download the source code or install it via npm:
```
npm i ytdl-web
```
Now you can start the server with this command:
```
node . <port>
```
port is optional, defaults to 3772

### Usage
To get info about a youtube video, just fetch `localhost:3772/https://www.youtube.com/video-id`

The result will be returned as json in the http body.

Internally, ytdl-web will call `ytdl.getInfo(...)`

#### Example code
```js
let serverUrl = "http://www.localhost:3772/"
let url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
fetch(serverUrl + url)
.then(res => res.json())
.then(data => console.log(data))
.catch(console.error)
```

### Download

To download a video, just select a format and open the url in a new tab.
