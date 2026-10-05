const {app, BrowserWindow} = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280, height: 900, minWidth: 800, minHeight: 600, titleBarStyle: 'hidden', titleBarOverlay: {
      color: '#0d0d0d', symbolColor: '#ffffff', height: 40
    },
    backgroundColor: '#0d0d0d'
  })
  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

