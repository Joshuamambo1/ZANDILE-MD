const { cmd } = require('../command');
const PDFDocument = require('pdfkit');
const { Buffer } = require('buffer');

cmd({
    pattern: "topdf",
    alias: "pdf",
    desc: "Convert provided text to a PDF file.",
    react: "📄",
    category: "utilities",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("Please provide the text you want to convert to PDF. *Eg* `.topdf` *☘𝙉3𝙩𝙆𝙞𝙣𝙜 𝙈𝘿☘ Zim🇿🇼*");

        // Create a new PDF document
        const doc = new PDFDocument();
        let buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', async () => {
            const pdfData = Buffer.concat(buffers);

            // Send the PDF file
            await conn.sendMessage(from, {
                document: pdfData,
                mimetype: 'application/pdf',
                fileName: '☘𝙉3𝙩𝙆𝙞𝙣𝙜 𝙈𝘿☘.pdf',
                caption: `
*📄 PDF created successully!*

> © Cʀᴇᴀᴛᴇᴅ Bʏ J̸͟͞o̸͟͞s̸͟͞h̸͟͞u̸͟͞a̸͟͞m̸͟͞a̸͟͞m̸͟͞b̸͟͞o̸͟͞1 T̸͟͞e̸͟͞c̸͟͞h̸͟͞ S̸͟͞u̸͟͞p̸͟͞p̸͟͞o̸͟͞r̸͟͞t̸͟͞`
            }, { quoted: mek });
        });

        // Add text to the PDF
        doc.text(q);

        // Finalize the PDF and end the stream
        doc.end();

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
                      
