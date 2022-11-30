const MainController = require("./controllers/MainController")
const TodoController = require("./controllers/TodoController")

const commands = process.argv[2]
const params = process.argv.slice(3)

switch (commands) {
    case "show":
        TodoController.show()
        break;
    case "add":
        TodoController.add(params)
        break;
    case "delete":
        TodoController.delete(params)
        break;
    case "edit":
        TodoController.edit(params)
        break;
    case "changeStatus":
        TodoController.edit
        break;
    case "help":
        MainController.help()
        break;
    case undefined:
        MainController.message("Command can't be empty!")
        break;
    default:
        MainController.message("Command is unknown")
        break;
}