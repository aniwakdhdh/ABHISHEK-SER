let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/welgc.webp"
let stikerbyegc = "./src/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍', body: '©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍', sourceUrl: `https://github.com/AbhishekSuresh2/ABHISHEK-SER`, thumbnail: 'https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png'}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ✍', body: '©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍', sourceUrl: `https://github.com/AbhishekSuresh2/ABHISHEK-SER`, thumbnail: 'https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png'}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
