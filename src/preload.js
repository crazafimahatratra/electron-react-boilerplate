import { ipcRenderer, contextBridge } from "electron";

contextBridge.exposeInMainWorld("app", {
    invoke: (channel, args) => ipcRenderer.invoke(channel, args),
});
