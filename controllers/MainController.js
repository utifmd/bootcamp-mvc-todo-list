const MainView = require("../views/MainView")

class MainController {
    static message(text){
        MainView.message(text)
    }
    static help(){
        MainView.help()
    }
}
module.exports = MainController