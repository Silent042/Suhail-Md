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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_31_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk0LFxuICAgICAgICA1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxODksXG4gICAgICAgIDQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MixcbiAgICAgICAgMjI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDYwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTExLFxuICAgICAgICA2LFxuICAgICAgICA1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIbExxc3VhL0RyMUtvbktvOHlmcW9md1J0TW1kQnpjaGFFTVZTajJKemwwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPVEdQTGRxclFocWVyWDZXY3E2SjNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA5NzdiNjc0LTk0MDktNDM5Mi1iYmIyLTkyZjE1NmMzZjkwZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICA3MixcbiAgICAgIDIwNSxcbiAgICAgIDIyMyxcbiAgICAgIDQxLFxuICAgICAgOTgsXG4gICAgICAxMTYsXG4gICAgICAyMDEsXG4gICAgICAxNjQsXG4gICAgICAxNDksXG4gICAgICAyLFxuICAgICAgMTA5LFxuICAgICAgOTksXG4gICAgICA5NCxcbiAgICAgIDIwNSxcbiAgICAgIDYzLFxuICAgICAgMjQ2LFxuICAgICAgMTUzLFxuICAgICAgNzEsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDE3OSxcbiAgICAgIDE4MyxcbiAgICAgIDE5MCxcbiAgICAgIDE3OCxcbiAgICAgIDEyMyxcbiAgICAgIDc3LFxuICAgICAgMzYsXG4gICAgICAxOTMsXG4gICAgICAyMjEsXG4gICAgICAxNDYsXG4gICAgICAyNCxcbiAgICAgIDI0OCxcbiAgICAgIDEzMixcbiAgICAgIDE1NSxcbiAgICAgIDE4NCxcbiAgICAgIDU0LFxuICAgICAgMzMsXG4gICAgICAxMTgsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNSVzNCN01ZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY4ODU1NzkxOjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjY5NTUwNDc3NTU3ODA6NDFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHZVbllRRUVPSDY3Yk1HR0JjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxT2doYlNVcFBsMlFQSmQ2T3JaMzl4ZGttc2dXNWU1amZrNG1YemJHVmlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkcxQ09sdDNyaHg5dHUzYUlqNHpMWVdqMzlPbnFiWm9CQ3JWdkRhVXlYaVFtV2R2N3RqUE9VNHU1TjhQMTdIenJwSTMrTFhqQzJaMVNwWXdQcXFXTEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhBdy9OcTBDQ1ZEaWhVQlVXV21XUDRtc2luQzBWUmpDZFlkWVAvZmVhNFNxand4Z3UyQUxTZnpiTW91ZUdIdUt1dnIwZDJobkkxc0I5MU5iUTlRQWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjg4NTU3OTE6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTM2OTA2MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
