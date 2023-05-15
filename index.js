const express = require('express')
const cors = require('cors')

require('dotenv').config()
const server = express()
const logic = require('./services/logic')
const path = require('path')

server.use(express.static('dist'))

server.use(cors({
    origin: "http://localhost:3000"
}))



server.use(express.json())


server.listen(8000, () => {
    console.log('Ems started at port number 8000');
})

// Get all Employee Api

server.get('/get-all-employee', (req, res) => {
    logic.allEmployee().then((result) => {
        res.status(result.statusCode).json(result)
    })
})

// Add Employee

server.post('/add-employee', (req, res) => {

    logic.addEmployee(req.body.id, req.body.firstName, req.body.age, req.body.salary, req.body.designation, req.body.imageURL).then((result) => {
        res.status(result.statusCode).json(result)
    })
})
// Delete Employee

server.delete('/delete-employee/:id', (req, res) => {

    logic.removeEmp(req.params.id).then((result) => {
        res.status(result.statusCode).json(result)
    })
})

// get Perticular Employee Deatils (edit)

server.get('/get-an-employee/:id', (req, res) => {
    logic.getEmp(req.params.id).then((result) => {
        res.status(result.statusCode).json(result)
    })
})
// get perticular Employee data update
server.post('/update-employee', (req, res) => {

    logic.editEmp(req.body.id, req.body.firstName, req.body.age, req.body.salary, req.body.designation, req.body.imageURL).then((result) => {
        res.status(result.statusCode).json(result)
    })
})


// get All task

server.get('/get-all-task', (req, res) => {
    logic.allTask().then((result) => {
        res.status(result.statusCode).json(result)
    })
})

// Add task

server.post('/add-task', (req, res) => {

    logic.addTask(req.body.id, req.body.cname, req.body.task,req.body.status).then((result) => {
        res.status(result.statusCode).json(result)
    })
})

// get  particular task 
server.get('/get-task/:id', (req, res) => {
    logic.cnfTask(req.params.id).then((result) => {
        res.status(result.statusCode).json(result)
    })
})

// update the task
server.post('/update-task', (req, res) => {

    logic.upTask(req.body.id, req.body.cname, req.body.task, req.body.status).then((result) => {
        res.status(result.statusCode).json(result)
    })
})

server.get('/*',(req,res)=>{
    res.sendFile(path.join(`${path.resolve(path.dirname(''))}/dist/index.html`))
})
