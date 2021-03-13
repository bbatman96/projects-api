const express = require('express');
const mongoose=require('mongoose')
const app = express();
const dotenv=require('dotenv');

dotenv.config();
const author=require('./controller/author');
const URI=process.env.DB_URL;

app.get('/', function(req, res){
    res.send('ha bai apan ki api kaam kri h ')
})

app.get('/api/author/list', author.list);
app.post('/api/author/create', author.create);
app.get('/api/author/:id', author.find);
app.put('/api/author/:id', author.update);
app.delete('/api/author/:id', author.remove);

app.listen(8080, function () {
    console.log('ha bai api kaam kri h at 8080'  );
});