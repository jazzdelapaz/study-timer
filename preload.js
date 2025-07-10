// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('windowControls', {
  //minimize: () => ipcRenderer.send('resize-window', width, height),
  maximize: () => ipcRenderer.send('maximize-window'),
  close: () => ipcRenderer.send('close-window'),
  //resizeWindow: (width, height) => ipcRenderer.send('resize-window', width, height)
  toggleWindowSize: () => ipcRenderer.send('toggle-window-size'),
  onWindowStatus: (callback) => ipcRenderer.on('window-status', callback),
  send: (channel, data) => ipcRenderer.send(channel, data),
});

console.log("[preload] Preload script loaded");