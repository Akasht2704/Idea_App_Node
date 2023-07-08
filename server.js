const express = require('express');
const serverConfig = require('./configs/server.config.js');

const app = express();

app.render('2.html');
app.listen(serverConfig.PORT, ()=>{
console .log(`Server started on the port ${serverConfig.PORT}`);
})