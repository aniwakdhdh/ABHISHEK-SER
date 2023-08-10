let handler = m => m
handler.all = async function (m) {

    if (/^test$/i.test(m.text) ) {
      let av = './src/welgc.webp'
      this.sendFile(m.chat, test, 'sticker.webp', null, m, false, })
     }

  if (/^.menu$/i.test(m.text) ) {
     let av = '../src/mp3/menu.mp3'
     this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^bot$/i.test(m.text) ) {
    let av = '../src/mp3/Abhi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
return !0
 }
 
export default handler
