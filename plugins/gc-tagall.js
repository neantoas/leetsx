import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  // Si no es admin ni owner, envía el texto y el sticker del gatito
  if (!(isAdmin || isOwner)) {
    await m.reply('🌷 este comando solo puede ser usado por admins.');
    
    let catStickerUrl = 'https://files.catbox.moe/bttzoy.jpg';
    
    try {
      // Método principal: Enviar directamente como sticker usando sendFile
      await conn.sendFile(m.chat, catStickerUrl, 'sticker.webp', '', m, false, { asSticker: true });
    } catch (e1) {
      try {
        // Método de respaldo: Descargar buffer y convertir con la librería del bot
        let res = await fetch(catStickerUrl);
        let buffer = await res.buffer();
        let stiker = await sticker(buffer, false, global.packname || 'Bot', global.author || 'Aleizn');
        
        if (stiker) {
          await conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m });
        } else {
          await conn.sendMessage(m.chat, { sticker: { url: catStickerUrl } }, { quoted: m });
        }
      } catch (e2) {
        console.error('Error al enviar el sticker:', e2);
      }
    }
    return;
  }

  const pesan = args.join` `;
  const oi = `*\`AVISO:\`* ${pesan}`;
  let teks = `${msgtagall}\n*INTEGRANTES:* ${participants.length}\n\n ${oi}\n\nෆ *ETIQUETAS*\n`;
  
  for (const mem of participants) {
    teks += `${emotg}⇝ @${mem.id.split('@')[0]}\n`;
  }
  
  teks += `> ${dev}`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};

handler.help = ['todos'];
handler.tags = ['gc'];
handler.command = /^(tagall|t|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;

export default handler;