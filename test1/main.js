var electron = require('electron')

var app = electron.app //引用app
var BrowserWindow = electron.BrowserWindow //窗口引用

var mainWindow = null //声明要打开的主窗口

app.on('ready',()=>{
    //设置窗口
    mainWindow = new BrowserWindow({
        width: 600,
        height: 600
    })
    //设置网页,加载html页面
    mainWindow.loadFile('index.html')
    //设置关闭
    mainWindow.on('closed',()=>{
        mainWindow = null
    })

})