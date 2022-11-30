class MainView {
    static help(){
        let docs = `node index.js\nnode index.js show\nnode index.js add <task>\nnode index.js delete <id>\nnode index.js edit <id> <task>\nnode index.js changeStatus <id>\n`
        console.log(docs)
    }
    static message(text){
        console.log(text)
    }
}

module.exports = MainView