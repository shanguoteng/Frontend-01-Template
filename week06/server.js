/*
 * @Author: shanguoteng
 * @Date: 2020-05-13 20:19:27
 * @LastEditors: shanguoteng
 * @LastEditTime: 2020-05-13 20:34:45
 * @FilePath: \Frontend-01-Template\week06\server.js
 */
const http = require('http')
http.createServer((req, res) => {
    console.log(req)
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('X-Foo', 'bar')
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('ok')
}).listen(8088)
