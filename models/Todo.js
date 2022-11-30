const fs = require("fs")

class Todo {
    constructor(id, task, status){
        this.id = id
        this.task = task
        this.status = status
    }
    static getAllList(){
        const todos = JSON.parse(fs.readFileSync("./data.json", "utf8"))
        return todos.map(({id, task, status}) => new Todo(id, task, status))
    }
}
module.exports = Todo