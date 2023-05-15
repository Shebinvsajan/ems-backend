const db = require('./db')



//All employee get

const allEmployee = () => {
    return db.Employee.find().then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    employee: result
                }
            }
            else {
                return {
                    statusCode: 404,
                    message: "No Data all avilable"
                }
            }
        }
    )
}

// add employee

const addEmployee = (id, name, age, salary, designation, img) => {

    return db.Employee.findOne({
        id
    }).then((result) => {
        if (result) {
            return {
                statusCode: 404,
                message: "employee id alredy exit"
            }
        } else {
            const newEmp = new db.Employee({
                id,
                name,
                age,
                salary,
                designation,
                img
            })
            newEmp.save()
            return {
                statusCode: 200,
                message: "new data added succefully"

            }
        }
    })

}
// delete employee
const removeEmp = (id) => {
    return db.Employee.deleteOne({
        id
    }).then((result) => {
        if (result) {
            return {
                statusCode: 200,
                message: "Deleted succefully"

            }
        } else {
            return {
                statusCode: 404,
                message: "employee is not exist"
            }
        }
    })
}

// Edit Employee , get a perticular employee deatils
const getEmp = (id) => {
    return db.Employee.findOne({
        id
    }).then((result) => {
        if (result) {
            return {
                statusCode: 200,
                employee: result
            }
        }
        else {
            return {
                statusCode: 404,
                message: "No Data all avilable"
            }
        }
    })
}

// update paticular employee

const editEmp = (id, name, age, salary, designation, img)=>{
    return db.Employee.findOne({
        id
    }).then((result) => {
        if (result) {

                result.id = id            
                result.name = name
                result.age = age
                result.salary = salary
                result.designation = designation
                result.img = img
                result.save()
                return{
                    statusCode: 200,
                    message: "update succefully"

                }

                
            

        } else {

            return {
                statusCode: 404,
                message: "No Data all avilable"
            }
        }
    })

}



// Get all Task
const allTask = () => {
    return db.Task.find().then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    task: result
                }
            }
            else {
                return {
                    statusCode: 404,
                    message: "No Data all avilable"
                }
            }
        }
    )
}
// add task

const addTask = (id, cname, task, status) => {

    return db.Task.findOne({
        id
    }).then((result) => {
        if (result) {
            return {
                statusCode: 404,
                message: "Task alredy  exit"
            }
        } else {
            const newTask = new db.Task({
                id,
                cname,
                task,
                status: 'incomplete'

            })
            newTask.save()
            return {
                statusCode: 200,
                message: "new task added succefully"

            }
        }
    })

}


// get an particular task
const cnfTask=(id)=>{
    return db.Task.findOne({
        id
    }).then((result)=>{
        if(result){
            return {
                statusCode: 200,
                task: result
            }

        }else{
            return {
                statusCode: 404,
                message: "Task can't Conform "
            }

        }
    })

}


// update paticular Task

const upTask = (id, cname, task,status)=>{
    return db.Task.findOne({
        id
    }).then((result) => {
        if (result) {

                result.id = id            
                result.cname = cname
                result.task=task
                result.status=status

                result.save()
                return{
                    statusCode: 200,
                    message: "update succefully"

                }

                
            

        } else {

            return {
                statusCode: 404,
                message: "No Data all avilable"
            }
        }
    })

}



module.exports = {
    allEmployee,
    addEmployee,
    removeEmp,
    allTask,
    addTask,
    getEmp,
    editEmp,
    cnfTask,
    upTask
    
}