global.ownername = [];
global.ownernumber = [];

function handler(m) {
  // Add owner data to global.ownername and global.ownernumber arrays
  const ownerData = [
    ['', ''],
    ['', ''],
    // Add more owner data as needed
  ];

  // Push owner data to global arrays
  ownerData.forEach(([id, name]) => {
    global.ownername.push(name);
    // Assuming the phone numbers correspond to the IDs, you can format them accordingly
    const phoneNumber = id.replace('@c.us', ''); // Remove @c.us if present
    global.ownernumber.push(phoneNumber);
  });

  // Send contact information for owners
  const owners = global.ownername.map((name, index) => [global.ownernumber[index], name]);
  this.sendContact(m.chat, owners, m);
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño', 'Gowner'];

export default handler;
