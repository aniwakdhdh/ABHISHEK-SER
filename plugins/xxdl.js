
import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 This Group Doesnot Support nsfw \n\nTo Turn On  \n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `❎ Age Must Be 18 To Use This Feature`
  if (!text) throw `✳️ What To Search?\n📌 Use : *${usedPrefix + command} <search>*\n\nExample:- Hot desi bhabi Or U an use Link Also\nExample .xnxx Link *`
    
    m.react(rwait)
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`❎ Invalid link  *xnxx.com*`)
        try {
            let xn = await (await fetch(global.API('fgmods', '/api/dowloader/xnxxdl', { url: text }, 'apikey'))).json()
            conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
≡  *XNXX DL*
            
▢ *📌Title*: ${xn.result.title}
▢ *⌚Duration:* ${xn.result.duration}
▢ *🎞️Quality:* ${xn.result.quality}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
 } catch (e) {
    m.reply(`🔴 Error : We Are Trying Hard To Fix`)
 }
    } else {
        try {
            let res = await fetch(global.API('fgmods', '/api/search/xnxxsearch', { text }, 'apikey'))
            let json = await res.json()
             let listSections = []
              Object.values(json.result).map((v, index) => {
              listSections.push([`${index}┃ ${v.title}`, [
                    ['🎥 MP4', `${usedPrefix}xnxxdl ${v.link}`, `▢ 📌 *Título* : ${v.title}`]
                  ]])
              })
              //return conn.sendList(m.chat, '  ≡ *XNXX DL*🔎', `\n 🔞 Results:\n *${text}*`, fgig, `Click Here`, listSections, m)
              let ff = json.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (json.status) m.reply(ff)
            } catch (e) {
              m.reply(`🔴 Error: We Are Trying Hard To Fix It`)
               }
    }
}
handler.help = ['xnxx'] 
handler.tags = ['nsfw', 'prem']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'] 
handler.diamond = false
handler.premium = false
handler.register = false

export default handler
