let handler = async m => m.reply(`
┌「 *Topap • Maxis* 」
├ 60147366955
└────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
