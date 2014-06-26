// var path = require('path');
// var archive = require('../helpers/archive-helpers');
// // require more modules/folders here!

// exports.handleRequest = function (req, res) {
//   res.end(archive.paths.list);
// };

var url = require('url');
var fs = require('fs');
// var path = require('path');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

var funcOfVerb = {}; // Maps HTTP verb (HTTP method) to a JS function

funcOfVerb['GET'] = function(req, res){
debugger;
  sendResponse(res, './public/index.html');
};

funcOfVerb['POST'] = function(response, htmlFilePath, statusCode){
debugger;
  statusCode = statusCode || 200;
  fs.readFile(htmlFilePath, function(err, html){
    if(err){throw err;}
    response.writeHead(statusCode, headers);
    response.write(html);
    response.end();
  });
};

var send404 = function(req, res){
debugger;
  utils.sendResponse(res, 'Only root directory is valid here.', 404);
};

handleRequest = function(request, response) {
  var func = send404;
  if (parse(request.url).pathname === '/')
    func = funcOfVerb[request.method] || func;
  func(request, response);
};



//open txt file
//iterate thru text file
//if url !found
//  append to list
//  serve loading.html
//else
//  serve cached html
//




// var collectData = function(request, cb){
//   var data = "";

//   request.on("data", function(chunk){
//     data += chunk;
//   });
//   request.on("end", function(){
//     cb(null, JSON.parse(data));
//   });
// };


exports.sendResponse = sendResponse;
exports.collectData = collectData;











  // utils.collectData(req, function(err, data){
  //   var message = data;

  //   fs.appendFile('../../archives/sites/sites~.txt', message, function(err) {
  //     if(err) {throw err;}
  //     console.log('The file was saved!');
  //   });

  //   message.objectId = idCounter;
  //   idCounter += 1;
  //   messages.unshift(message);
  //   utils.sendResponse(res, {message : message}, 201);
  // });



// http-helpers ------------------------



exports.serveAssets = function(res, asset) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
};

// As you progress, keep thinking about what helper functions you can put here!
