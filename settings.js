const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://instagram.com/kikibot_',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = true //status online (online)

// Other
global.botname = "Kiki Bot" //namabot kalian
global.ownername= "YT KIKI GABUT" //nama kalian
global.myweb ="https://instagram.com/kikibot_" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/UCjjuhOD-Mt2XrKFptMVDysQ" //bebas asal jan hapus
global.github = "http://github.com/Kikii-Kawaiii" //bebas
global.email = "salsabilaa@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "6283808840711" // nomor wa kalian
global.ownernomerr = "+6283808840711" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6283808840711","6283808840711","6283808840711"] //ganti agar fitur owner bisa di gunakan
global.packname = 'punya kiki🗿' //sticker wm ubah
global.author = '083808840711' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: 'DONE JANGA LUPA SUBSCRIBE YT KIKI GABUT',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin dek',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin dek',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner dek',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group dek',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private dek',
	bot: 'Fitur Khusus Pengguna Nomor Bot dek',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif dek !',
    wait: '⏳ Sedang Di Proses dek',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner dek',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
