
var btn = this.document.querySelector('#btn')
// const BrowserWindow =require('electron').remote.BrowserWindow
const BrowserWindow = require('electron').remote.BrowserWindow;
// const { BrowserWindow } = require('electron').remote
window.onload = function () {
    btn.onclick = ()=>{
        newWin = new BrowserWindow({
            width: 500,
            height: 500
        })
        newWin.loadFile('red.html')
        newWin.on('close',()=>{
            newWin = null
        })
    }
}