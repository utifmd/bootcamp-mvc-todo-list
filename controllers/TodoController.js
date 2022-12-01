const Todo = require("../models/Todo")
const TodoModel = require("../models/Todo")
const MainView = require("../views/MainView")
const TodoView = require("../views/TodoView")

class TodoController {
    static show(){
        let todos = TodoModel.getAllList()
        TodoView.showAllList(todos)
    }
    static add([task]){
        let todos = TodoModel.getAllList()
        let taskId = todos.length ? todos[todos.length - 1].id +1 : 1
        let todo = new TodoModel(taskId, task, false, new Date(), null)
        
        todos.push(todo)
        TodoModel.putAllList(todos)
        MainView.message(`${todo.id} has been saved!`)
    }
    static edit([taskId, task, toggle]){
        let todos = TodoModel.getAllList()
        let todo = todos.find(({id}) => parseInt(taskId) === parseInt(id))
        if(!todo) {
            MainView.message(`${taskId} not found!`)
            return
        }
        todos = todos.map(mTodo => {
            if (parseInt(taskId) !== parseInt(mTodo.id)) return mTodo
            if (toggle) mTodo.status = !mTodo.status
            if (task) mTodo.task = task

            mTodo.updatedAt = new Date()
            
            return mTodo
        })
        TodoModel.putAllList(todos)
        MainView.message(`${taskId} has been updated!`)
    }
    static delete([taskId]){
        let todos = TodoModel.getAllList()
        let todo = todos.find(({id}) => parseInt(taskId) === parseInt(id))
        if(!todo) {
            MainView.message(`${taskId} not found!`)
            return
        }
        let deleted = todos.filter(({id}) => parseInt(id) !== parseInt(taskId))

        todos = deleted
        
        TodoModel.putAllList(todos)
        MainView.message(`${taskId} has been deleted!`)
    }
}
module.exports = TodoController