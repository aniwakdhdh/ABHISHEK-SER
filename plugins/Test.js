export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys || !m.isGroup) return false;

  const kickMessage = isAdmin
    ? `❌ *Message detected* You are the admin of this group and I cannot remove you or this group message.`
    : `❌ *you are not admin kick out from grp  .`;

  if (m.message) {
    await this.reply(m.chat, kickMessage, null, { mentions: [m.sender] });

    if ((!isBotAdmin && isAdmin) || (isBotAdmin && !isAdmin)) {
      await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      await this.reply(m.chat, kickMessage, null, { mentions: [m.sender] });
      await this.sendMessage(m.chat, { delete: m.key });
    }
  }
  return true;
}
