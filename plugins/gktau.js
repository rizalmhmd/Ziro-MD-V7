//let { MessageType } = require('@adiwajshing/baileys')
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n Hai Saya ZiroBotz-MD Jangan Lupa Suscribe Youtube ZIRO-MD Official\n\nAtau bisa klik link Youtube : https://youtube.com/@Ziro-MD_Official ', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['zyko-md']

handler.admin = false
handler.group = false

export default handler
