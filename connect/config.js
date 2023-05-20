const fs = require("fs");
const chalk = require("chalk");

global.owner = ["6281233649676", "6285842647866"];// Nomor Lu
global.author = "Customer Support";// Nama Mu
global.packname = "Rusdi Bot";// NamaBot Mu
global.sessionName = "session";// Folder Session
global.versionbot = "1.0.0";// Versi Bot
global.lannn = "https://api.betabotz.me/"
global.Key = {
	lann: "Kuontolll",
};
global.Recode = {
   name: "this.ilham_",// Isi Nama lu
   bot: "Rusdi Bot",// Ini Nama bot lu
};
global.mess = {
admin: '*ᴏɴʟʏ ᴀᴅᴍɪɴ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',
botAdmin: 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin!',
botOwner: '*ᴏɴʟʏ ᴅᴇᴠᴇʟᴏᴘᴇʀ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ',
group: 'Perintah ini hanya bisa di gunakan dalam group!', 
private: 'Only Private Chat',
endLimit: 'Limit Harian Sudah Habis, Limit Akan Direset Besok',
wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
link: '[❗] Link yang anda kirim tidak valid!', 
link1: 'Link Yang Anda Gunakan Eror',
nsfw: 'Nsfw Belum Diaktifkan Di Group ini',
done: 'Done!',
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});