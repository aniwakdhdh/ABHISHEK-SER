
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `${pickRandom(["test", "Abhi", "Abhi", "Abhi", "hi"])}`

m.reply( `👋Hello ${taguser} Good Night My Friend Sweet Dreams`)

handler.customPrefix = /^(gn|good night|gnight|gnigh8)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
