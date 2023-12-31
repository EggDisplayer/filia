/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const axios = require('axios')

let handler = async (m, { args }) => {
  if (!args[0]) {
    throw '*Example*: .tr id good night'
  }
  
  let languageCode = args[0].toLowerCase()
  let text = args.slice(1).join(' ')
  
  try {
    let response = await axios.get(`https://api.lolhuman.xyz/api/translate/auto/${languageCode}?apikey=ayakaviki&text=${encodeURIComponent(text)}`)
    let translation = response.data.result.translated
    
    let caption = `*🐱 Translation Result:*\n\n*• From:* ${response.data.result.from.toUpperCase()}\n*• To:* ${response.data.result.to.toUpperCase()}\n*• Original Text:* ${response.data.result.original}\n*• Translated Text:* ${translation}`
    
    m.reply(caption)
  } catch (e) {
    console.log(e)
    throw 'An error occurred while performing the translation. Please try again later.'
  }
}

handler.help = ['translate']
handler.tags = ['tools']
handler.command = /^(translate|tr)$/i

module.exports = handler
