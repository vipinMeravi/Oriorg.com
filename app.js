const express = require('express') , redirect = require("express-redirect");
const body = require('body-parser');
const url = require('url');
const path = require('path');
const http = require('http');

const app = express();
redirect(app); 
var router = express.Router();
const usercontroller = require('./server/controller/usercontroller');

app.use(body.json());
app.use(body.urlencoded({ extended:true }));

app.use(express.static(path.join(__dirname, 'dist/oriorg')));

app.use(usercontroller);
app.use('/webapi',usercontroller);
app.set('port',3000);
const port = 3000;

server = http.createServer(app);

server.listen(port,function(){
  console.log('server listen');
})

app.use(router);
require('./server/controller/admin/testtxn')(app);
require('./server/controller/admin/pgredirect')(app);
require('./server/controller/admin/response')(app);
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');
