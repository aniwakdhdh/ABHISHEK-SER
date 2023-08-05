//Created By ABHISHEK-SURESH
const {Function,isPublic, getJson, getBuffer,prefix} = require("../lib/");
Function({pattern: 'tintu ?(.*)', fromMe: isPublic, desc: 'tintumon jokes', type: 'fun'}, async (m, text, client) => {
let tintus = ["https://i.ytimg.com/vi/p-BV4NbRv04/maxresdefault.jpg","https://i.ytimg.com/vi/AeGmfrRHtfw/mqdefault.jpg","https://yt3.ggpht.com/ytc/AKedOLQQzIv6c9zqrIHlabtdfXd2DeYIb2fA-9hmBJow=s900-c-k-c0x00ffffff-no-rj","https://i.ytimg.com/vi/FAh6o8tAans/maxresdefault.jpg","https://i1.ytimg.com/vi/YZSbzD5StgA/maxresdefault.jpg","https://i.ytimg.com/vi/m2iCiUrR4Wk/maxresdefault.jpg","https://i.ytimg.com/vi/53yuePI3L74/maxresdefault.jpg"]
let image = tintus[Math.floor(Math.random()*tintus.length)]
var { result } = await getJson("https://api-mask-ser.herokuapp.com/api/fun/tintu")

const buttons = [
  {buttonId: prefix + 'tintu', buttonText: {displayText: 'Next🎯'}, type: 1}]

const buttonMessage = {
    image: {url: image},
    caption: '```' + result.joke + '```',
    footer: 'ABHISHEK-SER',
    buttons: buttons,
    headerType: 4
}

client.sendMessage(m.jid, buttonMessage)
});
