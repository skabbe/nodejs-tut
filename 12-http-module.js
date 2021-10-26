const http = require('http')

server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page!')
    }
    if (req.url === '/about') {
        res.end('Our short history!')
    }
    res.end(`<h1> Opps! </h1>
    <p>we cant semm to find the page your are looking for</p>
    <a href="/"> back home </a>
    `)
})

server.listen(5000)