const express = require('express');
const app = express();
app.get('/',(req,res) => {
    res.send('hello world');
});
app.get('/api/courses',(req,res) => {
    res.send([1,2,3,23]);
});
const port = process.env.PORT || 3000
app.listen(port, ()=> console.group('Listeing on port '+port+'...'));