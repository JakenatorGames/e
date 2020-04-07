const { RichEmbed } = require('discord.js')

module.exports = {
  config: {
    name: "Help-9",
    description: "Shows ticket cmds",
    usage: "*help-5",
    aliases: ["help-9", "Help-9", "helprep"]
  
},
 run: async (bot, msg, args) => {
     const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
        let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your guild is blacklisted.")
    
    
   
   
   
   let mm = new RichEmbed()
   .setThumbnail(bot.user.avatarURL)
   .setTitle("Reputation Commands")
   .setDescription("+rep, -rep, rep")
   .setColor('GREY')
   
   msg.author.send(mm)
   
   
   let gd = new RichEmbed()
   .setTitle("DM")
   .setDescription("I sent a list  of command's in Direct Message's.")
   msg.channel.send(gd)
 }}