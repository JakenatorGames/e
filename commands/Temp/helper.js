const Discord = require('discord.js')

module.exports = {

    config: {

        name: "helper",

        description: "Command List",

        usage: "*Help",

        accessableby: "everyone",


    },
  run: async(client, message, args) => {
    
    

    
    let dm = new Discord.RichEmbed()
.setTitle("Helper")
.setDescription("Welcome, @Helper`s. Now that you have this role, you will be recieving the official helper badge and this channel gives you a direct contact to a staff member for help answering questions.")
    message.channel.send(dm)
  }};