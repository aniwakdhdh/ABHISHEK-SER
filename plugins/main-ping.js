import speed from 'performance-now';
import { spawn, exec, execSync } from 'child_process';

let handler = async (m, { conn }) => {
  // Send initial "Ping..." message
  const pingMsg = await conn.sendMessage(m.chat, 'Ping...', 'text', { quoted: m });

  let timestamp = speed();
  let latensi = speed() - timestamp;

  exec(`neofetch --stdout`, async (error, stdout, stderr) => {
    let child = stdout.toString("utf-8");
    let ssd = child.replace(/Memory:/, "Ram:");

    // Edit the initial "Ping..." message to "Pong" with latency
    await conn.sendMessage(m.chat, `${ssd}🎯 *Pong*: ${latensi.toFixed(4)} *ms*`, 'text', {
      quoted: pingMsg,
    });
  });
};

handler.help = ['ping'];
handler.tags = ['main'];
handler.command = ['ping', 'speed'];

export default handler;
