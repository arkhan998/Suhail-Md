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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_45_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzksXG4gICAgICAgIDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDMyLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDY5LFxuICAgICAgICA3NixcbiAgICAgICAgMjAsXG4gICAgICAgIDMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc1LFxuICAgICAgICA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM5LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4LFxuICAgICAgICA0MixcbiAgICAgICAgMjE4LFxuICAgICAgICA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwLFxuICAgICAgICA0NixcbiAgICAgICAgNDksXG4gICAgICAgIDQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzksXG4gICAgICAgIDM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDU2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU2LFxuICAgICAgICA1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgODksXG4gICAgICAgIDg2LFxuICAgICAgICA0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZRUENqNlU4MnF6RWhpRExFZUg4ZDk3Q20wMVBsYlFMNUI0d0x1RTN5bVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInp2NkdQbEhKVHVpYzRlVHJreFRQREFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmY5YzM3MTYtZmUzYy00NWRhLThlZWUtNTBmMjhlODZmNDlhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNixcbiAgICAgIDE2MixcbiAgICAgIDg1LFxuICAgICAgMTc1LFxuICAgICAgMzIsXG4gICAgICAxMDgsXG4gICAgICA5NixcbiAgICAgIDIyMixcbiAgICAgIDE1NyxcbiAgICAgIDIwNSxcbiAgICAgIDc5LFxuICAgICAgMTM4LFxuICAgICAgNzEsXG4gICAgICAyMTIsXG4gICAgICAxMCxcbiAgICAgIDEyLFxuICAgICAgMTczLFxuICAgICAgMjMwLFxuICAgICAgMTM5LFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDEsXG4gICAgICAxNzgsXG4gICAgICAxMDYsXG4gICAgICA2OSxcbiAgICAgIDE0NCxcbiAgICAgIDE1NSxcbiAgICAgIDY4LFxuICAgICAgMTA5LFxuICAgICAgMjIwLFxuICAgICAgMTcsXG4gICAgICAzNCxcbiAgICAgIDQwLFxuICAgICAgOTIsXG4gICAgICAxNDQsXG4gICAgICAyMDksXG4gICAgICAyNDksXG4gICAgICAzMCxcbiAgICAgIDExNSxcbiAgICAgIDI1LFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJZTjRWVlhIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NDY4ODc5MzI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI4Mzg1NTMxNTY0MTkyOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWFobTY4SEVLV1E0N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4bEtMdTM4am1LTzl1aUxDcFp1dkZWU3YwcDkwM1VGOGQ0bkFnU2tCUnlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlo3Zzlpb2phTXlLVmpTVnpUaHd0MGpWVmFVTDE3SzJRR2wvaDVrZmwvdnkxVTlNTklVSHVVbDRQT2lQUEJJMGtlS3Jscmh6MGVRSWNhc2JaWHUyZkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdySjQwcG5vRktZZmJYN2h4VVpsRGlBL05Zek9YSml5K1ZxQ2xJU2Q0ajlmSENtWG5aVktBOWJweEU5bzBDK2g4R0NjQ2JjMTdHSEE5aU8wcngvWmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ0Njg4NzkzMjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI4ODc0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUo5YVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSjlhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiODU1NEFKZGtNVWZlenRybjduYTByUFZjbEtIQ3cySnNYZGphSkJQc05pWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTc4MDYwOTk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyODg3NDQ2OTFcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
