/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */

let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `*Example*: .menfess +6285236226786|Your Name|Messages`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Example*: .menfess +6285236226786|Your Name|Messages`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw '🐱 Number not registered on whatsapp.';
    if (jid == m.sender) throw '🐱 Can send menfess messages to self.'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    	let id = + new Date
        let tek = `🐱 Hai *@${data.jid.split("@")[0]}*, You got a menfess message\n\n◦ *From:* ${name}\n◦ *Message:* ${pesan}`.trim();
        await conn.reply(data.jid, tek, m)
        .then(() => {
            m.reply('🐱 Successfully sent menfess message.')
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
}
handler.tags = ['anonymous']
handler.help = ['menfess', 'menfes'].map(v => v + ' <nomor|nama pengirim|pesan>')
handler.command = /^(menfess|menfes)$/i
handler.private = true

module.exports = handler