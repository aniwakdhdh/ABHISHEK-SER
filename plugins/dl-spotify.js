import fetch from 'node-fetch';
import Spotify from 'spotifydl-x';
import fs from 'fs';
const handler = async (m, {conn, text}) => {
  if (!text) throw `*⚠️Enter A Song Name*`;
  try {
    const resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`);
    const jsonDL = await resDL.json();
    const linkDL = jsonDL.result[0].link;
    const spty = await spotifydl(linkDL);
    const getRandom = (ext) => {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
    };
    const randomName = getRandom('.mp3');
    const filePath = `./tmp/${randomName}`;
    fs.writeFileSync(filePath, spty.audio);
    const spotifyi = `❒═════❬ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 ❭═════╾❒\n┬\n├‣✨ *TITLE:* ${spty.data.name}\n┴\n┬\n├‣🗣️ *ARTIST:* ${spty.data.artists}\n┴\n┬\n├‣🌐 *URL*: ${linkDL}\n┴`;
    await conn.sendFile(m.chat, spty.data.cover_url, 'error.jpg', spotifyi, m);
    await conn.sendMessage(m.chat, {audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
  } catch {
    throw '**';
  }
};
handler.command = /^(spotify|song)$/i;
export default handler;

const credentials = {clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'};
const spotify = new Spotify.default(credentials);
async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    const res = await spotify.getTrack(url).catch(() => {
      return { error: '*❌Downloading Failed*' };
    });
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('*⌛Timeout*'));
      }, 300000); 
    });
    try {
      const audioPromise = spotify.downloadTrack(url);
      const audio = await Promise.race([audioPromise, timeoutPromise]);
      resolve({ data: res, audio });
    } catch (error) {
      reject(error);
    }
  });
}
