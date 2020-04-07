const { RichEmbed } = require('discord.js')
let g = '343586271257427968'
module.exports = {

    config: {

        name: "gids",

        description: "shows server ids",

        usage: "*gids",

        accessableby: "Developers",

        aliases: ["guildids", "Gids", "gid's"]

    },
  run: async(bot, message, args) => {
    if (!message.member.id === g) return;
     bot.guilds.forEach(async ga => {

    let ids = ga.id

    let em = new RichEmbed()

    .setTitle("Snoop's Server IDs")

    .setDescription(`All my server ids are ${ids}`)

    .setAuthor("Snoop")

    .setColor("RANDOM")

    .setThumbnail(bot.user.avatarURL)

    .setTimestamp()

    message.channel.send({embed: em})

  })

}


    
  };