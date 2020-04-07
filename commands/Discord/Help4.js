const { RichEmbed } = require('discord.js')

module.exports = {
  config: {
    name: "Help-4",
    description: "Shows ticket cmds",
    usage: "*help-4",
    aliases: ["help-4", "Help-4", "helpticket"]
  
},
 run: async (bot, msg, args) => {
       
   
      const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
   
        let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your guild is blacklisted.")
    
    
   let m1 = new RichEmbed()
   .setThumbnail(bot.user.avatarURL)
   .setTitle("Ticket Commands")
   .setDescription("`new`")
   .setColor('GREEN')
   .setFooter("Ticket Commands", bot.user.avatarURL)
   
   
   
   msg.author.send(m1)
   
   
   let e2 = new RichEmbed()
   .setTitle("DM")
   .setDescription(":mailbox: I sent a list of commands in Direct Message's.")
   .setColor("GREEN")
   msg.delete()
   msg.channel.send(e2)
   
  
  
}}