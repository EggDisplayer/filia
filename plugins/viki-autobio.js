/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


const fs = require('fs');

let handler = async function (m) {
  let setting = db.data.settings[this.user.jid]
  if (!setting) setting = db.data.settings[this.user.jid] = {}
  if (new Date() - (setting.status || 0) > 1000) {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    let version = packageJson.version;
    let author = getAuthor(packageJson.author);
    await this.setBio(`Yuki Has Been Active During: ${uptime} | Version: ${version} | Author: ${author}`).catch(_ => _)
    setting.status = new Date() * 1
  }
}

handler.all = async function (m) {
  let setting = db.data.settings[this.user.jid]
  if (!setting) setting = db.data.settings[this.user.jid] = {}
  if (new Date() - (setting.status || 0) > 1000) {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    let version = packageJson.version;
    let author = getAuthor(packageJson.author);
    await this.setBio(`yuki Has Been Active During: ${uptime} | Version: ${version} | Author: ${author}`).catch(_ => _)
    setting.status = new Date() * 1
  }
}

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function getAuthor(author) {
  if (typeof author === 'string') {
    return author;
  } else if (typeof author === 'object' && author !== null) {
    return author.name || 'Unknown';
  } else {
    return 'Unknown';
  }
}