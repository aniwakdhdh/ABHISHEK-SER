let handler = async (m, { conn, text }) => {
  if (!text) throw `*⚠️Enter A Text*`
  try {
    await conn.setStatus(text)
    m.reply('_✅Bio Updated_!')
  } catch (e) {
    console.log(e)
    throw `*❌ERROR*`
  }
}
handler.help = ['setbio <text>']
handler.tags = ['owner']
handler.command = /^set(bio|status)$/i
handler.owner = true

export default handler
