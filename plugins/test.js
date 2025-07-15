const { cmd } = require('../command');

cmd({
    pattern: "test",
    alias: [],
    use: '.test',
    desc: "Send a random voice note from URL.",
    category: "fun",
    react: "🎙️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const songUrls = [
            "https://files.catbox.moe/vpnq7.mp3",
            "https://files.catbox.moe/sw34lv.mp4",
            "https://files.catbox.moe/da6m1z.mp4"
            // Add more direct URLs here
        ];

        if (!songUrls.length) return reply("No song URLs configured.");

        const randomUrl = songUrls[Math.floor(Math.random() * songUrls.length)];

        await conn.sendMessage(from, {
            audio: { url: randomUrl },
            mimetype: 'audio/mp4',
            ptt: true, // Voice note style
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363347365643318@newsletter',
                    newsletterName: "J̸͟͞o̸͟͞s̸͟͞h̸͟͞u̸͟͞a̸͟͞m̸͟͞a̸͟͞m̸͟͞b̸͟͞o̸͟͞1 T̸͟͞e̸͟͞c̸͟͞h̸͟͞ S̸͟͞u̸͟͞p̸͟͞p̸͟͞o̸͟͞r̸͟͞t̸͟͞ 👻",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in test command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
