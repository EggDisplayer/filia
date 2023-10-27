/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn }) => {
  const fs = require('fs')
  const path = require('path')
  const databaseFile = path.join(__dirname, '../database.json')

  if (!fs.existsSync(databaseFile)) {
    throw 'Maaf, file database tidak ditemukan'
  }

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  conn.sendFile(m.chat, databaseFile, 'database.json', '', m).then((message) => {
    let size = fs.statSync(databaseFile).size
    let owner = conn.user.name
    let name = message.file_name
    let from = m.sender.name

    conn.reply(m.chat, ` Berikut adalah detail file database yang telah dikirim:

◦ Name  : database.json
◦ From  : Ayaka Cloud
◦ Size  : ${size} bytes
◦ Owner : Sazumi Viki`, message)
  })
}

handler.command = /^(getdb|getdatabase)$/i
handler.help = ['getdb', 'getdatabase']
handler.tags = ['owner']
handler.limit = true
handler.owner = true
handler.register = true

module.exports = handler