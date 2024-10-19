const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
const { Notification } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 700,
    minWidth: 800,
    minHeight: 700,
    webPreferences: {
      contextIsolation: true,
      preload: process.argv.find((arg) => arg.startsWith('--inject='))
        ? path.join(process.argv.find((arg) => arg.startsWith('--inject=')).split('=')[1])
        : undefined
    },
    icon: path.join(__dirname, '/assets/icon.png'),
  });

  let url = `https://bsky.app`;

  win.loadURL(url);

  win.on('closed', () => {
    win = null;
  });

  win.on('page-title-updated', (event, title) => {
    event.preventDefault();
    win.setTitle('BlueWave');
  });
}

function UpdateChecker() {
  // Nothing to implement yet.
}

function NewNotification(title, message) {
  const notification = new Notification(title, {
    body: message,
    icon: path.join(__dirname, '/assets/icon.png')
  });

  notification.show();
}

app.on('ready', () => {
  // NewNotification("BlueWave", "Application is ready!");
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

