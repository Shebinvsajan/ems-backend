const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URL , { useNewUrlParser: true, useUnifiedTopology: true });const Employee = mongoose.model('Employee', {
    id: String,
    name: String,
    age: Number,
    salary: Number,
    designation: String,
    img: String
})
const Task = mongoose.model('Task', {
    id: String,
    cname: String,
    task: String,
    status: String
})

module.exports = {
    Employee,
    Task
}