import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file


const handler = async (m, { conn, text }) => {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    const img = await q.download();

    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', img, 'file.jpg');

    const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
      headers: {
        ...formData.getHeaders(),
        'X-Api-Key': process.env.REMOVE_BG_API_KEY,
      },
      responseType: 'arraybuffer',
      encoding: null,
    });

    if (response.status !== 200) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const imageData = response.data;

    fs.writeFileSync('no-bg.png', imageData);

    // Add the caption to the image
    const caption = 'Made By ABHISHEK-SER✅';
    conn.sendFile(m.chat, 'no-bg.png', '', caption, m);
  } catch (e) {
    console.error(e);
    m.reply('Sorry, An Error Occurred While Processing The Image, Maybe Check Your Api Key.');
  }
};

handler.command = /^rmbg|removebg$/i;
export default handler;
