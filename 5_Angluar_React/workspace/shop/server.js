const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8081, function () {
  console.log('listening on 8081')
});

app.use(express.static(path.join(__dirname,'/build/index.html')));
