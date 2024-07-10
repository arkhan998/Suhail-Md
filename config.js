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
global.caption = process.env.CAPTION || global.caption || "🦋⃟ᴠͥɪͣᴘͫ✮⃝🇲ᗩしᏆᏦ 🇸αнαв𝄟⃝" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923322964709";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923196057528";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_33_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDMxLFxuICAgICAgICA5MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDcwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc4LFxuICAgICAgICA5LFxuICAgICAgICA3LFxuICAgICAgICA1NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjExLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDY4LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjExLFxuICAgICAgICA1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MCxcbiAgICAgICAgNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtOUEra2pDQWtuRE1icU1TTTVJckxleWtXbUQxOVBrWTZnODMvQi9tL0ZvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtSkpfQjVQZ1NoV1JRb2IzaURac2l3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ1NDE5MGIyLWZhNjQtNDdiOS04YWI5LTlhMzA1ZGZmOWUwZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDE4NixcbiAgICAgIDEyOCxcbiAgICAgIDEyMCxcbiAgICAgIDQ0LFxuICAgICAgNjksXG4gICAgICA0MixcbiAgICAgIDE1OSxcbiAgICAgIDQ1LFxuICAgICAgMjE0LFxuICAgICAgMjE5LFxuICAgICAgMTAyLFxuICAgICAgMjA4LFxuICAgICAgMjAwLFxuICAgICAgMTgyLFxuICAgICAgMjA1LFxuICAgICAgMTA1LFxuICAgICAgMTQ5LFxuICAgICAgMTEsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgNDYsXG4gICAgICAxNjQsXG4gICAgICAxOSxcbiAgICAgIDEsXG4gICAgICAxNDMsXG4gICAgICAyMzQsXG4gICAgICAxOSxcbiAgICAgIDExOCxcbiAgICAgIDIzNSxcbiAgICAgIDEyNyxcbiAgICAgIDExOSxcbiAgICAgIDMsXG4gICAgICAxMDksXG4gICAgICAzNSxcbiAgICAgIDQ3LFxuICAgICAgNDEsXG4gICAgICAyMyxcbiAgICAgIDE5NSxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjMzNjVEREdRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMjI5NjQ3MDk6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1BTElLIFNBSEFCXCIsXG4gICAgXCJsaWRcIjogXCIyMDcxNTk2MjczNzA3MzY6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKbVZuTEVDRU42THU3UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRRZ254Qjdvb3c5ME54bXdlVDBEaXZ1T0tqTHBWdHVyWTMvMmZYWS9IV2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTk1uREVoMHFzOFFMRlJueVJacUNlZ2laL25GcEZvZkNrNkZRN1J2QjlPMW13L0pJZ251dGNIUi9XeERITmZNV0EwVnR6eGlUR0Z0WXliR0RmRmdHQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ3ljYWFLalBCOFRkbUNjeFpnUmZvQ0Q5R1VoNUIxbGJTMUVvTEVBRFEyMmtyZE9pWGQ5VEhjRzJrU2laQldLeDg0bFRpeTQyMEN3ZlIxM1dkQVpsQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzIyOTY0NzA5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjMyODAxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ⟣⟥𝙈𝙖𝙡𝙞𝙠-𝙈𝙙⟤⟢ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "⟣⟥𝙈𝙖𝙡𝙞𝙠-𝙈𝙙⟤⟢",
  ownername:process.env.OWNER_NAME|| "Malik Sahab",


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
