const electron = require('electron')
var path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow
function createWindow () {
  mainWindow = new BrowserWindow({
    transparent: true,
    frame: false,
    toolbar: false,
    resizable: false,
    width:1300,
    show: false,
    icon: path.join(__dirname, 'images/ruler-icon.png')
  })
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
