const win = require('electron').remote.getCurrentWindow();
const MINUS = document.getElementById('minimize');

MINUS.addEventListener('click', () => {
    console.log('minimize');
    win.minimize();
});
