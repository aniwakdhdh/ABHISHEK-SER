let handler = m => m
handler.all = async function (m) {
    
    if (/^.alive$/i.test(m.text) ) {
      let av = 'https://s31.aconvert.com/convert/p3r68-cdx67/rcc9m-v7zgz.mp3'
      this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
     }

  if (/^buenas tardes$/i.test(m.text) ) {
     let av = 'https://g.top4top.io/m_2437lm0y21.mp3'
     this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^buenas noches$/i.test(m.text) ) {
    let av = 'https://e.top4top.io/m_2437afchn1.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
  if (!m.isGroup) {
    return false;
  }
  
  const user = global.db.data.users[m.sender];
  
  if (!owner.bgmbot) {
    return true;
  }
  
    
return !0
 }
 
export default handler
