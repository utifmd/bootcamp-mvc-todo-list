const TodoModel = require("../models/Todo")
const TodoView = require("../views/TodoView")

class TodoController {
    static show(){
        let todos = TodoModel.getAllList()
        TodoView.showAllList(todos)
    }
}
module.exports = TodoController