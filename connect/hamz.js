/*

* Base bot md by KazeDevID
* Jika ingin recode / upload silahkan asalkan kasih kredit
* Cukup nambahin nama kamu aja
* Dilarang keras Menjual sc ini
 
*/
process.on("uncaughtException", console.error)
process.once("SIGHUP", function () {
  reloadSomeConfiguration();
})
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const request = require('request')
const { platform } = require("process");
const moment = require('moment-timezone')
const { parseMention, smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, getRandom, generateProfilePicture, reSize} = require('../lib/myfunc')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../lib/exif')
const { exec } = require('child_process')
const axios = require("axios")
const crypto = require('crypto')
const cheerio = require("cheerio")
const path = require('path')
const qs = require('qs')
const acrcloud = require('acrcloud')
const acr = new acrcloud({ host: "identify-ap-southeast-1.acrcloud.com", access_key: "b1cc283b4fb72483ebb6ea9c53512331", access_secret: "xyqJGTZRTrUotaraHEjji00WBClx7RpWozywdANq"})
const needle = require("needle")
const fetch = require("node-fetch")
const os = require('os')
const { toAudio, toPTT} = require('../lib/converter')
const mnsp = '```'
const aipl = "➸"

const getGroupAdmins = (participants) => {
  let admins = []
  for (let i of participants) {
      i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
  }
  return admins || []
}

require("./config");
module.exports = hamz = async (client, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowI || m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    const prefix = /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~+Ã—_*!#%^&./\\Â©^]/.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~+Ã—_*!#,|`Ã·?;:%abcdefghijklmnopqrstuvwxyz%^&./\\Â©^]/gi) : '#'
    const isCmd = body.startsWith(prefix);
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const botNumber = await client.decodeJid(client.user.id);
    const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const itsMe = m.sender == botNumber ? true : false;
    const text = (q = args.join(" "));
	const quoted = m.quoted ? m.quoted : m
	const mime = (quoted.msg || quoted).mimetype || ''
	const qmsg = (quoted.msg || quoted)
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
			   //TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 }
    const pickRandom = (arr) => {
	        return arr[Math.floor(Math.random() * arr.length)]
		    }
    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };

    // Group
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

    // Push Message To Console
	setInterval(() => {
		fetchJson(lannn+`api/random/caklontong?apikey=`+Key.lann)
	}, 1000)
    if (m.message) {
	  client.readMessages([m.key]);
	  await fetchJson(lannn+`api/random/caklontong?apikey=`+Key.lann)
	  //await client.sendPresenceUpdate('composing', m.chat)
      console.log(chalk.redBright('~>'), chalk.green(`[${command || m.mtype}]`), chalk.blueBright('From:'), chalk.yellow(pushname || '<Unknown>'), chalk.blueBright('In:'), chalk.yellow(groupName || 'Private chat'), chalk.blueBright('Args:'), chalk.whiteBright(args.length))
    } else if (isCmd && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ PESAN ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }

const downloadMp4 = async (link) => {
  try {
	const ytdl = require('ytdl-core')
    await ytdl.getInfo(link)
    const randomFileName = crypto.randomBytes(8).toString('hex') + '.mp4'
    const mp4FilePath = path.join(os.tmpdir(), randomFileName)
    console.log('Downloading Video')
    const videoPromise = new Promise((resolve, reject) => {
      const videoStream = ytdl(link, { filter: 'audioandvideo', quality: 'highestvideo' })
      videoStream.on('error', (err) => {
        reject(err)
      })
      videoStream.pipe(fs.createWriteStream(mp4FilePath))
        .on('finish', () => {
          try {
            const videoFile = fs.readFileSync(mp4FilePath)
            resolve(videoFile)
          } catch (err) {
            reject(err)
          }
        })
        .on('error', (err) => {
          reject(err)
        })
    })
    const videoFile = await videoPromise
	const tinyUrl = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
    await client.sendMessage(m.chat, { document: videoFile, mimetype: 'video/mp4', caption: `*Url: ${tinyUrl.data}*`, fileName: `Dont forget to donate`, contextInfo: {
      externalAdReply: {
          title: 'YTMP4 DOWNLOADER',
          body: "",
          thumbnailUrl: 'https://telegra.ph/file/76827b39d82b28877fb57.jpg',
          sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
      }
  } }, { quoted: m })
    fs.unlink(mp4FilePath, (err) => {
      if (err) {
        console.error(err)
      }
    })
  } catch (err) {
    console.error(err)
    m.reply('Error: ' + err.message)
  }
}
const downloadMp3 = async (link) => {
  try {
	const ytdl = require('ytdl-core')
    await ytdl.getInfo(link)
    console.log('Downloading Audio')
    const randomFileName = crypto.randomBytes(8).toString('hex') + '.mp3'
    const mp3FilePath = path.join(os.tmpdir(), randomFileName)
    const writeStream = fs.createWriteStream(mp3FilePath)
    const audioPromise = new Promise((resolve, reject) => {
      writeStream.on('finish', () => {
        try {
          const audioFile = fs.readFileSync(mp3FilePath)
          resolve(audioFile)
        } catch (err) {
          reject(err)
        }
      })
      writeStream.on('error', (err) => {
        reject(err)
      })
      const audioStream = ytdl(link, { filter: 'audioonly' })
      audioStream.on('error', (err) => {
        reject(err)
      })
      audioStream.pipe(writeStream)
    })
    const audioFile = await audioPromise
    await client.sendMessage(m.chat, { audio: audioFile, mimetype: 'audio/mpeg', contextInfo: {
      externalAdReply: {
          title: `YTMP3 DOWNLOADER`,
          body: "",
          thumbnailUrl: 'https://telegra.ph/file/76827b39d82b28877fb57.jpg',
          sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
      }
  } }, { quoted: m })
    fs.unlink(mp3FilePath, (err) => {
      if (err) {
        console.error(err)
      }
    })
  } catch (err) {
    console.error(err)
    m.reply('Error: ' + err.message)
  }
}

      switch (command) {
            case 'about':
            case 'help':
            case 'menu': {
				try {
   	ppwong = await client.profilePictureUrl(from, 'image')
   	} catch {
   	ppme = 'https://telegra.ph/file/76827b39d82b28877fb57.jpg'
       ppwong = await getBuffer(ppme)
   	}
				const fmenu = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: '6289523258649-1604595598@g.us'
  },
  message: {
    orderMessage: {
      itemCount: '2023',
      status: 200,
      thumbnail: await client.reSize(ppwong, 100, 100),
      surface: 200,
      message: '',
      orderTitle: '',
      sellerJid: '0@s.whatsapp.net'
    }
  }
};

			let txt = `Hai kak @${m.sender.split("@")[0]}, Ada yang bisa Saya Bantu?

        
LIST MENU : 
                   
${aipl} menu
${aipl} ping
${aipl} speed
${aipl} speedtest
${aipl} runtime
${aipl} run
${aipl} donasi
${aipl} owner


乂 *CONVERTER MENU* 乂
${aipl} sticker *<balas img/videonya>*
${aipl} swm *Query*
${aipl} smeme *Query*
${aipl} smeme2 *Query*
${aipl} tomp4 *<balas stickergif>*
${aipl} toimg *<balas stickernya>*
${aipl} tourl *<balas image/videonya>*
${aipl} tinyurl *<Link>*
${aipl} removebg *balas imagenya*
${aipl} totext
${aipl} qc *Query*
${aipl} fakechat *Query*
${aipl} ocr
${aipl} ttp *Query*
${aipl} attp *Query*
${aipl} carbon *Query*
${aipl} sticksearch *Query*
${aipl} stickersearch *Query*


乂 *SEARCH & DOWNLOADER MENU* 乂
${aipl} cuaca *Query*
${aipl} artinama *Query*
${aipl} filmsearch *Query*
${aipl} film *Query*
${aipl} soundcloud *<Link>*
${aipl} cocofun *<Link>*
${aipl} whatmusic <balas videonya>
${aipl} tr <kode> <teks>
${aipl} translate <kode> <teks>
${aipl} gempa
${aipl} wiki *Teks*
${aipl} wikipedia *Teks*
${aipl} google *Teks*
${aipl} aiimg *Query*
${aipl} serimg *Query*
${aipl} pin *Query*
${aipl} pinterest *Query*
${aipl} ssweb *<Link>*
${aipl} ss *<Link>*
${aipl} jadwalsholat *Query*
${aipl} sholat *Query*
${aipl} ai *Teks*
${aipl} chatgpt *Teks*
${aipl} gpt *Teks*
${aipl} lirik *Query*
${aipl} lyrics *Query*
${aipl} ytsearch *Query*
${aipl} play *Query*
${aipl} npmjs *Query*
${aipl} ytmp3 *<Link>*
${aipl} ytmp4 *<Link>*
${aipl} getmusic *Balas ytsearch*
${aipl} getvideo *Balas ytsearch*
${aipl} twdl *<Link>*
${aipl} twitterdl *<Link>*
${aipl} fbdl *<Link>*
${aipl} facebookdl *<Link>*
${aipl} mediafire *<Link>*
${aipl} igdl *<Link>*
${aipl} instagramdl *<Link>*
${aipl} gdrive *<Link>*
${aipl} gdrivedl *<Link>*
${aipl} igstalk *Query*
${aipl} gitclone *<Link>*
${aipl} ghstalk *Query*
${aipl} ttdl *<Link>*
${aipl} tiktokdl *<Link>*
${aipl} ttmp3 *<Link>*
${aipl} brainly *Query*
${aipl} get *<Link>*
${aipl} megadl *<Link>*
${aipl} mega *<Link>*
${aipl} jarak *KotaA|KotaB*
${aipl} telestick *<Link>*
${aipl} sfiledl *<Link>*
${aipl} sfsearch *Query*


*Thanks to*

${mnsp}Allah SWT
My Family
My Friend
Adiwajshing
Amiruldev20 (baileys)
KazeDevID (base)
this.ilham_ (me)
Tio Botcahx
Erlan
DinXT
Jacky
Ramdani
M Imam Adi
Ferdiz-AFK
Nurutomo
Fatur freefire
Fajar-Kun
Ibeng Ireng
And Module Provider${mnsp}


*© Copyright Simple WhatsApp Bot*`
                    let buff = fs.readFileSync('./assets/images/menu.png')      
                    const sendMsg = await client.sendMessage(from, {text: txt, contextInfo: {
    forwardingScore: 9999,
    isForwarded: false,
    mentionedJid: [m.sender],
    externalAdReply: {
      showAdAttribution: true,
      title: `${ucapanWaktu}, ${pushname} 👋`,
      body: 'Follow @this.ilham_ for more updates',
      mediaType: 1,
      thumbnailUrl: 'https://telegra.ph/file/76827b39d82b28877fb57.jpg',
      sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
      renderLargerThumbnail: true
    }
  }}, {quoted:fmenu})
				}
                    break;
case 'cuaca': {
  if (!q) return m.reply(`Contoh: ${prefix}cuaca palembang`)

  const api_cuaca = '18d044eb8e1c06eaf7c5a27bb138694c'
  const unit_cuaca = 'metric'
  const nama_kota = q
  const cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)

  if (cuaca.cod === '404') {
    // Jika kota tidak ditemukan, maka balas dengan pesan berikut
    return m.reply('Kota tidak ditemukan')
  }

  const text_cuaca = `*INFO CUACA*
Nama: ${cuaca.name}, ${cuaca.sys.country}
Longitude: ${cuaca.coord.lon}
Latitude: ${cuaca.coord.lat}
Suhu: ${cuaca.main.temp} C
Angin: ${cuaca.wind.speed} m/s
Kelembaban: ${cuaca.main.humidity} %
Cuaca: ${cuaca.weather[0].main}
Keterangan: ${cuaca.weather[0].description}
Udara: ${cuaca.main.pressure} HPa`

  m.reply(text_cuaca)
}
break
case 'carbon':{
let inputText = m.quoted ? m.quoted.text : text;
  if (inputText === "") {
    return m.reply(`Masukkan pesan:\n${command} hello world`);
  }
var randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa', '#ffffff', '#00000000'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
m.reply(mess.wait)
const carbon = require('carbon-now-scraper');

const code = inputText
const output = "./tmp/carbon.png"
const options = {
    lang: "auto",
    theme: "dracula",
	background: apiColor,
	"width-adjustment": false
}
await carbon(code, output, options)
await client.sendMessage(m.chat, { image: await fs.readFileSync(output), caption: `*Done...*`},{quoted:m})
}
break
case 'soundcloud':{
                if (!q) return m.reply(`Gunakan Format : ${command} linknya`) 
                if (!q.includes('soundcloudmp')/('soundcloud.com')) return m.reply('Link Invalid ❎')
                await m.reply(mess.wait)
                async function soundcloud(url){
    return new Promise((resolve, reject) => {
        axios.get('https://soundcloudmp3.org/id').then((data) => {
            let a = cheerio.load(data.data)
            let token = a('form#conversionForm > input[type=hidden]').attr('value')
            const options = {
                method: 'POST',
                url: `https://soundcloudmp3.org/converter`,
                headers: {
                    "content-type": "application/x-www-form-urlencoded;",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "Cookie": data["headers"]["set-cookie"],
                },
                formData: {
                    _token: token,
                    url: url
                }
            };
            request(options, async function(error, response, body) {
                if (error) return m.reply(error.message)
                $get = cheerio.load(body)
                const result = {
                    status: 200,
                    author: author,
                    title: $get('#preview > div:nth-child(3) > p:nth-child(2)').text().replace('Title:',''),
                    duration: $get('#preview > div:nth-child(3) > p:nth-child(3)').text().replace(/Length\:|Minutes/g,''),
                    quality: $get('#preview > div:nth-child(3) > p:nth-child(4)').text().replace('Quality:',''),
                    thumbnail: $get('#preview > div:nth-child(3) > img').attr('src'),
                    download: $get('#download-btn').attr('href')
                }
                resolve(result)
            });
        })
    })
}
                soundcloud(`${q}`) 
               .then(result => {
                let text =`*🔰SOUNDCLOUD🔰*\n`
                text +=`*Title*: ${result.title}\n`
                text +=`*Durasi*: ${result.duration}\n`
                text +=`*Qulity*: ${result.quality}\n`
                text +=`*Author*: ${result.author}\n\n Wait Is Sending The Data You Request`
                client.sendMessage(m.chat, {document: {url:  result.download}, mimetype: 'audio/mpeg', fileName: `${result.title}.mp3`, caption: text}, { quoted: m })
                }).catch((err) => client.sendMessage(m.chat, {text: err.message}, { quoted: m }))
              }
                break
case 'cocofun': {
                if (!q) return m.reply(`Gunakan Format : ${command} https://www.icocofun.com/share/post/490013276810?lang=id&pkg=id&share_to=copy_link&m=253e3d90d057da0de4f9544ed67e4c54&d=0d18db9c398405eed9a59120805e336ff6dd6d841c556ada2b191c37a722a522&nt=1`)
                if (!q.includes('icocofun.com')/('cocofun.com')) return m.reply('Link Invalid ❎')
                async function cocofun(url){
  return new Promise((resolve, reject) => {
    axios({url, method: "get",
      headers: {
        "Cookie": "client_id=1a5afdcd-5574-4cfd-b43b-b30ad14c230e",
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      }
    }).then(data => {
      $ = cheerio.load(data.data)
      let json
      const res = $('script#appState').get()
      for(let i of res){
        if(i.children && i.children[0] && i.children[0].data){
          ress = i.children[0].data.split('window.APP_INITIAL_STATE=')[1]
          json = JSON.parse(ress)
        }
        const result = {
          status: 200,
          author: author,
          topic: json.share.post.post.content ? json.share.post.post.content : json.share.post.post.topic.topic,
          caption: $("meta[property='og:description']").attr('content'),
          play: json.share.post.post.playCount,
          like: json.share.post.post.likes,
          share: json.share.post.post.share,
          duration: json.share.post.post.videos[json.share.post.post.imgs[0].id].dur,
          thumbnail: json.share.post.post.videos[json.share.post.post.imgs[0].id].coverUrls[0],
          watermark: json.share.post.post.videos[json.share.post.post.imgs[0].id].urlwm,
          no_watermark: json.share.post.post.videos[json.share.post.post.imgs[0].id].url
        }
        resolve(result)
      }
    }).catch(reject)
  })
}
                m.reply(mess.wait)
                await cocofun(`${q}`) 
               .then(result => {
                let text =`*🔰COCOFUN🔰*\n`
                text +=`*Topic*: ${result.topic}\n`
                text +=`*Caption*: ${result.caption}\n`
                text +=`*View*: ${result.play}\n`
                text +=`*Share*: ${result.share}\n`
                text +=`*Like*: ${result.like}\n`
                text +=`*Durasi*: ${result.duration}`
                client.sendMessage(from, {video:{url: result.no_watermark}, caption: text}, {quoted:m})
                }).catch((err) => client.sendMessage(m.chat, {text: err.message}, { quoted: m }))
                }
                break 
                
case 'translate':
  case 'tr': {
    const { translate } = require('@vitalets/google-translate-api');
    const { translate: bingTranslate } = require('bing-translate-api');
  const amlok = `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh `
    try {
      if (!args[0]) return m.reply(amlok);
  
      let text = args.slice(1).join(' ');
      if ((args[0] || '').length !== 2) {
        text = args.join(' ');
      }
      if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
  
      const result = await translate(text, { to: args[0], autoCorrect: true });
      m.reply(result.text);
    } catch (error) {
      console.log(error);
      m.reply(`ERROR\n*Mecoba kembali...*`)
      try {
        if (!args[0]) return m.reply(amlok);
  
        let text = args.slice(1).join(' ');
        if ((args[0] || '').length !== 2) {
          text = args.join(' ');
        }
        if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
  
        const result = await bingTranslate(text, null, args[0]);
        m.reply(result.translation);
      } catch (error2) {
        console.log(error2);
        m.reply(util.format(error2));
      }
    }
  }
  break; 
case 'whatmusic': {
  try {
    if (/video|audio/.test(mime)) {
      let media = await quoted.download()
      await m.reply(mess.wait)
      let { status, metadata } = await acr.identify(media)
      if (status.code !== 0) return m.reply(status.msg)
      let { title, artists, album, genres, release_date } = metadata.music[0]
      let txt = `*• Title:* ${title}${artists ? `\n*• Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`
      txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`
      txt += `*• Release Date:* ${release_date}`
      await client.sendMessage(m.chat, {
        text: txt.trim(),
        footer: `Mau Dikirimkan Audionya, Klik Dibawah!!!`
      }, { quoted: m })
    } else {
      return m.reply(`Reply audio/video with command ${prefix}${command}`)
    }
  } catch (err) {
    console.log(err)
    await m.reply(util.format(err))
  }
}
  break
case 'jadian':{
	if (!m.isGroup) return m.reply(mess.group)
	let member = participants.map(u => u.id)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jodoh = member[Math.floor(Math.random() * member.length)]
    let jawab = `@${orang.replace(/@.+/, '')} ❤️ @${jodoh.replace(/@.+/, '')}\n*Semoga langgeng yak :)*`.trim()
    let mentionedJid = [orang, jodoh]
    await client.sendTextWithMentions(m.chat, jawab, '', `${command}`, command, m, { contextInfo: { mentionedJid } })
	}
	break
case 'gempa': {
let link = 'https://data.bmkg.go.id/DataMKG/TEWS/'
try {
		let res = await fetch(link+'autogempa.json')
		let anu = await res.json()
		anu = anu.Infogempa.gempa
		let txt = `*${anu.Wilayah}*\n\n`
		txt += `Tanggal : ${anu.Tanggal}\n`
		txt += `Waktu : ${anu.Jam}\n`
		txt += `Potensi : *${anu.Potensi}*\n\n`
		txt += `Magnitude : ${anu.Magnitude}\n`
		txt += `Kedalaman : ${anu.Kedalaman}\n`
		txt += `Koordinat : ${anu.Coordinates}${anu.Dirasakan.length > 3 ? `\nDirasakan : ${anu.Dirasakan}` : ''}`
		await client.sendMessage(m.chat, { image: { url: link+anu.Shakemap }, caption: txt }, { quoted: m })
	} catch (e) {
		console.log(e)
		m.reply(`[!] Fitur Error.`)
	}
}
break
case 'wiki':
case 'wikipedia': {
  if (args.length < 1) return m.reply('Yang Mau Di Cari Apa?');
  const querry = args.join(" ");
  
  async function wikipedia(querry) {
    try {
      const link = await axios.get(`https://id.wikipedia.org/wiki/${querry}`);
      const $ = cheerio.load(link.data);
      let judul = $('#firstHeading').text().trim();
      let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
      let isi = [];
      $('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
        let penjelasan = $(Ra).find('p').text().trim();
        isi.push(penjelasan);
      });
      for (let i of isi) {
        const data = {
          status: link.status,
          result: {
            judul: judul,
            thumb: 'https:' + thumb,
            isi: i
          }
        };
        return data;
      }
    } catch (err) {
      var notFound = {
        status: link.status,
        Pesan: err
      };
      return notFound;
    }
  }
  
  try {
    const res2 = await wikipedia(querry);
    if (res2.result) {
      const result2 = `*Wiki :* ${res2.result.judul}\n*Thumb :* ${res2.result.thumb}\n\n${res2.result.isi}`;
      client.sendMessage(m.chat, { text: result2 }, { quoted: m });
    } else {
      return m.reply("Not found");
    }
  } catch (error) {
    console.error(error);
    m.reply('Tidak Ditemukan');
  }
}
break;
case 'gimage':{
  try {
    if (!text) return m.reply(`Example : ${prefix + command} kaori cicak`)
    let gis = require('g-i-s');
    gis(text, async (error, result) => {
      if (error) return m.reply(error.message)
      n = result;
      console.log(n)
      images = n[Math.floor(Math.random() * n.length)];
      client.sendMessage(m.chat, {
        image: { url: images.url },
        caption: `*-------「 GIMAGE SEARCH 」-------*
*Query* : ${text}
*Media Url* : ${images.url}`,
        headerType: 4
      }, { quoted: m });
    });
  } catch (e) {
    m.reply(util.format(e));
  }
 }
  break;
case 'google':{
                if (!args[0]) return m.reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
                let google = require('google-it')
                m.reply(mess.wait)
                google({'query': args.join(" ")}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `*Title* : ${g.title}\n`
                teks += `*Description* : ${g.snippet}\n`
                teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                }) 
}
                break
case 'aiimg':
case 'serimg': {
if (!q) return m.reply('Masukkan Text')
try {
const farel = await fetchJson(`https://mfarels.my.id/api/openai-image?text=${q}`)
await client.sendMessage(m.chat, { image: { url: farel.result }, caption: `Nih Hasil Dari Search:`+q},{quoted:m})
} catch (err) {
	m.reply(util.format(err))
}
}
break
case 'act':
case 'update': {
  if (!isCreator) return m.reply(mess.botOwner)
  await m.reply(`Looking for resources...`)
  const cp = require('child_process')
  const { promisify } = require('util')
  let exec = promisify(cp.exec).bind(cp)
  try {
    await exec('git pull')
    await exec('git submodule update --init --recursive')
    await exec('git submodule foreach git pull origin master')
    await exec('git add .')
    await exec('git commit -m "Apdet:v"')
    await exec('git push')
    m.reply(`git push has been added successfully`)
  } catch (e) {
    console.error(e)
    m.reply(util.format(e))
  }
}
break
case 'jadwalsholat':
        case 'sholat':
        case 'solat': {
  if (!q) return m.reply(`Mana Querynya`)
  async function jadwalSolat(tempat) {
    try {
      const cheerio = require("cheerio");
      const cloudscraper = require("cloudscraper");
      const html = await cloudscraper.get("https://jadwalsholat.org/jadwal-sholat/monthly.php");
      const $ = cheerio.load(html);
      const cities = {};
      $("option").each((i, elem) => {
        const city = $(elem).text().toLowerCase().replace(/ /g, "_");
        const value = $(elem).attr("value");
        cities[city] = value;
      });
      const city = cities[tempat.toLowerCase().replace(/ /g, "_")];
      if (!city) {
        return m.reply("Maaf, kota yang Anda masukkan salah.")
      }
      const url = `https://jadwalsholat.org/jadwal-sholat/monthly.php?id=${parseInt(city)}`;
      const scheduleHtml = await cloudscraper.get(url);
      const $$ = cheerio.load(scheduleHtml);
      const schedule = {};
      schedule["tgl"] = $$(".table_highlight > td > b").text();
      schedule["imsyak"] = $$(".table_highlight > td:nth-child(2)").text();
      schedule["subuh"] = $$(".table_highlight > td:nth-child(3)").text();
      schedule["terbit"] = $$(".table_highlight > td:nth-child(4)").text();
      schedule["dhuha"] = $$(".table_highlight > td:nth-child(5)").text();
      schedule["dzuhur"] = $$(".table_highlight > td:nth-child(6)").text();
      schedule["ashr"] = $$(".table_highlight > td:nth-child(7)").text();
      schedule["maghrib"] = $$(".table_highlight > td:nth-child(8)").text();
      schedule["isya"] = $$(".table_highlight > td:nth-child(9)").text();
      const parameters = [];
      $$(".table_block_content > td[colspan]").each((i, elem) => {
        parameters.push($$(elem).text());
      });
      schedule["parameter"] = parameters.join(" ");
      return schedule;
    } catch (err) {
      console.log(err);
      return m.reply(`Terjadi kesalahan saat memperoleh jadwal sholat.`)
    }
  }
  if (!text) {
    return m.reply(`Contoh: ${prefix}solat ponorogo`);
  }
    const jadwal = await jadwalSolat(text.trim());
    const date = new Date();
    let txt = `Jadwal solat untuk wilayah ${text} hari ini:\n${readmore}`;
    txt += `Tanggal: ${date.toLocaleDateString("id-ld")}\n`;
    txt += `Imsyak: ${jadwal.imsyak}\n`;
    txt += `Subuh: ${jadwal.subuh}\n`;
    txt += `Terbit: ${jadwal.terbit}\n`;
    txt += `Dhuha: ${jadwal.dhuha}\n`;
    txt += `Dzuhur: ${jadwal.dzuhur}\n`;
    txt += `Ashr: ${jadwal.ashr}\n`;
    txt += `Maghrib: ${jadwal.maghrib}\n`;
    txt += `Isya: ${jadwal.isya}\n`;
    txt += `Parameter: ${jadwal.parameter}\n`;
    await m.reply(txt);
		}
		break
case 'pin':
case 'pinterest':{
if (!text) return m.reply(`Mana Querynya!!!`)
async function pinterest(query) {
    const headers = {
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'cookie': '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
    };
    const url = `https://ar.pinterest.com/search/pins/?autologin=true&q=${query}`;
    const response = await axios.get(url, { headers: headers });
    const results = [];
    const $ = cheerio.load(response.data);
    $('img').each(function () {
      results.push($(this).attr('src'));
    });
    return results;
  }
 await pinterest(text).then(p => {
	 client.sendMessage(m.chat, {image:{url:pickRandom(p)}, caption:`PINTEREST FOUND\n\n[ ${text} ]`}, {quoted:m})
 })
}
break
case 'ss':
case 'ssweb': {
  if (!args[0]) return client.sendMessage(m.chat, { text: 'Input URL!' }, { quoted: m });
  if (args[0].match(/xnxx\.com|hamster\.com|nekopoi\.care/i)) {
    return client.sendMessage(m.chat, { text: 'Link tersebut dilarang!' }, { quoted: m });
  }

  async function sswebA(url = '', full = false, type = 'desktop') {
    type = type.toLowerCase()
    if (!['desktop', 'tablet', 'phone'].includes(type)) type = 'desktop'
    let form = new URLSearchParams()
    form.append('url', url)
    form.append('device', type)
    if (!!full) form.append('full', 'on')
    form.append('cacheLimit', 0)
    let res = await axios({
      url: 'https://www.screenshotmachine.com/capture.php',
      method: 'post',
      data: form
    })
    let cookies = res.headers['set-cookie']
    let buffer = await axios({
      url: 'https://www.screenshotmachine.com/' + res.data.link,
      headers: {
        'cookie': cookies.join('')
      },
      responseType: 'arraybuffer' 
    })
    return Buffer.from(buffer.data)
  }

  try {
    const screenshot = await sswebA(args[0], false, 'tablet');
    await client.sendFile(m.chat, screenshot, 'screenshot.jpg','*Success...*\nDont forget to donate', m);
  } catch (err) {
    console.error(err);
    return client.sendMessage(m.chat, { text: 'Error' }, { quoted: m });
  }
}
break;
case 'lyrics':
case 'lirik':{
if (!text) return m.reply(`Mana Querynya!!!`)
m.reply(mess.wait)
async function lyrics(search) {
  const searchUrl = `https://www.musixmatch.com/search/${search}`;
  const searchResponse = await axios.get(searchUrl);
  const searchHtml = searchResponse.data;
  const $ = cheerio.load(searchHtml);

  const link = $('div.media-card-body > div > h2').find('a').attr('href');
  const lyricsUrl = `https://www.musixmatch.com${link}`;
  const lyricsResponse = await axios.get(lyricsUrl);
  const lyricsHtml = lyricsResponse.data;
  const $$ = cheerio.load(lyricsHtml);

  const thumb = $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src');
  const lyrics1 = $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics > span > p > span').text().trim();
  const lyrics2 = $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics > span > div > p > span').text().trim();
  const title = $$('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-10.col-md-8.col-ml-9.col-lg-9.static-position > div.track-title-header > div.mxm-track-title > h1').text().trim().replace('Lyrics','')
  const artist = $$('#site > div > div > div > main > div > div > div > div > div > div > div> div > div > h2 > span').text().trim();

  if (!thumb || (!lyrics1 && !lyrics2)) {
    return m.reply('No se encontraron letras para la canción');
  }

  const lyrics = `${lyrics1}\n${lyrics2}`;
  return { thumb: `https:${thumb}`, lyrics, title, artist };
}
await lyrics(text).then(p => {
	client.sendMessage(m.chat, {image:{url:p.thumb}, caption:`*LYRICS FOUND*\n\n*Title:* ${p.title}\n*Artist:* ${p.artist}\n*Lyrics:* ${p.lyrics}`}, {quoted:m})
})
}
break
case 'attp': {
  if (!text) return m.reply('Mana Querynya!!!')
  try {
	 m.reply(mess.wait)
    client.sendImageAsSticker(m.chat, lannn+`api/maker/attp?text=${text}&apikey=`+Key.lann, m, { packname, author });
  } catch (err) {
    console.error(err);
	m.reply(err.message)
  }
}
  break;
case 'ttp': {
var randomColor = ['ef1a11', '89cff0', '660000', '87a96b', 'e9f6ff', 'ffe7f7', 'ca86b0', '83a3ee', 'abcc88', '80bd76', '6a84bd', '5d8d7f', '530101', '863434', '013337', '133700', '2f3641', 'cc4291', '7c4848', '8a496b', '722f37', '0fc163', '2f3641', 'e7a6cb', '64c987', 'e6e6fa', 'ffffff'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
async function ttp(text, tcolor = apiColor) {
    return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                url: `https://www.picturetopeople.org/p2p/text_effects_generator.p2p/transparent_text_effect`,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "Cookie": "_ga=GA1.2.1667267761.1655982457; _gid=GA1.2.77586860.1655982457; __gads=ID=c5a896288a559a38-224105aab0d30085:T=1655982456:RT=1655982456:S=ALNI_MbtHcmgQmVUZI-a2agP40JXqeRnyQ; __gpi=UID=000006149da5cba6:T=1655982456:RT=1655982456:S=ALNI_MY1RmQtva14GH-aAPr7-7vWpxWtmg; _gat_gtag_UA_6584688_1=1"
                },
                formData: {
                    'TextToRender': text,
                    'FontSize': '100',
                    'Margin': '30',
                    'LayoutStyle': '0',
                    'TextRotation': '0',
                    'TextColor': `${tcolor}`,
                    'TextTransparency': '0',
                    'OutlineThickness': '3',
                    'OutlineColor': '000000',
                    'FontName': 'Lekton',
                    'ResultType': 'view'
                }
            };
            request(options, async function(error, response, body) {
                if (error) return m.reply(error.message)
                const $ = cheerio.load(body)
                const result = 'https://www.picturetopeople.org' + $('#idResultFile').attr('value')
                resolve({ status: 200, result: result })
            });
        })
}
  if (!text) return m.reply(`Tolong berikan Text!\n\n*Example:* ${command} hai guys`)
  await m.reply(mess.wait)
  await ttp(text)
    .then((res) => {
      return client.sendImageAsSticker(m.chat, res.result, m, { packname, author });
    })
    .catch((err) => {
      console.error(err);
      m.reply(util.format(err));
    });    
    }
    break
case 'quoteapi':
case 'quote-api':
case 'qc':
  case 'fakechat': {
var randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa', '#ffffff'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
  let inputText = m.quoted ? m.quoted.text : text;
  if (inputText === "") {
    return m.reply(`Masukkan pesan:\n${command} hello world`);
  }
  let payload = {
    type: "quoted",
    format: "webp",
    backgroundColor: apiColor,
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: await client.getName(m.quoted ? m.quoted.sender : m.sender),
          photo: {
            url: await client.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image').catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg')
          }
        },
        text: inputText,
        replyMessage: {}
      }
    ]
  };
  try {
    const response = await axios.post("https://bot.lyo.su/quote/generate", payload, {
      headers: { "Content-Type": "application/json" }
    });
    let buff = Buffer.from(response.data.result.image, "base64");
    if (buff == undefined) {
      return m.reply('Error');
    }
    client.sendImageAsSticker(m.chat, buff, m, { packname, author });
  } catch (err) {
    console.error(err);
    return m.reply('Error');
  }
}
break;
case 'donasi': {
              const tgo = '```'
              let domn = `${tgo}Bot ini gratis untuk semua dan dapat ditambahkan ke Grup. Namun, jika terbantu dan ingin berkontribusi, donasi sangat diapresiasi. Donasi membantu pemilik menjaga kelangsungan hidup bot dan memastikan berfungsi di masa depan. Terima kasih kepada yang sudah berdonasi. Mohon pertimbangkan berkontribusi agar bot terus beroperasi dan membantu pengguna dengan lebih baik lagi. Terima kasih :)${tgo}`
              client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/077455dafd3d931bc766e.jpg' }, caption: domn },{quoted:m})
              }
              break
case 'owner':
              client.sendContact(m.chat, global.owner, m)
              break
case 'totext':
case 'ocr': {
  const uploadImage = require('../lib/uploadImage')
  const ocrapi = require("ocr-space-api-wrapper");
  const { MessageType } = require('@adiwajshing/baileys');
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';

  if (!mime || !/image\/(jpe?g|png)/.test(mime))
    return m.reply('Mohon balas gambar dengan perintah .ocr dan pastikan tipe file adalah jpeg atau png')

  try {
    const img = await q.download();
    const url = await uploadImage(img);
    const hasil = await ocrapi.ocrSpace(util.format(url));

    await m.reply(hasil.ParsedResults[0].ParsedText);
  } catch (error) {
    console.log(error);
    await m.reply(util.format(error));
  }
}
break
case 'run':
case 'runtime':{
	m.reply(`${runtime(process.uptime())}`)
}
break
case 'speed':
case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python3 ./assets/speed.py --share')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
case 'ai':
case 'gpt':
case 'chatgpt':
case 'openai':
  case 'aii': {
if (!text) return m.reply(`Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `)
	m.reply(mess.wait)
	try {
  var apii = await fetchJson(`https://botcahx.cyclic.app/openai?text=${text}`)
  await client.sendMessage(m.chat, {text: apii.result}, {quoted:m})
	  } catch (e) {
		  m.reply(e.message)
		  try {
			  var fare = await fetchJson(`https://mfarels.my.id/api/openai?text=${text}`)
			  await client.sendMessage(m.chat, {text:fare.result},{quoted:m})
		  } catch {}
	  }
  }
  break
case 'sfile':
case 'sfiledl':
case 'sfilemobi':
case 'sfilemobidl':{
	m.reply(mess.wait)
	async function sfileDl(url) {
	let res = await fetch(url)
	let $ = cheerio.load(await res.text())
	let filename = $('div.w3-row-padding').find('img').attr('alt')
	let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
	let filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
	let download = $('#download').attr('href') + '&k=' + Math.floor(Math.random() * (15 - 10 + 1) + 10)
	return { filename, filesize, mimetype, download }
}
await sfileDl(q).then(p => {
	console.log(p)
	client.sendMessage(m.chat, {document: {url: p.download}, fileName: p.filename, mimetype: p.mimetype, caption: `Size: ${p.filesize}`}, {quoted:m})
})
}
break
case 'sfsearch':
case 'sfilesearch':{
                if (!q) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} WhatsApp mod*`)
                m.reply(mess.wait)
			async function sfileSearch(query, page = 1) {
	let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
	let $ = cheerio.load(await res.text())
	let result = []
	$('div.list').each(function () {
		let title = $(this).find('a').text()
		let size = $(this).text().trim().split('(')[1]
		let icon = $(this).find('img').attr('src')
		let link = $(this).find('a').attr('href')
		if (link) result.push({ title, icon, size: size.replace(')', ''), link })
	})
	return result
}
                await sfileSearch(`${q}`)
               .then(result => {
                res = '「 *SFILE MOBI SEARCH* 」\n\n'
                for (let i of result) {
                res += `*Nama*: ${i.title}\n*Ukuran*: ${i.size}\n*Link*: ${i.link}\n\n`
                }
                m.reply(res)
                });
}
                break 
case 'telestick':
case 'sticktele':
case 'telesticker': {
async function telegramStic(url) {
    let packName = url.replace("https://t.me/addstickers/", "")
    let resOne = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!resOne.ok) return m.reply(`${resOne.status} ${resOne.statusText}`)
    let jsonOne = await resOne.json()
    let sticArr = []
    for (let i of jsonOne.result.stickers) {
        let fileId = i.thumb.file_id
        let resTwo = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
        let jsonTwo = await resTwo.json()
        sticArr.push("https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jsonTwo.result.file_path)
    }
    return {
        name: jsonOne.result.name,
        title: jsonOne.result.title,
        result: sticArr
    }
    }
if (!args || !args[0]) return m.reply(`Input URL:\n${command} https://t.me/addstickers/shironacry`);
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) return m.reply(`Input URL:\n${usedPrefix + command} https://t.me/addstickers/twohundredthree`);
    let stik = await telegramStic(args[0])
    for (let sticker of stik.result) {
        const res = await fetch(sticker)
        let buff = Buffer.from(await res.arrayBuffer())
        //await m.reply( new MessageMedia((await fileTypeFromBuffer(buff)).mime, buff.toString("base64")), false, { sendMediaAsSticker: true, stickerName: `jamsut · alok`, stickerAuthor: 'efef', stickerCategories: ['😅'] } )
        await client.sendImageAsSticker(m.chat, buff, m, { packname: global.packname, author: global.author })
    }
    }
break
case 'setppbot': {
            if (!isCreator && !m.key.fromMe) return m.reply(mess.botOwner)
            if (!quoted) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (!/image/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (/webp/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            var media = await client.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
            var { img } = await generateProfilePicture(media)
            await client.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(media)
            m.reply(`Sukses`)
            }
                break
case 'sfiledl':
case 'sfile':
case 'sfilemobi': {
  if (args.length < 1) return m.reply('Linknya mana?')
	  try {
  let data = await fetchJson(`${lannn}/api/download/sfilemobi?url=${args[0]}&apikey=${Key.erlan}`)
      var capt = `Filename: ${data.result.filename}
Size: ${data.result.filesizeH}
Type: ${data.result.type}
Mimetype: ${data.result.mimetype}
      
Sebentar, Masih diproses!!!`
      client.sendMessage(m.chat, { text: capt }, { quoted: m })
      await client.sendMessage(m.chat, { document: { url: data.result.url }, mimetype: data.result.mimetype, fileName: data.result.filename }, { quoted: m })
	  } catch (err) {
      console.error(err)
      m.reply(util.format(err))
    }
}
  break
case 'c':
  case 'getcase':
    if (!isCreator && !m.key.fromMe) return m.reply(mess.botOwner);
    const getCase = (cases) => {
      const fileContent = fs.readFileSync("./connect/hamz.js").toString();
      const caseContent = fileContent.split(`case '${cases}'`)[1].split("break")[0];
      return "case " + `'${cases}'` + caseContent + "break;";
    };
    m.reply(getCase(q));
    break;
case 'imagenobg':
      case 'removebg': case 'remove-bg':{
	            if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            let remobg = require('remove.bg')
			    m.reply(mess.wait)
	            let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	            let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	            hmm = './tmp/remobg-'+getRandom('')
	            localFile = await client.downloadAndSaveMediaMessage(qmsg, hmm)
	            outputFile = './tmp/hremo-'+getRandom('.png')
	            m.reply(mess.wait)
	            remobg.removeBackgroundFromImageFile({
	            path: localFile,
	            apiKey: apinobg,
	            size: "regular",
	            type: "auto",
	            scale: "100%",
	            outputFile 
	            }).then(async result => {
	            client.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	            fs.unlinkSync(localFile)
	            fs.unlinkSync(outputFile)
	            })
	  }
	            break
case 'jarak': {
  try {
    const [from, to] = text.split("|")
    if (!(from && to)) return m.reply("Contoh: " + prefix + "jarak jakarta|bandung")
	m.reply(mess.wait)
    const data = await getDistance(from.trim(), to.trim())
    if (data.img) {
      await client.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
    } else {
      await m.reply(data.desc)
    }
  } catch (error) {
    console.log(error)
    await m.reply(util.format(error))
  }

async function getDistance(from, to) {
  try {
    const html = (await axios.get(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + from + ' ke ' + to)}&hl=id`)).data
    const $ = cheerio.load(html)
    const obj = {}
    const img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
    obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split(',')[1], 'base64') : ''
    obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
    return obj
  } catch (error) {
    console.log(error)
    return m.reply("Terjadi kesalahan saat memproses permintaan jarak")
  }
}
}
break
case 'tourl':{
               m.reply(mess.wait)
               let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
               let mpoedia = await client.downloadAndSaveMediaMessage(quoted)
               if (/image/.test(mime)) {
               anu = await TelegraPh(mpoedia)
               m.reply(util.format(anu))
               } else if (!/image/.test(mime)) {
               anu = await UploadFileUgu(mpoedia)
               m.reply(util.format(anu))
               }
               fs.unlinkSync(mpoedia)
	 }
              break
case 'tinyurl':{
               if (args.length < 1) return m.reply(`Penggunaan :\n*${prefix}tinyurl link*`)
               if (!isUrl(args[0])) return m.reply(`Masukkan link yang benar`)
               axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)
              .then((a) => m.reply(`Nih ${a.data}`))
              .catch(() => m.reply(`Error, harap masukkan link dengan benar`))
}
               break
case 'megadl':
case 'mgz':
  case 'mega': {
  if (!text) return m.reply('URL tidak ditemukan')
  try {
    const { File } = require('megajs')
    const file = File.fromURL(text)
    await file.loadAttributes()
    const data = await file.downloadBuffer()
    client.sendMessage(m.chat, { document: data, fileName: file.name, caption: `Berhasil Didapatkan...\nFilename: ${file.name}\nSize: ${formatp(file.size)}`, mimetype: file.name.split(".")[1] },{quoted:m})
  } catch (e) {
    console.error(e)
    m.reply('Terjadi kesalahan saat mengunduh file.')
  }
}
break;
case 'get': {
            if (!text) return m.reply('mana linknya');
            let url = new URL(text);
            let res = await fetch(url);
            let bufg = await getBuffer(text);
            if (parseInt(res.headers.get('content-length')) > 100 * 1024 * 1024) {
              delete res;
              return m.reply(`Content-Length: ${res.headers.get('content-length')}`);
            }
            if (!/text|json/.test(res.headers.get('content-type'))) {
              await client.sendFile(m.chat, bufg, 'get.jpg', `*${url}*`, m);
            } else {
              let txt = await res.text();
              try {
                txt = util.format(JSON.parse(txt));
              } catch (e) {
                txt += '';
              } finally {
                m.reply(txt.slice(0, 65536));
              }
            }
          }
          break; 
case 'brainly': {
  try {
    if (!q) return m.reply(`Kirim perintah: ${prefix}brainly *soal*\nContoh: ${prefix}brainly apa itu dpr`);
    const brainly = require('brainly-scraper');
    brainly(q, 5, "id").then(res => {
      let resultbrainly = `「 *BRAINLY-SEARCH* 」\n\n`;
      for (let x = 0; x < res.data.length; x++) {
        resultbrainly += `• *Soal:* ${res.data[x].pertanyaan}\n• *Jawaban:* ${res.data[x].jawaban[0].text.replace('Jawaban:', '').trim()}\n\n`;
      }
      m.reply(resultbrainly.trim());
    });
  } catch {
    const Brainly = require("brainly-scraper-v2");
    const brainly = new Brainly('id');
    const res = await brainly.search(q, 'id').catch(() => null);
    console.log(res);
    const answer = res.map(({ question, answers }, i) => `
      *Pertanyaan*${question.grade ? ` (${question.grade})` : ''}\n${question.content}${answers.map((v, i) => `
      *Jawaban Ke ${i + 1}*${v.verification ? ' (Terverifikasi)' : ''}${v.isBest ? ' (Terbaik)' : ''}
      ${v.content}${v.attachments.length > 0 ? `\n*Media Url*: ${v.attachments.join(', ')}` : ''}`).join('')}`).join('\n' + '-'.repeat(45));
    m.reply(answer.trim());
  }
}
  break;
case 'ttdl':
       case 'tiktoknowm':
	   case 'tiktokdl':
       case 'tiktok':
case 'tt': {
  if (!q) return m.reply(`Perintah ini untuk mengunduh video TikTok dengan link. Contoh: ${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`)
  m.reply(mess.wait);
  const { load } = require('cheerio');

  function getKey(page) {
    const regex = /key=([0-9a-f-]+)/;
    const key = page.text().match(regex);
    return key ? key[1] : null;
  }

  async function ttdl(link) {
    let host = 'https://ttsave.app';
    let body, headers, res, $;

    try {
      res = await needle('get', host);
      $ = load(res.body);
      host = `https://ttsave.app/download?mode=video&key=${getKey($('script[type="text/javascript"]'))}`;
      body = { id: link };
      headers = { "User-Agent": "PostmanRuntime/7.31.1" };
      res = await needle("post", host, body, { headers, json: true });
      $ = load(res.body);

      return {
        success: true,
        author: {
          name: $('div div h2').text(),
          profile: $('div a').attr('href'),
          username: $('div a.font-extrabold.text-blue-400.text-xl.mb-2').text()
        },
        video: {
          thumbnail: $('a[type="cover"]').attr('href'),
          desc: $('div.flex.flex-row.items-center.justify-center.gap-1.mt-1 span').text(),
          views: $('div.flex.flex-row.items-center.justify-center.gap-2.mt-2 div:nth-child(1) span').text(),
          loves: $('div.flex.flex-row.items-center.justify-center.gap-2.mt-2 div:nth-child(2) span').text(),
          comments: $('div.flex.flex-row.items-center.justify-center.gap-2.mt-2 div:nth-child(3) span').text(),
          shares: $('div.flex.flex-row.items-center.justify-center.gap-2.mt-2 div:nth-child(4) span').text(),
          url: {
            no_wm: $("a:contains('DOWNLOAD (WITHOUT WATERMARK)')").attr("href"),
            wm: $("a:contains('DOWNLOAD (WITH WATERMARK)')").attr("href"),
          }
        },
        backsound: {
          name: $('div.flex.flex-row.items-center.justify-center.gap-1.mt-5 span').text(),
          url: $("a:contains('DOWNLOAD AUDIO (MP3)')").attr("href")
        }
      };
    } catch (error) {
      console.error(error);
      console.log("\n[!] Something error, error saved to log/error.json\n");
      return { success: false };
    }
  }

  const result = await ttdl(q);
  client.sendFileUrl(m.chat, result.video.url.no_wm, `*Tiktok Downloader*\n\n*Name:* ${result.author.name} || ${result.author.username}\n*Views:* ${result.video.views}\n*Loves:* ${result.video.loves}\n*Comments:* ${result.video.comments}\n*Shares:* ${result.video.shares}\n*Backsound:* ${result.backsound.name}`, m);
}
break;		 
     case 'tiktokmp3':
     case 'tiktokmusic':
	 case 'tiktokmusicdl':
	 case 'ttmp3': {
	if (!q) return m.reply(`Perintah ini untuk mengunduh audio TikTok dengan link. Contoh: ${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`)
	m.reply(mess.wait)
	const { load } = require('cheerio');
	function getKey(page) {
  const regex = /key=([0-9a-f-]+)/;
  const key = page.text().match(regex);
  return key ? key[1] : null;
};
	async function ttdl(link) {
  let host = 'https://ttsave.app';
  let body, headers,
    res = await needle('get', host), 
    $ = load(res.body);

  try {
    host = `https://ttsave.app/download?mode=audio&key=${getKey($('script[type="text/javascript"]'))}`;
    body = { id: link };
    headers = { "User-Agent": "PostmanRuntime/7.31.1" };
    res  = await needle("post", host, body, {headers, json: true});
    $ = load(res.body);

    return {
      success: true,
      author: {
        name: $('div div h2').text(),
        profile: $('div a').attr('href'),
        username: $('div a.font-extrabold.text-blue-400.text-xl.mb-2').text()
      },
      audio: {
        thumbnail: $('a[type="cover"]').attr('href'),
        views: $('div.flex.flex-row.items-center.justify-center.gap-2.mt-2 div:nth-child(1) span').text(),
        loves: $('div.flex.flex-row.items-center.justify-center.gap-2.mt-2 div:nth-child(2) span').text(),
        comments: $('div.flex.flex-row.items-center.justify-center.gap-2.mt-2 div:nth-child(3) span').text(),
        shares: $('div.flex.flex-row.items-center.justify-center.gap-2.mt-2 div:nth-child(4) span').text(),
        url: $("a:contains('DOWNLOAD AUDIO (MP3)')").attr("href")
      }
    }
  } catch (error) {
    console.error(error)
console.log("\n[!] Something error, error saved to log/error.json\n")
    return { success: false }
  }
}
await ttdl(q)
  .then((result) => {
    client.sendMessage(m.chat, {document: {url:result.audio.url}, mimetype: 'audio/mpeg', fileName: result.author.name+'.mp3'},{quoted:m})
  })
}
break	
case 'gitclone': {
  try {
    if (!args[0]) {
      return m.reply('Linknya?');
    }
    const regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!regx.test(args[0])) {
      return m.reply('Linknya salah');
    }
    m.reply(mess.wait);
    const [, usker, repo] = args[0].match(regx) || [];
    const repos = repo.replace(/.git$/, '');
    const hasdl = `https://api.github.com/repos/${usker}/${repos}/zipball`;
    const response = await fetch(hasdl, { method: 'HEAD' });
    const filename = response.headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
    const file = { url: hasdl };
    const sendMessageOptions = { quoted: m };
    if (filename) {
      file.fileName = filename;
    }
    client.sendMessage(m.chat, { document: file, mimetype: 'application/zip', fileName: filename }, {quoted:m});
  } catch (err) {
    m.reply(util.format(err));
  }
}
break;
case 'ghstalk':
case 'githubstalk':{
                if (!text) return m.reply( 'Harap Masukan Username')
                await m.reply(mess.wait)
                try {
                ano = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
				if (!ano) return m.reply(`Error`)
                hasilnya = `*── 「 GITHUB STALK 」 ──*\n\n➸ *Bio*: ${ano.bio}\n➸ *Company*: ${ano.company}\n➸ *Public Repos:* ${ano.public_repos}\n➸ *Public Gists:* ${ano.public_gists}\n➸ *Followers:* ${ano.followers}\n➸ *Following:* ${ano.following}\n➸ *Lokasi:* ${ano.location}\n➸ *Link:* ${ano.html_url}`
                await client.sendMessage(m.chat, { image: {url:ano.avatar_url}, caption: hasilnya }, {quoted:m})
                } catch (err) {
                console.log(err)
                }
	  }
                break
case 'googledrivedl':
case 'googledrive':
case 'gdrivedl':
case 'gdrive': {
  async function gdrivedl(url) {
	let id
	if (!(url && url.match(/drive\.google/i)))return m.reply('Invalid URL')
	id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
	if (!id) return m.reply('ID Not Found')
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	//if (!downloadUrl) throw 'Límite de descarga del link'
	let data = await fetch(downloadUrl)
	if (data.status !== 200) return m.reply(data.statusText)
	return { downloadUrl, fileName, fileSize: formatp(sizeBytes), mimetype: data.headers.get('content-type') }
}
  try {
    if (!args[0]) return m.reply(`Input URL\n\nExample: ${command} https://drive.google.com/file/d/0B_WlBmfJ3KOfdlNyVWwzVzQ1QTQ/view?resourcekey=0-P3IayYTmxJ5d8vSlf-CpUA`);
    if (!args[0].match(/drive\.google/i)) return m.reply('Invalid URL');
	m.reply(mess.wait)
    let res = await gdrivedl(args[0]);
    await client.sendFileUrl(m.chat, res.downloadUrl, '*Filename:* '+res.fileName+`\n*Size:* `+res.fileSize, m);
  } catch (err) {
    m.reply(err.message);
  }
}
  break;
case 'igstalk':{
if (!q) return m.reply(`Mana Usernamenya?`)
async function igstalk(username) {
  try {
    const { data } = await axios.get(`https://dumpoir.com/v/${username}`, {
      headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYT3dzSXI2YWR6SG1fNFdmTllfZnFIZ1Ra; __gads=ID=f8ead4404e6a0e16-2206b4189ace0028:T=1636352226:RT=1636352226:S=ALNI_MbsEYYwp3U-9PJHoUHPA0mj4zn3uQ; _ym_uid=1636352226596108095; _ym_d=1636352226; _ym_isad=2; __atssc=google%3B1; __atuvc=3%7C45; __atuvs=6188c0df986e798b002"
      }
    });
    const $ = cheerio.load(data);
    const results = {
      username: $('#user-page > div.user > div.row > div > div.user__title > h4').text().replace(/@/gi, '').trim(),
      fullName: $('#user-page > div.user > div.row > div > div.user__title > a > h1').text(),
      profilePicHD: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, '').trim(),
      bio: $('#user-page > div.user > div.row > div > div.user__info-desc').text(),
      followers: $('#user-page > div.user > div.row > div > ul > li:nth-child(2)').text().replace(/Followers/gi, '').trim(),
      followersM: $('#user-page div.container div:nth-child(1) div:nth-child(1) div div:nth-child(3) a:nth-child(3)').text().replace(/Followers/gi, '').trim(),
      following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(/Following/gi, '').trim(),
      followingM: $('#user-page div.container div:nth-child(1) div:nth-child(1) div div:nth-child(3) a:nth-child(4)').text().replace(/Following/gi, '').trim(),
      postsCount: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(/Posts/gi, '').trim(),
      postsCountM: $('#user-page div.container div:nth-child(1) div:nth-child(1) div div:nth-child(3) a:nth-child(1)').text().replace(/Posts/gi, '').trim()
    };
    return results;
  } catch (e) {
    console.error(e);
    return m.reply('Not found ;-;')
  }
}
await igstalk(q).then(p => {
	console.log(p)
	client.sendMessage(m.chat, {image: {url:p.profilePicHD}, caption: `*Username:* ${p.username}\n*Full:* ${p.fullName}\n*Bio:* ${p.bio}\n*Followers:* ${p.followers}\n*Following:* ${p.following}\n*Post Count:* ${p.postsCount}`},{quoted:m})
})
}
break
case 'instagram':
case 'instagramdl':
  case 'igfoto':
   case 'ig':
   case 'igdl':
case 'igmp4':
case 'igvideo': {
  if (!q) return m.reply(`Usage example...\n${command} https://www.instagram.com/reel/CsC-4wDL0oO/?igshid=NTc4MTIwNjQ2YQ==`)
  m.reply(mess.wait)
  const { instagram } = await require("@xct007/frieren-scraper");
  const result = await instagram.v2(q);
  for (let rem of result) {
  if (!rem) {
    return m.reply("Maaf, medianya tidak ditemukan")
  }
  console.log(result)
  await client.sendFileUrl(m.chat, rem.url, `*INSTAGRAM DOWNLOADER*`, m);
  }
}
break;
case 'mddl':
case 'mediafiredl':
case 'md':
  case 'mediafire': {
    if (args.length < 1) return m.reply(`Mana linknya?\nExample: ${command} https://www.mediafire.com/file/6tknikx5f3jfsh8/alphabotv16.zip/file`);
    if (!isUrl(args[0]) && !args[0].includes('mediafire')) return m.reply(mess.link);
    try {
      m.reply(mess.wait);
async function mediafireDl(url){
const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
const $ = cheerio.load(res.data);
const link = $('#downloadButton').attr('href');
const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','');
const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','');
let mime = '';
let rese = await axios.head(link)
mime = rese.headers['content-type']
return { name ,size ,date ,mime ,link };
}
      const res = await mediafireDl(args[0]);
	  const txt = `*Media Fire Downloader*
        \n🗄️ *Nama:* ${res.name}
📁 *Ukuran:* ${res.size}
🗃️ *Mimetype:* ${res.mime}
📨 *Link:* ${res.link}
⏰ *Date:* ${res.date}
        \n_*Tunggu proses mengirim media...⏳*_`
      const result = client.sendMessage(m.chat, { text: txt},{quoted:m})
     await client.sendMessage(m.chat, {document: {url: res.link}, mimetype: res.mime, fileName: res.name, caption: `*Done...*`}, {quoted: m});
    } catch (e) {
      console.log(e);
      m.reply(`Error: ${e.message}`);
    }
  }
  break;
  case 'join':  {
              if (!isCreator) return m.reply(mess.botOwner)
                if (!text) return m.reply('Masukkan Link Group!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await client.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
              break
case 'hidetag':{
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply(mess.admin)
                client.sendMessage(m.chat, { text : q ? q : 'kosong' , mentions: participants.map(a => a.id)})
}			
                break
case 'artinama':{
if (!text) return m.reply(`Mana Querynya!!!`)

const axios = require("axios");
const cheerio = require("cheerio");

async function ArtiNama(nama) {
  try {
    const { data } = await axios.get(
      `https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`
    );
    const $ = cheerio.load(data);
    const isi = $("#body").text().split("Nama:")[0];
    const res = {
      status: 200,
      creator: "caliph",
      result: isi.trim(),
    };
    return res;
  } catch (error) {
    return m.reply(error.message)
  }
}

try {
  const p = await ArtiNama(text);
  console.log(p);
  client.sendMessage(m.chat, { text: p.result }, { quoted: m });
} catch (err) {
  console.error(err);
}
}
break;
case 'filmsearch':
case 'film': {
  if (!text) return m.reply('Mana Querynya!!!!')

async function lk21(q) {
  const axios = require('axios');
  const cheerio = require('cheerio');

  const html = await axios.get('https://nonton.lk21official.wiki/?s=' + q);
  const $ = cheerio.load(html.data);

  const res = [];
  const arr = $('body > main > div > section > div > div > div > div');

  if (arr.text() === undefined || arr.text() === '' || !arr.text()) {
    return { status: 404, creator: 'Caliph', result: [] };
  }

  arr.each(function (a, b) {
    const link = $(b).find('a').attr('href');
    const judul = $(b).find('a').attr('title');
    const thumb = 'https:' + $(b).find('img').attr('src');
    const genre = $(b).find('p.cat-links').text();
    const sutradara = $(b).find('p:nth-child(3)').text().split(':')[1];
    res.push({ judul, link, thumb, genre, sutradara });
  });

  return { status: html.status, creator: 'Caliph', result: res };
}

try {
  const p = await lk21(text);
  let no = 1;
  let teks = `*FILM FOUND*\n*Scrape LK21...*\n\n`;
  for (const alok of p.result) {
    teks += `⭔ *No:* ${no++}\n⭔ *Judul:* ${alok.judul}\n⭔ *Link:* ${alok.link}\n⭔ *Thumb:* ${alok.thumb}\n⭔ *Genre:* ${alok.genre}\n⭔ *Sutradara:* ${alok.sutradara}\n\n─────────────────\n\n`;
  }
  client.sendMessage(m.chat, { image: {url:p.result[0].thumb},caption: teks }, { quoted: m });
} catch (err) {
  console.error(err);
}
}
break;
case 'fbdown':
 case 'fb':
 case 'facebook':
 case 'fbdl':{
if (!q) 
      return m.reply(`Masukkan URL!\n\ncontoh:\n${command} https://www.facebook.com/watch/?v=1393572814172251`)
  m.reply(mess.wait)
async function fbdl2(Link) {
  try {
    const BodyForm = {
      url: Link
    };
    const response = await axios({
      url: "https://www.getfvid.com/downloader",
      method: "POST",
      data: new URLSearchParams(Object.entries(BodyForm)),
      headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9,id;q=0.8",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
      }
    });
    const $ = cheerio.load(response.data);
    const HD = $("body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered").find('div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href');
    const Normal = $("body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered").find('div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(2) > a').attr("href");
    const AU = $("body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(3) > a").attr("href");
    const tt = $("body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-5.no-padd > div > h5 > a").text();
    const result = {
      status: true,
      author: "@VihangaYT",
      result: {
        Title: tt,
        HD: HD,
        SD: Normal,
        Audio: AU
      }
    };
    return result;
  } catch (error) {
    return m.reply(error.message)
  }
}
await fbdl2(q).then(p => {
const { HD, SD } = p.result
const result = HD || SD
let quality = "";
  if (result.includes("HD")) {
  quality = "HD";
} else if (result.includes("SD")) {
  quality = "SD";
} else {
  return m.reply("Maaf, videonya tidak ditemukan")
}
  client.sendFileUrl(m.chat, result, `*Facebook Downloader*\n\n- Quality: ${quality}`, m);
  console.log(p);
}).catch(error => {
  return m.reply(error.message)
});
 }
 break
case 'tw':
case 'twdl':
 case 'twitter':
 case 'twitterdl':{
if (!args[0]) return m.reply(`Gunakan format: ${command} https://twitter.com/mosidik/status/1475812845249957889?s=20`)
m.reply(mess.wait)
async function twitter(link) {
	return new Promise((resolve, reject) => {
    let config = {
	'URL': link
     }
axios.post('https://twdown.net/download.php',qs.stringify(config),{
	headers: {
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
"cookie": "_ga=GA1.2.1388798541.1625064838; _gid=GA1.2.1351476739.1625064838; __gads=ID=7a60905ab10b2596-229566750eca0064:T=1625064837:RT=1625064837:S=ALNI_Mbg3GGC2b3oBVCUJt9UImup-j20Iw; _gat=1"
	}
})
.then(({ data }) => {
const $ = cheerio.load(data)
resolve({
desc: $('div:nth-child(1) > div:nth-child(2) > p').text().trim(),
thumb: $('div:nth-child(1) > img').attr('src'),
HD: $('tbody > tr:nth-child(1) > td:nth-child(4) > a').attr('href'),
SD: $('tr:nth-child(2) > td:nth-child(4) > a').attr('href'),
audio: 'https://twdown.net/' + $('tr:nth-child(4) > td:nth-child(4) > a').attr('href')
	})
})
	.catch(reject)
	})
}
await twitter(args[0]).then((p) => {
client.sendFileUrl(m.chat, p.HD || p.SD, `*TWITTER DOWNLOADER*\n\n${p.desc}`, m) 
})
 }
 break
		case 'npm':
case 'npmjs': {
  if (!q) return m.reply(`Kirim perintah ${prefix}npmjs *query*\nContoh: ${prefix}npmjs axios`);
  axios.get(`https://www.npmjs.com/search/suggestions?q=${encodeURIComponent(q)}`).then(({ data }) => {
    let listnpm = "*「 NPMJS-SEARCH 」*\n\n";
    for (let y = 0; y < data.length; y++) {
      listnpm += `• *Name:* ${data[y].name}\n• *Scope:* ${data[y].scope}\n• *Publisher:* ${data[y].publisher.username}\n• *Link:* ${data[y].links.npm}\n• *Date:* ${data[y].date}\n• *Description:* ${data[y].description}\n\n`;
    }
    client.sendMessage(from, { text: listnpm.trim() }, { quoted: m });
  }).catch((err) => {
    m.reply(err.message);
  });
}
  break;
  case 'play': case 'ytplay': {
		 if (!text) return m.reply(`Example : ${prefix + command} dj alok 30 detik`)
		 let yts = require("yt-search")
		 let search = await yts(text)
		 let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
		 await client.sendMessage(m.chat, { react: { text: `🔍`, key: m.key }})
		 m.reply(mess.wait)
let pla = `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}

*Sebentar, masih diproses...*`
const alok = await client.sendMessage(m.chat, { text: pla, contextInfo: {
				    forwardingScore: 9999,
				    isForwarded: false, 
				    externalAdReply: {
                    showAdAttribution: true,
					title: anu.title,
					body: `Don't forget to donate`,
					mediaUrl: anu.url,
					description: anu.description,
					mediaType: 1,
                    renderLargerThumbnail: true,
					previewType: "PHOTO",
					thumbnailUrl: anu.thumbnail,
					sourceUrl: `https://instagram.com/this.ilham_`	
				}
			},}, { quoted: m })
  try {
await downloadMp3(anu.url)
await client.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
  } catch (err) {
		m.reply(err.message)
  }
  await client.sendMessage(m.chat, { react: { text: `✅`, key: alok.key }})
}
break
case 'getmusic':
case 'getvideo': {
  try {
    if (!text) return m.reply(`Example : ${prefix + command} 1`)
    if (!m.quoted) return m.reply('Reply Pesan Hasil Dari ytsearch');
    if (!m.quoted.isBaileys) return m.reply('Hanya Bisa Membalas Pesan Dari Bot')
    let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'));
    if (!urls) return m.reply('Mungkin pesan yang anda reply tidak mengandung result ytsearch')
    m.reply(mess.wait);
    if (command === 'getmusic') {
      await downloadMp3(urls[text - 1]);
    } else {
      await downloadMp4(urls[text - 1]);
    }
  } catch (e) {
    m.reply(e.message);
  }
}
break;
  case 'yts': case 'ytsearch': {
                if (!q) return m.reply(`Example : ${prefix + command} story wa anime`)
                m.reply(mess.wait)
                let yts = require("yt-search")
                let search = await yts(q)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
				teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                client.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
		case 'tomp4':
case 'tovideo':
case 'tovid':
case 'toimage':
case 'toimg': {
  if (!m.quoted) return m.reply(command === 'toimage' || command === 'toimg' ? 'Reply sticker' : 'Reply Image')
  if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
  let media = await client.downloadAndSaveMediaMessage(quoted)
  if (command === 'tomp4' || command === 'tovideo' || command === 'tovid') {
    let { webp2mp4File } = require('../lib/uploader.js')
    let webpToMp4 = await webp2mp4File(media)
    await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
    await fs.unlinkSync(media)
  } else {
    let ran = getRandom('.png')
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
      fs.unlinkSync(media)
      if (err) return m.reply(util.format(err))
      let buffer = fs.readFileSync(ran)
      client.sendMessage(m.chat, { image: buffer }, { quoted: m })
      fs.unlinkSync(ran)
    })
  }
}
break;
case 'yta':
case 'ytmp3':
case 'mp3':
case 'ytv':
case 'ytmp4':
case 'mp4': {
  if (!args[0]) return m.reply(command.includes('yt') ? 'Masukkan URL!' : 'Masukan Link!')
  try {
    m.reply(mess.wait)
    if (command === 'yta' || command === 'mp3' || command === 'ytmp3') {
      await downloadMp3(args[0]);
    } else {
      const tinyUrl = await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`);
      await downloadMp4(args[0]);
    }
  } catch (err) {
    m.reply(err.message);
  }
}
break;
case 'info':
case 'tes':
case 'ping':
case 'botstats': {
  const { totalmem, freemem } = require('os')
  const os = require("os");
  const util = require("util");
  const osu = require("node-os-utils");
  const { sizeFormatter } = require("human-readable");
  const speed = require('performance-now')
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce(
    (last, cpu, _, { length }) => {
      last.total += cpu.total;
      last.speed += cpu.speed / length;
      last.times.user += cpu.times.user;
      last.times.nice += cpu.times.nice;
      last.times.sys += cpu.times.sys;
      last.times.idle += cpu.times.idle;
      last.times.irq += cpu.times.irq;
      return last;
    },
    {
      speed: 0,
      total: 0,
      times: {
        user: 0,
        nice: 0,
        sys: 0,
        idle: 0,
        irq: 0,
      },
    }
  );
  await m.reply('_Testing speed..._');
  let old = speed();
  let neww = speed();
  let spee = neww - old;
  let cpuInfo = osu.cpu;
  let cpuCore = await cpuInfo.count();
  let cpuModel = await cpuInfo.model();
  let drive = osu.drive;
  let mem = osu.mem;
  let netstat = osu.netstat;
  let HostN = os.hostname();
  let OS = os.platform();
  let ipx = osu.os.ip();
  //let cpuModel = await cpuInfo.model();
  let cek = await (await fetchJson("https://api.myip.com"))

  let ip = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.ip);
  let cr = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.country);
  let cc = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.cc);

  let d = new Date(new Date() + 3600000);
  let locale = 'id';
  let weeks = d.toLocaleDateString(locale, { weekday: 'long' });
  let dates = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  let times = d.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });

  await client.sendMessage(m.chat, { text: `*ᴘ ɪ ɴ ɢ*
${spee.toFixed(4)} ms

*ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ* 
${runtime(process.uptime())}

*s ᴇ ʀ ᴠ ᴇ ʀ*
*🛑 ʀᴀᴍ:* ${formatp(totalmem() - freemem())} / ${formatp(totalmem())}
*🔵 ғʀᴇᴇʀᴀᴍ:* ${formatp(freemem())}
*🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
*🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
*💻 ᴏs:* ${OS}
*📍 ɪᴘ:* ${ip}
*🌎 ᴄᴏᴜɴᴛʀʏ:* ${cr}
*💬 ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ:* ${cc}
*🛢️ cpu model:* ${cpuModel || 'null'} Core
*🔮 ᴄᴘᴜ ᴄᴏʀᴇ:* ${cpuCore || 'null'} Core
*⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${times}

_NodeJS Memory Usage_
${
  "```" +
  Object.keys(used)
    .map(
      (key, _, arr) =>
        `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
          used[key]
        )}`
    )
    .join("\n") +
  "```"
}

${
  cpus[0]
    ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
  .map(
    (cpu, i) =>
      `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
        cpu.times
      )
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}`
  )
  .join("\n\n")}`
    : ""
}
`, contextInfo: {
    forwardingScore: 9999,
    isForwarded: false,
    mentionedJid: [m.sender],
    externalAdReply: {
      showAdAttribution: true,
      title: ``,
      body: 'Follow @this.ilham_ for more updates',
      mediaType: 1,
      thumbnailUrl: 'https://telegra.ph/file/76827b39d82b28877fb57.jpg',
      sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
      renderLargerThumbnail: true
    }
  }})
}
break;
 case 'sticker': case 's': case 'stickergif': case 'sgif': {
                 if (!quoted) return m.reply(`*Balas Video/Image Dengan Caption* ${prefix + command}`)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
				m.reply(mess.wait)
                let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
                let media = await quoted.download()
			m.reply(mess.wait)
                let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                return m.reply(`*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`)
                }
                 }
                 break
      case 'swm': case 'stickerwm': case 'take': case 'wm':{
                if (!quoted) return m.reply('mana gambarnya')
       	     if (!args.join(" ")) return m.reply(`Example :\nswm client | Gans`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0];
                const atnm = swn.split("|")[1];
                m.reply(mess.wait)
                if (quoted.msg === true) {
                client.downloadAndSaveMediaMessage(quoted, "gifee")
                client.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
                } else if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 15) return m.reply('Maksimal 15 detik!')
                let media = await quoted.download()
                let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                fs.unlinkSync(encmedia)
                } else {
                m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
	  }
                break
				case 'smeme': case 'stickermeme': case 'stickmeme': {
  try{
if (!text) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!quoted) return m.reply('Reply Image')
//if (text.includes('|')) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
mee = await client.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('../lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = client.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
    fs.unlinkSync(mee)
  } catch (e){
    m.reply(util.format(e))
  }
}
break
case 'tomp3': {
  if (/document/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
  if (!quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
  m.reply(mess.wait)
  let media = await quoted.download()
  let audio = await toAudio(media, 'mp4')
  client.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${client.user.name}.mp3`}, { quoted : m })
  }
  break
case 'smeme2': {
  try{
	        let respond = `Kirim.reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) return m.reply(respond)
            if (!text) return m.reply(respond)
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await client.downloadAndSaveMediaMessage(quoted)
	        let { TelegraPh } = require('../lib/uploader')
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
	        let FaTiH = await client.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        fs.unlinkSync(dwnld)
  } catch (e){
    m.reply(util.format(e))
  }
            }
	       break
case 'sticksearch':
case 'stickersearch':{
if (!text) return m.reply(`Mana Querynya!!!`)
async function stickersearch(query){
    return new Promise((resolve, reject) => {
        axios.get(`https://getstickerpack.com/stickers?query=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const source = [];
                const link = [];
                $('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
                    source.push($(b).attr('href'))
                })
                axios.get(source[Math.floor(Math.random() * source.length)])
                    .then(({
                        data
                    }) => {
                        const $$ = cheerio.load(data)
                        $$('#stickerPack > div > div.row > div > img').each(function(c, d) {
                            link.push($$(d).attr('src').replace(/&d=200x200/g,''))
                        })
                        result = {
                            status: 200,
                            author: author,
                            title: $$('#intro > div > div > h1').text(),
                            sticker_url: link
                        }
                        resolve(result)
                    })
            }).catch(reject)
    })
}
await stickersearch(text).then(p => {
for (let woi of p.sticker_url)
 m.reply(mess.wait)
 client.sendImageAsSticker(m.sender, woi, m, { packname, author });
})
}
break
        default: 
		if (budy.startsWith('=>')) {
    if (!isCreator) return m.reply(mess.botOwner); 
    try {
    const result = await eval(`(async () => { return ${budy.slice(3)} })()`);
    const formattedResult = JSON.stringify(result, null, 2);
    return m.reply(formattedResult);
    } catch (error) {
    return m.reply(util.format(error));
    }
    }
 
  if (budy.startsWith('>')) {
  if (!isCreator) return m.reply(mess.botOwner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(util.format(err))}}

if (budy.startsWith('$')) {
  if (!isCreator) return m.reply(mess.botOwner)
  const command = budy.slice(1).trim()
  if (!command) {
    return m.reply('Undepined:v')
  }
  const { exec } = require('child_process')
  exec(command, (err, stdout, stderr) => {
    if (err) {
      return m.reply(err.message)
    }
    const output = `${stdout}${stderr}`
    if (output) {
      return m.reply(output)
    }
  })
}
      }
  } catch (err) {
    m.reply(err.message);
	console.log(err)
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
