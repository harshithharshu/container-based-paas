var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var express = require('express');
var app = express();

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'c:/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
		   
	  
	  
	var data = `{\"employee_name\":\"${newpath}\",\"employee_salary\":170,\"employee_age\":32, \"id\" : 59}`;

var options = {
    host: '127.0.0.1',
    port: 3000,
    path: '/employee',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
};
var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log("body: " + chunk);
    });
});
        if (err) throw err;
        res.write('<body background="https://www.xmple.com/wallpaper/gradient-linear-pink-orange-1920x1080-c2-ffa500-ff1493-a-0-f-14.svg">');
        res.write('<center>');
        res.write('<br><br>');
        res.write('<font face = "times" size = "20" color = "WHITE">CLOUD COMPUTING');
        res.write('<br><br><br><br><br><br>');
        res.write('File uploaded Successfully');
        res.write('<a href="http://clo.harshith.in:7777">back</a>');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('testing');
    return res.end();
  }
}).listen(5678);
