let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let pp = 'https://i.ibb.co/4VY23Sk/06527979fdac.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `╭───❮ *𝚄𝙿𝙳𝙰𝚃𝙴 𝙱𝙾𝚃* ❯
│ *ABHISHEK-SER BOT UPDATE🔧*
│ 1. Open Your Fork
│ 2. Click On Sync Fork
│ 3. And Click On Update Branch
│ 4. After Redeploy The Bot
╰─────────────⦁`  
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react('🔧')
}
handler.help = ['update']
handler.tags = ['owner']
handler.command = ['update'] 

export default handler
