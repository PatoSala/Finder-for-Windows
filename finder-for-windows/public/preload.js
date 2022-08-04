const { contextBridge, ipcRenderer } = require('electron');
const drivelist = require('drivelist');

contextBridge.exposeInMainWorld('electron', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    ping: () => ipcRenderer.invoke('ping'),
    systemDrives: async () => {
        let drives = await drivelist.list();
        return drives
    }
    // we can also expose variables, not just functions
});
