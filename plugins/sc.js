let handler = async m => m.reply(`
udh 2022 masih ngemis sc? Wkwk
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^sc$/i

module.exports = handler
