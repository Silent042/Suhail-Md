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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_05_27_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNyxcbiAgICAgICAgODEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYxLFxuICAgICAgICA5NixcbiAgICAgICAgODQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDkzLFxuICAgICAgICA0MyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICA2NixcbiAgICAgICAgNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDYxLFxuICAgICAgICA2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicUg1TG5aVzZYZU40bVhMc3ZqWkZJNkpsR21DWEpUTzhtWEkxTjBrS1lEdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY4ODU1NzkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NjA5RjU4NkU2NDIxNDdDMkM5MUY1NkNDMkQ1MDYxQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyODA0NjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS292TzQwX0ZUUjZXZVhfTnZYQWtOd1wiLFxuICBcInBob25lSWRcIjogXCI1NjcxMDUzZC0yNmJmLTRlODEtYTUxMi0wZWIwOTQ2OTdiMGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAxMTksXG4gICAgICAxMjcsXG4gICAgICA1NixcbiAgICAgIDE0OSxcbiAgICAgIDI1MixcbiAgICAgIDE3NSxcbiAgICAgIDMzLFxuICAgICAgMjUsXG4gICAgICA2NixcbiAgICAgIDMyLFxuICAgICAgMTk5LFxuICAgICAgMTc4LFxuICAgICAgMTc5LFxuICAgICAgMjQ4LFxuICAgICAgMTk1LFxuICAgICAgNTIsXG4gICAgICA0NyxcbiAgICAgIDEwLFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgNzcsXG4gICAgICAyMDMsXG4gICAgICAxLFxuICAgICAgNDUsXG4gICAgICAxNzgsXG4gICAgICA2MCxcbiAgICAgIDUyLFxuICAgICAgMjQ0LFxuICAgICAgMTIyLFxuICAgICAgMjQ3LFxuICAgICAgMTk1LFxuICAgICAgMjExLFxuICAgICAgNDMsXG4gICAgICAxNixcbiAgICAgIDkyLFxuICAgICAgMTg0LFxuICAgICAgMTYyLFxuICAgICAgMTU0LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZSUTZLV0ZIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY4ODU1NzkxOjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjY5NTUwNDc3NTU3ODA6ODZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUhWbllRRUVNYlA0clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxT2doYlNVcFBsMlFQSmQ2T3JaMzl4ZGttc2dXNWU1amZrNG1YemJHVmlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBmUFRnMHZGdTlpMzBVNHBsREwrTU9ocDBrMks2RXVQNFd6ZkNVSHhQVGxIYXQvRXplOVVDU1FzZ2FFaXVKWVIwNlJBbGw2dTV0OEg1Mm5ZSGV3cER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZkUWwzVVhSTmtwTlF1aldwVGNLUXV5b1RDT1U5cTNpTk9hMmFIUTZjOVlYOG1lS0YrUWpmYnkwNHhDUGdvVFNaNXZyOHRyWitkTG9NMGQ1NTgxOERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjg4NTU3OTE6ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI4MDQ1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUYzYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjNiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVVl5dHhBWUVhNmN3cjEvZXhtWnlSMUxmMjdSd3lIOW1wRlRRVmg4bWhEWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDgyNjE2NDQ0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMjQ4Mjc2MDU3XCJ9Igp9"  // PUT your SESSION_ID 


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
