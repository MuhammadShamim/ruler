/**
 * Ruler - Desktop Screen Measuring Tool
 * Main Process (Electron)
 * 
 * Author: Muhammad Shamim
 * License: MIT
 * Version: 0.0.1
 * 
 * Description:
 * This is the main process file for the Ruler Electron application.
 * It handles the creation and management of the application window,
 * lifecycle events, and window properties configuration.
 */

// Import required Electron modules
const electron = require('electron')
var path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

/**
 * Main window instance
 * @type {BrowserWindow|null}
 */
let mainWindow

/**
 * Creates the main application window
 * 
 * Window Configuration:
 * - transparent: true - Allows transparency for clean overlay appearance
 * - frame: false - Removes system title bar and borders
 * - toolbar: false - Disables toolbar
 * - resizable: false - Prevents window resizing to maintain fixed dimensions
 * - width: 1300px - Window width for horizontal ruler display
 * - height: 100px - Window height optimized for ruler visibility
 * - show: false - Window initially hidden until ready
 * - icon: Cross-platform icon path
 */
function createWindow () {
  mainWindow = new BrowserWindow({
    transparent: true,        // Enable transparent background
    frame: false,             // Remove system window frame
    toolbar: false,           // Hide toolbar
    resizable: false,         // Prevent resizing
    width: 1300,              // Fixed width for ruler
    height: 100,              // Fixed height for ruler
    show: false,              // Don't show until ready
    icon: path.join(__dirname, 'images/ruler-icon.png')  // Application icon
  })
  
  // Load the HTML content from index.html
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  
  // Handle window closed event
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  
  // Show window once it's ready to display
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
}

/**
 * Event: App Ready
 * Fired when Electron has finished initialization and is ready to create browser windows
 */
app.on('ready', createWindow)

/**
 * Event: Window All Closed
 * Quit the app when all windows are closed (except on macOS where apps stay open)
 */
app.on('window-all-closed', function () {
  // On macOS, applications stay active until user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

/**
 * Event: App Activate
 * On macOS, re-create window when dock icon is clicked and no windows are open
 */
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
