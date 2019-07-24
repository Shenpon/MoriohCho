const Discord = require('discord.js')
const bot = new Discord.Client()

// Constante embed bienvenue 
const embed = new Discord.RichEmbed()
  .setTitle("Bienvenue sur le Serveur !")
  .setAuthor("Morioh-Cho !", "https://cdn.discordapp.com/attachments/560221934231748612/603649385817047050/Full_color_owl.webp")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("Bot fais entièrement main par lele#2511, réservé au Discord Morioh-Cho.")
  .setFooter("👀 Contact @ lele#2511", "https://cdn.discordapp.com/attachments/560221934231748612/567116560825581578/link.png")
  .setImage("https://cdn.discordapp.com/attachments/560221934231748612/603649385817047050/Full_color_owl.webp")
  .setThumbnail("https://cdn.discordapp.com/attachments/560221934231748612/603649385817047050/Full_color_owl.webp")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("📬 Guide du nouvel utilisateur :",
    "Pour être un membre reconnu du Discord Morioh-Cho, il faut vous vérifier dans le salon #verification , en ayant lu les règles 💼")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Pour avoir des infos sur le bot, utiliser ?info", "Les commandes sont listées dans la catégorie #help-bot 💬.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("En cas de problème ♨ :", "En cas de panne du bot, n'hésitez pas à ping les admin, cela ne nous dérange pas ! 🔊", true);

// Test Ping-Pong

bot.on('message', function (message) {
    if (message.content === '!ping') {
        message.reply('Pong !')
    }
})

// Accueil Des Joueurs
bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send({embed})
    }).catch(console.error)
})

// Set le message d'humeur du bot

bot.on('ready', () => {
  console.log('Bot OP')
  bot.user.setStatus('Online')
  bot.user.setActivity('Surveiller Morioh-Cho !')
})

bot.login(process.env.TOKEN)
