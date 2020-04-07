const Discord = require('discord.js')

module.exports = {

    config: {

        name: "rules",

        description: "Command List",

        usage: "*Help",

        accessableby: "everyone",


    },
  run: async(client, message, args) => {
    
    

    
    let dm = new Discord.RichEmbed()
.setTitle("Rules")
.addField("", `One of the worst errors to come if you ever see this error contact the owners Immediately!`)
    
.addField("[ERROR 233]", `Common error it means that you dont have any text input`)
    
.addField("[ERROR 464]", `Another common error it is just an error that sometimes happen it is the same thing as [ERROR 233]`)
    
.addField("[Normal Error]", `You will never see this error because this error happens when snoop is messed up`)
    
    
.setDescription("Thanks for reading the errors we will be adding more of why these errors happen we will add more errors that do accure to!")
    message.channel.send(dm)
  }};