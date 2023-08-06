
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `${pickRandom(["🌅 𝔊𝔬𝔬𝔡 𝔐𝔬𝔯𝔫𝔦𝔫𝔤 🌤️","*♥ Good Morning ♥*"," 🌺 𝕲𝖔𝖔𝖉 𝕸𝖔𝖗𝖓𝖎𝖓𝖌 🌺","❣️ Ｇｏｏｄ Ｍｏｒｎｉｎｇ ❣️","🌄Ⓖⓞⓞⓓ Ⓜⓞⓡⓝⓘⓝⓖ🌻","🌅 𝔾𝕠𝕠𝕕 𝕄𝕠𝕣𝕟𝕚𝕟𝕘 🌤️","🌅 𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 🌅","【﻿Ｇｏｏｄ　Ｍｏｒｎｉｎｇ】","🌅 ᴳᵒᵒᵈ ᴹᵒʳⁿⁱⁿᵍ 🌤️","]`

m.reply( `${pickRandom(["🌅 𝔊𝔬𝔬𝔡 𝔐𝔬𝔯𝔫𝔦𝔫𝔤 🌤️","*♥ Good Morning ♥*"," 🌺 𝕲𝖔𝖔𝖉 𝕸𝖔𝖗𝖓𝖎𝖓𝖌 🌺","❣️ Ｇｏｏｄ Ｍｏｒｎｉｎｇ ❣️","🌄Ⓖⓞⓞⓓ Ⓜⓞⓡⓝⓘⓝⓖ🌻","🌅 𝔾𝕠𝕠𝕕 𝕄𝕠𝕣𝕟𝕚𝕟𝕘 🌤️","🌅 𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 🌅","【﻿Ｇｏｏｄ　Ｍｏｒｎｉｎｇ】","🌅 ᴳᵒᵒᵈ ᴹᵒʳⁿⁱⁿᵍ 🌤️","]`)
conn.sendFile(m.chat, av, 'text.message', null, m, true, { type: 'textMessage', ptt: true })
}
handler.customPrefix = /^(gn|good night|gnight|gnigh8)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
