const express = require('express');
const joi = require('joi');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name:'Course 1'},
    {id: 2, name:'Course 2'},
    {id: 3, name:'Course 3'},
    {id: 4, name:'Course 4'},
    {id: 5, name:'Course 5'},
];

app.get('/',(req,res) => {
    res.send('hello world');
});

app.get('/api/courses',(req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id',(req,res) => {
    const course = courses.find(c => c.id===parseInt(req.params.id));
    if(!course) 
        res.status(404).send('The course with the Given id is not available');
    else
        res.send(course); 
});

app.post('/api/courses',(req,res) => {

    // how we will handle using joi
    const schema = {
        name: joi.string().min(3).required()
    }
    const result = joi.validate(req.body,schema);
    console.log(result);

    // we can simplify the logic below using joi like this
    if(result.error){
      //  res.status(400).send(result.error);
      // this is for specific error
        res.status(400).send(result.error.details[0].message);
        return
    }

    if(!req.body.name || req.body.name.length < 3){
        // 404 Bad Request
        res.status(400).send('Name is Required and it must be more than 3 characters');
        return;
    }
    const course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/feed/:year/:month',(req,res) => {
    res.send(req.query);
});

const port = process.env.PORT || 3000
app.listen(port, ()=> console.group('Listeing on port '+port+'...'));

