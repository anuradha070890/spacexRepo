//Install express server    
const express = require('express');

const path = require('path');   

const app = express();   


var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
// Serve only the static files form the dist directory    
// app.use(express.static(__dirname + './dist/mySpaceXLaunchApp'));

app.get('/*', function(req,res) {  
    res.sendFile('./dist/mySpaceXLaunchApp/index.html');   
});  

// Start the app by listening on the default Heroku port    
app.listen(process.env.PORT || 8888);