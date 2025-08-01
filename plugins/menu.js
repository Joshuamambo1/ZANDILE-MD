import config from '../../config.cjs';

const menu = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "menu") {
    const start = new Date().getTime();
    await m.React('🔓');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    // Always use the constant background image
    const profilePictureUrl = 'https://b.top4top.io/p_3291qwfqu0.jpg';

    const menuText = `
╭───❍「 *🇿🇼『ᴶᴼˢᴴᵁᴬᴹᴬᴹᴮᴼ1』❤️‍🔥* 」
│ *🏷️Version*: 4.3.1 |
│ *👑Developed By Mkuru JMZ hiding at Halsted Builders Express*
│ *🎲Ultrasonic Power and Speed⚡
╰───────────❍
> Explore the Bot command 🪄 for ultimate magic ✨ 
╭─⊳⋅🤖 ꜱʏꜱᴛᴇᴍ ᴍᴇɴᴜ 🤖⋅⊲❍
⌬ ${prefix}menu
⌬ ${prefix}alive
⌬ ${prefix}owner
⌬ ${prefix}menu
╰─⊲⋅═════════⋅⊳─❍

╭─⊳⋅⛩️ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ⛩️⋅⊲❍
⌬ ${prefix}join
⌬ ${prefix}leave
⌬ ${prefix}autobio
⌬ ${prefix}block
⌬ ${prefix}autolikestatus
⌬ ${prefix}unblock
⌬ ${prefix}antidelete on
⌬ ${prefix}anticall
⌬ ${prefix}settings
⌬ ${prefix}setname
╰─═══════════⋅⊳❍

╭─⊳⋅🔍 ɢᴘᴛ ᴍᴇɴᴜ 🔍⋅⊲❍
⌬ ${prefix}ai
⌬ ${prefix}report
⌬ ${prefix}chatbot
⌬ ${prefix}gpt
⌬ ${prefix}joshking
╰─⊲⋅══════════⋅⊳❍

╭─⊳⋅📦 ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ 📦⋅⊲❍
⌬ ${prefix}attp
⌬ ${prefix}gimage
⌬ ${prefix}play
⌬ ${prefix}video
╰─⊲⋅════════════⋅⊳❍

╭─⊳⋅🪄 ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ 🪄⋅⊲❍
⌬ ${prefix}google
⌬ ${prefix}mediafire
⌬ ${prefix}facebook
⌬ ${prefix}instagram
⌬ ${prefix}tiktok
⌬ ${prefix}lyrics
⌬ ${prefix}imdb
╰─⊲⋅═══════⋅⊳❍

╭─⊳⋅😂 ꜰᴜɴ ᴍᴇɴᴜ 😂⋅⊲❍
⌬ ${prefix}getpp
⌬ ${prefix}url
╰─⊲⋅══════════⋅⊳❍
📢 *Follow and Subscribe to https://youtube.com/@joshuamambo1*
`;

    await sock.sendMessage(m.from, {
      image: { url: profilePictureUrl },
      caption: menuText.trim(),
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "Joshuamambo1 NetKing ❤️‍🔥🫡",
          newsletterJid: "120363347365643318@newsletter",
        },
      }
    }, { quoted: m });
  }
};

export default menu;


    }, { quoted: mek });

    if (sendAudio) {
      await conn.sendMessage(from, {
        audio: { url: 'https://files.catbox.moe/sw34lv.mp4' },
        mimetype: 'audio/mp4',
        ptt: true
      }, { quoted: mek });
    }
  } catch (e) {
    console.error(`Menu Error (${title}):`, e);
    throw e;
  }
}
