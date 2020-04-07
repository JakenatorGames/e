const { RichEmbed } = require('discord.js')

module.exports = {
  config: {
    name: "invite",

    description: "Invite the bot!",

    usage: "^invite",

    accessableby: "Members",

    aliases: ["invite", "botinv", "Invite", "Botinv", "inv"]
  },
  
  run: async(bot, msg) => {
       const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
     let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your guild is blacklisted.")
    
    
    let m = new RichEmbed()
    .setThumbnail(bot.user.avatarURL)
    .setTitle("Add me to a server")
    .addField("Invite", `**[Bot](https://discordapp.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot)**`)
    
    
.setColor('RANDOM')
    
    msg.author.send(m)
    
  }}

