const path = require("node:path");
const { app, BrowserWindow, shell } = require("electron");

const APP_TITLE = "Eaglercraft Launcher Improved";

function createWindow() {
  const win = new BrowserWindow({
    title: APP_TITLE,
    width: 1360,
    height: 880,
    minWidth: 960,
    minHeight: 640,
    backgroundColor: "#05070f",
    autoHideMenuBar: true,
    icon: path.join(__dirname, "build", "icon.png"),
    webPreferences: {
      contextIsolation: true,
      sandbox: false,
      nodeIntegration: false,
      backgroundThrottling: false
    }
  });

  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, "index.html"));

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  win.webContents.on("will-navigate", (event, url) => {
    const allowedPrefixes = ["file://", "data:", "blob:", "about:"];
    if (!allowedPrefixes.some((prefix) => url.startsWith(prefix))) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

