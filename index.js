const express = require('express');
let BodyParser = require('body-parser');
var app = express();
let path = __dirname + '/public';
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));
app.get('/:page', function (req, res) {
	let {page} = req.params;
	if(page){
		res.sendfile(path+'/'+page+'.html');
	}
	else{
		res.sendfile('index.html');
	}
});
  
  app.listen(3000, function () {
	  console.log("listen port 3000");
  });




