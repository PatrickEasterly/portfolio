const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 3003;

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', '');
app.set('view engine', 'html');
const path = require('path');
app.use(express.static(path.join(__dirname, "/")));

app.get('/', (req, res)=> {
    res.render('index2')
})

server.listen(PORT, ()=>{
    `Now listening on port ${PORT}`
});