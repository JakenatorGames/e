const { RichEmbed } = require('discord.js')
module.exports = {

    config: {

        name: "Help Discord",

        description: "Discord Command List",

        usage: "*Help-5",

        accessableby: "everyone",

        aliases: ["help-5", "Help-5", "Helpdiscord"]

    },
  run: async(bot, msg, args) => {
       const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
      let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your guild is blacklisted.")
    
    
    let me = new RichEmbed()
    .setThumbnail(bot.user.avatarURL)
    .setTitle("Basic Commands")
    .setDescription("`help, help-1, help-2, help-3, help-4, help-5, verify, server, invite, afk, botinfo, vote, userinfo`")

    
    .setColor('BLACK')
    
    msg.author.send(me)
    msg.delete()
    
    let mm = new RichEmbed()
    .setTitle("DM")
    .setDescription(":mailbox: I sent a list of commands in Direct Messages.")
    .setColor('BLACK')
    msg.channel.send(mm)
    
    
    
    
  }}