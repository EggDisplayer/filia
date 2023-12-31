/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let axios = require('axios');

let handler = async (m, { text }) => {
  if (!text) {
    return m.reply('*Example*: .apkdl com.whatsapp');
  }
  	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
    let res = await axios.get(`https://api.lolhuman.xyz/api/apkdownloader?apikey=ayakaviki&package=${encodeURIComponent(text)}`);
    let apk = res.data.result;
    let caption = `
*Nama aplikasi:* ${apk.apk_name}
*Versi:* ${apk.apk_version}
*Pengembang:* ${apk.apk_author}
    `.trim();
    m.reply(`Sedang mengirim ${apk.apk_name}...\nSilahkan tunggu sebentar`);
    conn.sendFile(m.chat, apk.apk_link, `${apk.apk_name}.apk`, caption, m);
  } catch (e) {
    console.log(e);
    m.reply('Maaf, terjadi kesalahan saat mengunduh aplikasi.');
  }
};

handler.help = ['apkdl <nama aplikasi>'];
handler.tags = ['downloader'];
handler.command = /^apk(dl|download)$/i;
handler.premium = false;
handler.limit = true;

module.exports = handler;
