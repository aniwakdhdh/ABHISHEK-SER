
let handler = m => m
handler.all = async function (m) {

    if (/^.alive$/i.test(m.text) ) {
      let av = 'https://s19.aconvert.com/convert/p3r68-cdx67/e2oz9-ij972.mp3'
      this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
     }

  if (/^NAME HERE$/i.test(m.text) ) {
     let av = 'LINK HERE'
     this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^NAME HERE$/i.test(m.text) ) {
    let av = 'LINK HERE'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
return !0
 }
 
export default handler
