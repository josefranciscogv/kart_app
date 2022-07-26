const express = require('express');
const path = require('path');

const apiRoutes = require('./src/routes');

const app = express();

const port = process.env.PORT || 3000;

app.use('/assets',express.static(path.join(__dirname,'public')));

app.use('/',(req,res,next) => {
    console.log('paso por aqui...');
    next();
})

app.get('/',(req, res) => {
    const indexPath = path.join(__dirname,'src','index.html');
    res.sendFile(indexPath);
});

app.get('/test',(req,res) => {
    const indexPath = path.join(__dirname,'src','index.html');
    res.sendFile(indexPath);
})

app.use('/api', apiRoutes);

app.listen(port, function(){
    console.log(`app is running in ${port}`);
});