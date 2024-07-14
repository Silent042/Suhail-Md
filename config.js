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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID DMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgODMsXG4gICAgICAgIDMyLFxuICAgICAgICA3LFxuICAgICAgICA0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDMxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmWWEyWjRtL1JSYW5mZ0hlOVcwcitwMnVDeXMxTy9zNjk3MDJHYXpqZHd3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTIyMjA5ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlFQjhEMUQ5NUVBRDQ2MjYyMzY4Njk0NzFFOTE4MUFCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDk2MTUzNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTIyMjA5ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ5MzhBMUU5QUJFNUMwNTg2NjgyRjQwQjUzQjJERTBFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDk2MTUzNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCWm94V3VJNVNZdVcxV0wzT0NXTWR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImZhYzJjZjFmLTgwYTItNDU4NC1iNjFkLWZhNjNlZjBkN2IwY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICAxNjYsXG4gICAgICAyNDgsXG4gICAgICAyNSxcbiAgICAgIDExOCxcbiAgICAgIDIzNyxcbiAgICAgIDIzNSxcbiAgICAgIDI0NSxcbiAgICAgIDEwNixcbiAgICAgIDE0NixcbiAgICAgIDEwMCxcbiAgICAgIDI0OSxcbiAgICAgIDkxLFxuICAgICAgMTcyLFxuICAgICAgMjQ0LFxuICAgICAgMjMxLFxuICAgICAgMTczLFxuICAgICAgMTI4LFxuICAgICAgMTY2LFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAxLFxuICAgICAgMzMsXG4gICAgICAxMjUsXG4gICAgICAyMDksXG4gICAgICAyMjAsXG4gICAgICAxMzgsXG4gICAgICA3LFxuICAgICAgMTE4LFxuICAgICAgMzcsXG4gICAgICAyMTUsXG4gICAgICAxODEsXG4gICAgICA1MixcbiAgICAgIDc5LFxuICAgICAgODUsXG4gICAgICA1MSxcbiAgICAgIDE0LFxuICAgICAgMTg1LFxuICAgICAgMTAyLFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjkySEhBUE1GXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEyMjIwOTg2OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4bS44bS84bS/4bSwVCAgIOG0gCAgIMmqICAgyoAgICDhtIAgICAgTSAgIOG0gCAgIOG0iyAgIMmqICAgybQgICDhtI8gICDKlcuWzZzNocuWypRcIixcbiAgICBcImxpZFwiOiBcIjE1NzY4NTg0ODc5MzEzNDoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdkh1bnNROUpQUHRBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImttVk85UkE1aWdkQ2tJTHB0WVVnWEd1TkpzNUVOL3hZWTdCSGVMeDJnV0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY3BHajNhSXIweEM5VDJ4ejMyZnltOXYwMzAzVnNVUWxDV1krRkUvbUViVmVJVm9ENFJLOWdXU2diRCt3VU10ZDdkMUpqLzNUVDlud0l3akJtTUo3QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOEhMelZ0YmxOdDZ2MnJ6VWxNclVmTEhUTTFlZm5aVTdObEhJc0tQNGl2aW96R051azNpNm1BUC85QWEvTWlReXZKNkpBY0tBM1RkVEhuK0RFNXJMQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMjIyMDk4NjoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDk2MTUyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxBUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEFRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNkJ4ZnVvdUZYeXpDTHg0MUlWbVR0eW9sNjBwQUd3U0h1YnI1SGdCdkVnQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTg5MDkwNjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzOTQyNTE3ODdcIn0iCn0="  // PUT your SESSION_ID 


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
