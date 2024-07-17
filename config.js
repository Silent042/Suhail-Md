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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348168855791,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_20_45_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3LFxuICAgICAgICA3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICA0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDksXG4gICAgICAgIDExMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDk0LFxuICAgICAgICA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwLFxuICAgICAgICA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDg1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDczLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNvc3hOVnFRWmswTUR0VXFxbHNKUEJVdW15NVhtL2l3bUcyTlF3VXJqY1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi0yTnJ0cHM1VGcybFRjRFlqQmlTb0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTFlODc0YzYtOTAxYi00ZWIwLTgzNGUtNjhlODZlZTcxMWYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgzLFxuICAgICAgNjYsXG4gICAgICAxNDYsXG4gICAgICA1NyxcbiAgICAgIDE0NyxcbiAgICAgIDcxLFxuICAgICAgNzcsXG4gICAgICA2NixcbiAgICAgIDQ4LFxuICAgICAgNTAsXG4gICAgICA5MSxcbiAgICAgIDEyMSxcbiAgICAgIDExNCxcbiAgICAgIDU2LFxuICAgICAgMTM0LFxuICAgICAgMjQ0LFxuICAgICAgMTMxLFxuICAgICAgMTMxLFxuICAgICAgNTgsXG4gICAgICA2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAyMzMsXG4gICAgICAxNzksXG4gICAgICAxMzIsXG4gICAgICAyMDMsXG4gICAgICAyMzksXG4gICAgICA1MCxcbiAgICAgIDE2OSxcbiAgICAgIDIxOSxcbiAgICAgIDM1LFxuICAgICAgMTA2LFxuICAgICAgMjEzLFxuICAgICAgNyxcbiAgICAgIDE2MixcbiAgICAgIDU3LFxuICAgICAgMSxcbiAgICAgIDIzMCxcbiAgICAgIDEyMixcbiAgICAgIDI0MyxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzVW5ZUUVFTWJhNExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMU9naGJTVXBQbDJRUEpkNk9yWjM5eGRrbXNnVzVlNWpmazRtWHpiR1Zpbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtOEV5b29sbk5vZVpWS2d3UXNMejFQZWpKTWR4ekdIRXR1SkhVUHNvcFc1NENZMTE0VlpQcVIwOWV5QkI1SzdkUjB0Qk45TENkcUtQVUQvL1Zuc0tDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkdWJYTlZJMVdQK2pjd2ptcSt2d0xiRjJQV01pMWFzTVU2T1pKSTJWRmh1dHE2b2NINEw2UVptT1l1Q2ZDbVlldjZRQVBPSUI3Z3dSOXo2REloUC9qdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjg4NTU3OTE6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNjk1NTA0Nzc1NTc4MDo4NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjg4NTU3OTE6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI0OTA5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUYzYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjNhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVS9qU1VHL2VnMGdrY0VLNDM1TmNML0hkRjBYT3dwWjdBckViK2hrU1l2az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDgyNjE2NDQ0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGM2IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVWXl0eEFZRWE2Y3dyMS9leG1aeVIxTGYyN1J3eUg5bXBGVFFWaDhtaERZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwODI2MTY0NDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyNDgyNzYwNTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
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
