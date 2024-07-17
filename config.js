const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348168855791";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348168855791,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_19_41_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwLFxuICAgICAgICA0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NixcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgODksXG4gICAgICAgIDE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkwLFxuICAgICAgICA0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NixcbiAgICAgICAgMTI1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMixcbiAgICAgICAgMTkxLFxuICAgICAgICA2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc4LFxuICAgICAgICA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAwLFxuICAgICAgICAzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU3LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMXNtZ2VYaG9kaWpBWHd2R0RRL0xzSTVmZ3NWS2V5bXFSMkYzbkJWRE0zWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVDdELXZhQ0JUdTJnRmU5NGUtaEpzQVwiLFxuICBcInBob25lSWRcIjogXCJjNWYyZGRhYi1lYTNmLTRiMmYtYTUwYy1hY2I3YzFlMmRkOGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMTgsXG4gICAgICAxNTksXG4gICAgICAyNTQsXG4gICAgICA0OCxcbiAgICAgIDE2NSxcbiAgICAgIDE3OCxcbiAgICAgIDIwNCxcbiAgICAgIDY2LFxuICAgICAgMjEsXG4gICAgICAyNTUsXG4gICAgICAzOCxcbiAgICAgIDE1MixcbiAgICAgIDE2MixcbiAgICAgIDI0OCxcbiAgICAgIDEzOCxcbiAgICAgIDgzLFxuICAgICAgOTQsXG4gICAgICAyMTksXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICAyMjQsXG4gICAgICA3NSxcbiAgICAgIDE3NyxcbiAgICAgIDE3NyxcbiAgICAgIDIzOCxcbiAgICAgIDE3MSxcbiAgICAgIDExOCxcbiAgICAgIDIyOCxcbiAgICAgIDE4NixcbiAgICAgIDE5MSxcbiAgICAgIDEyNixcbiAgICAgIDQ4LFxuICAgICAgNCxcbiAgICAgIDI1LFxuICAgICAgMTA2LFxuICAgICAgMzAsXG4gICAgICAxNDYsXG4gICAgICAyMTksXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDVWSFFETFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjg4NTU3OTE6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNjk1NTA0Nzc1NTc4MDo4M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQelVuWVFFRU4rODRMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFPZ2hiU1VwUGwyUVBKZDZPclozOXhka21zZ1c1ZTVqZms0bVh6YkdWaW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRGttc3l3aGppaUk3U0VPNjBrRVQ2S1o3K3pVNkJ4dkhpeXF1RHp6QjBFRGJLVjVjcjFwWDlJUHF6YVkvcWprUkYxZklNbGVZTm9USzFpQlB6WHJZQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaERDdE53LzlPb2J6TFgzTkFSNHA3YUpibUhrT3YwTE5tSzBIQkptNlJKS3ZUZGVSbGM1cDllTmlNSkJjUGNHdXQ5MUtHMnJHYVM2eG1vajNWQkpLQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2ODg1NTc5MTo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjQ1MjgzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "?",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SILENT",
  ownername:process.env.OWNER_NAME|| "SILENT",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "HERMIT"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
