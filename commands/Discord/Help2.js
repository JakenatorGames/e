const Discord = require('discord.js')

module.exports = {

    config: {

        name: "Help2",

        description: "Fun Command List",

        usage: "*Help-2",

        accessableby: "everyone",

        aliases: ["help-2", "Help-2", "helpfun"]

    },
  
  run: async(client, message, args) => {
    
    
    
    
    
    
    
      const db = require('quick.db')
   let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
    let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
    
    
    
    
    
    
    let fc = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setTitle("Fun Commmands")
    .setDescription("`rps, gay, quiz, smoke, slap, 8ball, reverse`")
    .setColor('RANDOM')
    .setFooter('Snoop`s Fun Commands', client.user.avatarURL)
    message.author.send(fc)
    
    let gg = new Discord.RichEmbed()
    .setTitle("DM")
    .setDescription(":mailbox: I sent a list of commands in Direct Messages!")
    .setColor('RANDOM')
    message.channel.send(gg)
    
  }};