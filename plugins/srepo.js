const axios = require('axios');
const { cmd, commands } = require("../command");

cmd({
  pattern: "srepo",
  desc: "Fetch information about a GitHub repository.",
  category: "other",
  react: "🍃",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const repoName = args.join(" "); // Combine arguments to form "owner/repo"
    if (!repoName) {
      return reply("Please provide a GitHub repository name in the format 📌`owner/repo`.");
    }

    // Construct GitHub API URL for the repository
    const apiUrl = `https://api.github.com/repos/${repoName}`;
    const response = await axios.get(apiUrl); // Fetch repository data from GitHub
    const repoData = response.data;

    // Prepare repository information message
    let repoInfo = "📁_*GITHUB REPO INFO BY J̸͟͞o̸͟͞s̸͟͞h̸͟͞u̸͟͞a̸͟͞m̸͟͞a̸͟͞m̸͟͞b̸͟͞o̸͟͞1 T̸͟͞e̸͟͞c̸͟͞h̸͟͞ S̸͟͞u̸͟͞p̸͟͞p̸͟͞o̸͟͞r̸͟͞t̸͟͞*_📁\n\n";
    repoInfo += `📌 *Name*: ${repoData.name}\n`;
    repoInfo += `🔗 *URL*: ${repoData.html_url}\n`;
    repoInfo += `📝 *Description*: ${repoData.description || "No description provided"}\n`;
    repoInfo += `⭐ *Stars*: ${repoData.stargazers_count}\n`;
    repoInfo += `🍴 *Forks*: ${repoData.forks_count}\n\n`;
    repoInfo += "> *© ᵖᵒʷᵉʳᵉᵈ ᵇʸ ☘ℕ𝕖𝕥𝕂𝕚𝕟𝕘 𝕄𝔻☘ ˢᵘᵇˢᶜʳⁱᵇᵉ ᵗᵒ https://youtube.com/@joshuamambo1 ᶠᵒʳ ᵐᵒʳᵉ ᵗᵘᵗᵒʳⁱᵃˡˢ*\n";

    // Send repository info as a message
    await conn.sendMessage(from, { text: repoInfo }, { quoted });

  } catch (error) {
    console.error("Error fetching repository data:", error);
    reply(`Error fetching repository data 🤕: ${error.message}`);
  }
});
