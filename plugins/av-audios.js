let handler = m => m
handler.all = async function (m) {

    if (/^.alive$/i.test(m.text) ) {
      let av = '../media/voice/Abhi.mp3'
      this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
     }

  if (/^.menu$/i.test(m.text) ) {
     let av = '../media/voice/menu.mp3'
     this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^hi|hai|hii$/i.test(m.text) ) {
    let av = '../media/voice/hi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
return !0
 }
 
export default handler
