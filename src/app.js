const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const path = require("path")
require('./db/conn');

const PeopleData = require('./models/peopleData')
const TodoData = require('./models/todoData')
const CommentData = require('./models/commentsData')

const static_files = path.join(__dirname, "../public")

app.use(express.json())
app.use(cors())
app.use(express.static(static_files))



app.get('/',(req, res) => {
    res.render("index")
})

app.post('/users', async(req, res) => {
    try{
        const peopleData = new PeopleData(req.body)
        const createPeopleData = await peopleData.save()
        console.log(createPeopleData);
        res.status(200).send(createPeopleData)
    }catch(e){
        res.status(400).send(e)
    }
})


app.get('/users', async(req, res) => {
    try{
        const peopleData = await PeopleData.find({})
        res.status(201).send(peopleData)
    }catch(e){
        res.status(400).send(e)
    }
})

app.get("/users/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const peopleData = await PeopleData.findById(_id)
        res.status(200).send(peopleData)
    }catch(e){
        res.status(400).send(e)
    }
})

app.delete("/users/:id", async(req, res) => {
    try{
        const deleteUser = await PeopleData.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send()
        }else{
            return res.status(200).send(deleteUser)
        }
    }catch(e){
        res.status(400).send(e)
    }
})


app.post('/todos', async(req, res) => {
    try{
        const todosData = new TodoData(req.body)
        const createTodoData = await todosData.save()
        console.log(createTodoData);
        res.status(200).send(createTodoData)
    }catch(e){
        res.status(400).send(e)
    }
})

app.get('/todos', async(req, res) => {
    try{
        const todosData = await TodoData.find({})
        res.status(201).send(todosData)
    }catch(e){
        res.status(400).send(e)
    }

})
app.get("/todos/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const todosData = await TodoData.findById(_id)
        res.status(200).send(todosData)
    }catch(e){
        res.status(400).send(e)
    }
})

app.post('/comments', async(req, res) => {
    try{
        const commentsData = new CommentData(req.body)
        const createCommentsData = await commentsData.save()
        console.log(createCommentsData);

        res.status(200).send(createCommentsData)
    }catch(e){
        res.status(400).send(e)
    }
})

app.get('/comments', async (req, res) => {
    try{
        const commentsData = await CommentData.find({})
        res.status(201).send(commentsData)
    }catch(e){
        res.status(400).send(e)
    }
})
app.get("/comments/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const commentsData = await CommentData.findById(_id)
        res.status(200).send(commentsData)
    }catch(e){
        res.status(400).send(e)
    }
})



app.listen(port,(req, res) => {
    console.log(`App is running on port ${port}`);
})