const MainController = require("./controllers/MainController")
const TodoController = require("./controllers/TodoController")

const commands = process.argv[2]
const params = process.argv.slice(3)

switch (commands) {
    case "show":
        TodoController.show()
        break;
    case "add":
        break;
    case "delete":
        break;
    case "edit":
        break;
    case "changeStatus":
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