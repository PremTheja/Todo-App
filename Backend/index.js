const express = require('express')
const app = express()
const port=3000;
const {createTodo,updateTodo}=require("./types")
const {Todo}=require('./db')

app.use(express.json())

app.post('/todo', (req, res) => {
   const createPayload=req.body
   const parsedPayload=createTodo.safeParse(createPayload)
   if(!parsedPayload.success){
    res.status(411).json({
        msg:"you sent worng input"
    })
    return
   }
  
})

app.get('/todos', (req, res) => {
  
})

app.put('/completed', (req, res) => {
    const updatePayload=req.body
    const parsedPayload=updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent worng input"
        })
        return
       }
})

app.listen(port,()=>{
    console.log (`server is listing to ${port}`)
})