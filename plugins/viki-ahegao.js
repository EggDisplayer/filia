/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const axios = require('axios')

let handler = async (m, { conn }) => {
  try {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    let res = await axios.get('https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=ayakaviki', { responseType: 'arraybuffer' })
    let image = Buffer.from(res.data, 'binary')
    conn.sendFile(m.chat, image, 'viki.jpg', 'Ahegao', m)
  } catch (err) {
    console.log(err)
    conn.reply(m.chat, 'Error!', m)
  }
}
handler.help = ['ahegao']
handler.tags = ['internet']

handler.command = /^ahegao$/i

module.exports = handler