/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const axios = require('axios')

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
    let response = await axios.get('https://api.lolhuman.xyz/api/quotes/islami?apikey=ayakaviki')
    let result = response.data.result
    conn.reply(m.chat, result, m)
  } catch (e) {
    conn.reply(m.chat, 'An error occurred while processing the request.', m)
    console.log(e)
  }
}

handler.help = ['quotesislami']
handler.tags = ['islam']
handler.command = /^quotesislami$/i
handler.register = true
handler.limit = true

module.exports = handler