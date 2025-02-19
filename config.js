const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SUPUN-MD=KQVykQYJ#ezkheLb6n1pw57vam1yL9fHmw85oSGofAX1Hx6jXgp0', //add your session id
MONGODB: process.env.MONGODB || "mEGsowNoNNvGHwBcJFgCJnSfAaBbPbEU", //add your mongodb url
 URL : process.env.BOT_MENU_LINKS || 'https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg',
MAX_SIZE: 500
};

