let handler = m => m
handler.all = async function (m) {

    if (/^test$/i.test(m.text) ) {
      let av = 'https://i.ibb.co/4M7xYVx/30302726e59c.webp
      this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
     }

  if (/^hi$/i.test(m.text) ) {
     let av = 'https://i.ibb.co/4M7xYVx/30302726e59c.webp'
     this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^cute$/i.test(m.text) ) {
    let av = 'https://i.ibb.co/4M7xYVx/30302726e59c.webp'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
return !0
 }
 
export default handler
