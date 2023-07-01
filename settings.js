const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['919074692450'] //ur owner number
global.ownernomer = "919074692450" //ur owner number2
global.ownername = "ABHISHEK SURESH"//ur owner name
global.ytname = "YT: Comedy Melody CH" //ur yt chanel name
global.socialm = "GitHub: AbhishekSuresh2" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = "𝗔𝗕𝗛𝗜𝗦𝗛𝗘𝗞-𝗦𝗘𝗥"
global.ownernumber = '919074692450'
global.ownername = 'ABHISHEK SURESH'
global.ownerNumber = ["919074692450@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@comedymelodych8468"
global.websitex = "https://youtu.be/Xb1-Oh1_msQ"
global.wagc = "https://chat.whatsapp.com/BOLb0ICN3sAJ5dloRBw5VD"
global.themeemoji = '👻'
global.wm = "ABHISHEK-SER Bot."
global.botscript = 'https://github.com/AbhishekSuresh2/ABHISHEK-SER' //script link
global.packname = "𝗔𝗕𝗛𝗜𝗦𝗛𝗘𝗞-𝗦𝗘𝗥👻ABHISHEK-SURESH"
global.author = "ABHISHEK SURESH\n\n+919074692450"
global.creator = "919074692450@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMeda/theme/Abhi.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/Abhi.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/Abhi.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/Abhi.jpg") //ur thumb pic
global.defaultpp = 'https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here You Go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
