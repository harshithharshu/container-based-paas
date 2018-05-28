root@first:~# vi fileupload.js
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
      var newpath = '/upload/' + files.filetoupload.name;
	  app.post('http://clo.harshith.in:3311/insert' , function(req , res){
	  var up = req.newpath;
	  res.send(up);
	  });
      fs.rename(oldpath, newpath, function (err) {
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
 //include auth.php file on all secure pages ?> 
<!DOCTYPE html> 
<html> 
<head> 
<meta charset="utf-8"> 
<title>Welcome Home</title> 
<link rel="stylesheet" href="css/style.css" /> 
</head>
<body background="https://www.xmple.com/wallpaper/gradient-linear-pink-orange-1920x1080-c2-ffa500-ff1493-a-0-f-14.svg">
<font color="white"><h1>container 1</h1></font>
<center>
<table border="0" cellspacing = "10"> 
<div class="form"> 
<th><p>Welcome <?php echo $_SESSION['username']; ?>!</p></th> 
<th><a href="logout.php">&nbsp;&nbsp;&nbsp;Logout</a></th>
</table> 
<br>
<table border="2">
<center>
<br><br><br><br>
<font face = "times" size = "20" color = "WHITE">CLOUD COMPUTING</font>
<br><br><br><br>
<form action="http://clo.harshith.in:5678/fileupload" method="post" enctype="multipart/form-data">
<input type="file" name="filetoupload"><br>
<input type="submit">
</form>

</form>
</body> 
</html> 
