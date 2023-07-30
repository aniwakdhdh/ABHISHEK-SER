
let handler = m => m
handler.all = async function (m) {

    if (/^bot$/i.test(m.text) ) {
      let av = 'https://drive.google.com/file/d/1Iza7iWsqCx5x6-Cza2Ta7rASMPoZ9xrI/view?usp=sharing'
      this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
     }

  if (/^test$/i.test(m.text) ) {
     let av = 'https://i.imgur.com/0oCi5Lf.mp4'
     this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^buenas noches$/i.test(m.text) ) {
    let av = 'https://e.top4top.io/m_2437afchn1.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
  if (/^buenas noches$/i.test(m.text) ) {
    let av = 'https://e.top4top.io/m_2437afchn1.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
    
return !0
 }
 
export default handler
