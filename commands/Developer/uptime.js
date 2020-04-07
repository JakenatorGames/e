const { RichEmbed } = require('discord.js')

module.exports = {
  config: {
    name: "uptime",
    usage: "*uptime",
    description: "Shows bots uptime",
    aliases: ["Uptime", "uptime", "ut"]
  

},
  run: async(client, message, args) => {
    if (!message.author.id === '343586271257427968') return message.channel.send(":no_entry_sign: Nope.")
   var date = new Date(client.uptime);

    var uptime = '';

    

    const d = uptime += date.getUTCDate() - 1 + 'd, ';

    const h = uptime += date.getUTCHours() + 'h, ';

    const m = uptime += date.getUTCMinutes() + 'm, ';

    const s = uptime += date.getUTCSeconds() + 's';



    

    const embed2 = new RichEmbed()

       .setTitle("🕐 Uptime")

       .setThumbnail(client.user.avatarURL)

    

       .addField("Days", `${d}`)
    
    .addField("Hours", `${h}`)
    .addField("Minutes", `${m}`)
    .addField("Seconds", `${s}`)
    .setColor('RANDOM')
    

    

    

    message.channel.send(embed2)
    
    
  }};