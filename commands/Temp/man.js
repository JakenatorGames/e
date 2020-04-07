const Discord = require('discord.js')

module.exports = {

    config: {

        name: "man",

        description: "Command List",

        usage: "*Help",

        accessableby: "everyone",


    },
  run: async(client, message, args) => {
    
    

    
    let dm = new Discord.RichEmbed()
.setTitle("Management")
.setDescription("@Management Team Only give @Helper to people that stand out and earn it, if they don't do anything and you give it to them, they will be removed and you will be written up. Thanks!")
    message.channel.send(dm)
  }};