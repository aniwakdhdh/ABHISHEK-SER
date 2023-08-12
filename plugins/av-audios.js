let handler = m => m
handler.all = async function (m) {

    if (/^.alive$/i.test(m.text) ) {
      let av = '../src/mp3/Abhi.mp3'
      this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
      }

  if (/^.menu$/i.test(m.text) ) {
    let av = '../src/mp3/menu.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^happy|heppy|😁$/i.test(m.text) ) {
    let av = '../src/mp3/happy.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^sad|sed|🥺|😭|😢|😥$/i.test(m.text) ) {
    let av = '../src/mp3/sad.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
    
  if (/^hi|hai|hey|hii$/i.test(m.text) ) {
    let av = '../src/mp3/hi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
return !0
 }
 
export default handler
