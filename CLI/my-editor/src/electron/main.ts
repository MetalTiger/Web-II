import { app, BrowserWindow, ipcMain } from "electron"; // ipcMain permite trabajar con el proceso principal de Electron
import * as fs from 'fs'        // Responsable de interactuar con el sistema de archivos 
import * as path from 'path'    // Utilidades para trabajar con rutas de archivos y carpetas

const contentFile = path.join(app.getPath('userData'), 'content.html');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
});

// Método usado para comenzar a escuchar solicitudes en el canal getContent
ipcMain.handle('getContent', () => {
    if (fs.existsSync(contentFile)) {
        const result = fs.readFileSync(contentFile);
        return result.toString();
    }
    return '';
});

ipcMain.handle('setContent', ({}, content: string) => {
   fs.writeFileSync(contentFile, content);
});