const express = require('express')
const app = express()
const port=3000;
const {createTodo,updateTodo}=require("./types")
const {Todo}=require('./db')

app.use(express.json())

app.post('/todo', async(req, res) => {
   const createPayload=req.body
   const parsedPayload=createTodo.safeParse(createPayload)
   console.log(createPayload)
   console.log(parsedPayload)
   if(!parsedPayload.success){
    res.status(411).json({
        msg:"you sent worng input"
    })
    return
   }
   //putting in mongoose
  await Todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
   },{
    completed:true
   })
   res.json({
    msg:"Todo is completed"
   })

  
})

app.get('/todos', async(req, res) => {
   const todos=await Todo.find({})
   console.log(todos)
   res.json({
    todos
   })

})

app.put('/completed', async(req, res) => {
    const updatePayload=req.body
    const parsedPayload=updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent wrong input"
        })
        return
       }
       await Todo.updateOne({
        _id:req.body.id
       }, {
        completed:true
       })
})

app.listen(port,()=>{
    console.log (`server is listing to ${port}`)
})