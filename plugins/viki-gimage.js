/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const fetch = require('node-fetch');

let handler = async function (m, { text }) {
  if (!text) {
    conn.reply(m.chat, '*Example*: .gimage anime', m)
    return
  }

  let apiUrl = `https://api.lolhuman.xyz/api/gimage?apikey=ayakaviki&query=${encodeURIComponent(text)}`

  try {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

    let response = await fetch(apiUrl)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    let imageBuffer = await response.buffer()

    conn.sendFile(m.chat, imageBuffer, 'image.jpg', `🐱 Here's the image with the keyword *${text}* you're looking for.`, m)

  } catch (error) {
    console.error(error)
    conn.reply(m.chat, 'Sorry, there was an error processing the request.', m)
  }
}

handler.help = ['gimage *query*']
handler.tags = ['internet']

handler.command = /^gimage$/i

module.exports = handler