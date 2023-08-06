const toxicRegex = /fuck|sex|myre|myr|imbecil|rctmre|mrd|verga|vrga|maricon/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `Hey *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, The Word (${isToxic}) Is Prohibited In This Bot *${user.warn}/5* Warning`, false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`Hey *@${m.sender.split`@`[0]}*, You Reached The 5 Warnings You Will Be Blocked And Kicked Out From This Group`, false, {mentions: [m.sender]});
    user.banned = true;
    await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
