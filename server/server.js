const express = require('express');
const server = express();
const path = require('path');
const publicPath = path.join(__dirname, '../', 'public');
const port = process.env.PORT || 3000;

server.use(express.static(publicPath));

server.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

server.listen(port, () => {
    console.log('server is up!');
});