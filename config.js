//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254739937062,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "254724605137";
global.sudo = process.env.SUDO || "254724605137";
global.owner = process.env.OWNER_NUMBER || "254724605137";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254724605137";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254724605137";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0E0NC9kajcvcTJhQmlWYytOTm00U0hYWldGN3VBLzlMQzRBdlJPVmVtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2daNGlWMXE0RVdWR2k0cVFiSzVSY2MyRzh3TTNjcnFBb3ZzaTJHdEdHYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSUdWdFlBSU1COHRPblB5Q1RHUk9IL01BOGZrM3dyazJSQjlOTyt3Mm1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuSGlmMGVjZy9vNlljcUtBYUM4RXRyWVJtZUIyaTJRWDZITFZpSXFjSUZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtOUzNrbVIyODgweGFSeWpGZjVuVDRsRFpvZjFkMGZ6QzZYQm9CZ0lORUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFIY3liQXYreDE2eFd0aVVZeG0yM0lvVjJISzRVUGxneHFsZS9ycVVlMXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktJOVVNUHFESTJVeW9MMWVOYkNiSXFNTEFHUzd6WXJqTW1oZHp5Z1BHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejVsaWRPMmg3NjFQeklxeDVycXc3NFZpamd0VTQ1b3FFRkVpSkQ1dUx3dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitNN3RNUTgzR3dJTGgrRDYwZXZHWDJGYktvdFdiQVQyY3lzQ2VnR1V1OHV1dHFPbXh1SjU5Z0twRG9DRFFMYVhsZmpzRW40YmZDajRqYmliRGFrVUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6IkY3MXBlbUU4aUZEdUV6MXhSWWo3V2dlUGROc0ZGMTM5ZktMY0ZSU0l3K289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzI0NjA1MTM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVENDIzMTBERUMyNTM1Mzg3RDIyQTExMkRDRDcyRDUyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI2MzExNjR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcyNDYwNTEzN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5REQ2MTI3ODIzRDg5QjQyQUJGN0YzN0YzQkJDMTJBNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNjMxMTY2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MjQ2MDUxMzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzNCOTFCQkEzQ0JGQzM2QzBDMDVDQTNGRkEyQzkwMzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjYzMTIyNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLUZuMUFmVXdUVWFXY2pSdXFtNk9DdyIsInBob25lSWQiOiJkMDE2ZmQ3OC1hYWJmLTQ5NDgtOTg5Mi0yNjk4NDU3MWE4YmIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHJRU3ZNL1B5em5zc3lnaG93K0hMNld3N2NNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMWGFoT1ZJTkFKekJTQjZxMVZIWnA0bXQ4dz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJTWVAxWkU3MyIsIm1lIjp7ImlkIjoiMjU0NzI0NjA1MTM3OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQmxlc3NlZCBGYXNoaW9uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMS2Vuc0VFRU9tSHRiVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzK2hBMU9WVlB4VVhFRzVnYmVibU5RdG9DdVQ2eUNMbWVBaDRjcmxLakNFPSIsImFjY291bnRTaWduYXR1cmUiOiIyU0MvNFFJUmVPUVM4NCtrRlJxdElRdzJuYmFIZU04NWVCcE1oOXFhNndVVy9NOTJ6SjBRb2trZW9pUm1Zd0ljMVVqWkVoL0VQd2FKU2d0bTRFNllCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMVFwNjVxS2JvbytxQXA0YUFnZUpIb2hIeUxTSE1iUFRPaisrcDVrRHFhNnVqSHNSTHI0TjJnUTR0SDNKaUk0YkFLQWhuTGFqelR6VlE1ZlpZV3dLRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MjQ2MDUxMzc6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiUG9RTlRsVlQ4VkZ4QnVZRzNtNWpVTGFBcmsrc2dpNW5nSWVISzVTb3doIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNjMxMzQ2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJIcCJ9"
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||"LIL HACKER-MD",
  author: process.env.STICKER_AUTHOR || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "LIL HACKER-MD",
  ownername: process.env.OWNER_NAME || "prince B",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


