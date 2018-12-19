const http = require('http');
const app = require('./Backend/app');
const posting = require('./Backend/posting');
const debug = require('debug')('node-angular');
const port = 3000;


app.set('port',port);
const server = http.createServer(app);

posting.set('port',port);
const server = http.createServer(app);
server.listen(port);
