const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "zandile~pIphnRwS#BOsoRkPUwevzKP2r2MNV9nP07pPy3N41SEgoYfir_nI",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "☘🆃︎🅴︎🅻︎🅺︎🅸︎🅽︎🅶︎☘",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2637384XXXX",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "☘𝙉3𝙩𝙆𝙞𝙣𝙜 𝙈𝘿☘",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᵖᵒʷᵉʳᵉᵈ ᵇʸ ☘ℕ𝕖𝕥𝕂𝕚𝕟𝕘 𝕄𝔻☘ ˢᵘᵇˢᶜʳⁱᵇᵉ ᵗᵒ https://youtube.com/@joshuamambo1 ᶠᵒʳ ᵐᵒʳᵉ ᵗᵘᵗᵒʳⁱᵃˡˢ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/cik12y.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> https://youtube.com/@joshuamambo1 ɪꜱ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜꜱɪɴɢ ☘🆃︎🅴︎🅻︎🅺︎🅸︎🅽︎🅶︎☘ ꜰʀᴏᴍ https://youtube.com/@joshuamambo1⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 ꜱᴇᴇɴ ʙʏ ☘🆃︎🅴︎🅻︎🅺︎🅸︎🅽︎🅶︎☘ 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "true",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "fals3"
// make it true for auto recoding 
};
