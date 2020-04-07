const { RichEmbed } = require('discord.js')

module.exports = {
  config: {
    name: "Help-8",
    description: "Shows ticket cmds",
    usage: "*help-5",
    aliases: ["help-8", "Help-8", "helpprofile"]
  
},
 run: async (bot, msg, args) => {
      const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
     let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your guild is blacklisted.")
    
    
   
   
   
   let m = new RichEmbed()
   .setThumbnail(bot.user.avatarURL)
   .setTitle("Profile/RP Commands")
   .setDescription('`rpname, setbio, profile, info`')
   .setFooter("Snoop's Profile System", bot.user.avatarURL)
   
   
   let d = new RichEmbed()
   .setTitle("DM")
   .setDescription("I sent a list of command's in DM's.")
   msg.channel.send(d)
   msg.author.send(m)
 }}