const {app, BrowserWindow, ipcMain, ipcRenderer, electron, Menu} = require('electron')
const path = require('path')
// var routie = require("./js/routie.min")
$ = require('jquery')

let secondWindow;
let win;


function createWindow() {
     win = new BrowserWindow({
        width:800,
        height:600,
        frame: false,
        
        webPreferences: {
            nodeIntegration:true
        }
    })

    win.on("close", (event) => {
        event.preventDefault()
    })

    win.loadFile(path.join(__dirname+'/html','index.html'))
    win.on('closed', (event) => {
        win=null;
    })
}

app.on('ready', () => {
    
    createWindow();
})




