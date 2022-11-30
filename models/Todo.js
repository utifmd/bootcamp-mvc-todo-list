const fs = require("fs")

class Todo {
    constructor(id, task, status, createdAt, updatedAt){
        this.id = id
        this.task = task
        this.status = status
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
    static getAllList(){
        const todos = JSON.parse(fs.readFileSync("./data.json", "utf8"))
        return todos.map(({id, task, status, createdAt, updatedAt}) => 
            new Todo(id, task, status, createdAt, updatedAt)
        )
    }
    static putAllList(todos){
        fs.writeFileSync("./data.json", JSON.stringify(todos, null, 3))
    }
}
module.exports = Todo