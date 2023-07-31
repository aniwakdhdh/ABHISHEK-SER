p0let handler = m => m
handler.all = async function (m) {

    if (/^.alive|bot$/i.test(m.text) ) {
      let av = '../media/voice/Abhi.mp3'
      this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
     }

  if (/^bgm|test$/i.test(m.text) ) {
     let av = '../media/voice/.mp3'
     this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^hi|hai$/i.test(m.text) ) {
    let av = '../media/voice/.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
return !0
 }
 
export default handler
