const Author=require('../model/author');


function list(req,res) {
    res.send('List author');
}


function create(req,res) {
    
    res.send('create author');
}

function update(req,res) {
    res.update('update author');
}

function remove(req,res) {
    res.send('remove author');
}

function find(req,res) {
    res.send('find author');
}
 module.exports={
     list,
     find,
     create,
     remove,
     update,
 }