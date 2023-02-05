import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `uhm.. mau download apa?\n\nContoh: ${usedPrefix + command} link xnxx`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!';
	try {
		let json = await fetch(`https://api.lolhuman.xyz/api/xnxx?apikey=Fikrii&url=${text}`)
  let x = await json.json()
  let caption = `*Title:* ${x.result.title}
  *duration:* ${x.result.duration}
  *view:* ${x.result.view}
  *rating:* ${x.result.rating}
  *like:* ${x.result.like}
  *dislike:* ${x.result.dislike}
  *comment:* ${x.result.comment}
  *tag:* ${Array.from(x.result.tag)}
  *description:* ${x.result.description}
  `
conn.sendFile(m.chat, x.result.link[1].link, 'asupan.mp4', caption, m)
	} catch (e) {
		throw e;
	}
}
handler.help = ["xnxxdl"].map(v => v + ' <url>')
handler.tags = ["downloader", 'premium']
handler.command = /^(xnxxdl)$/i
handler.register = true
handler.premium = true
handler.private = false

export default handler
