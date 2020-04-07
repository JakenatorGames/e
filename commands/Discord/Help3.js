const { RichEmbed } = require('discord.js')
module.exports = {

    config: {

        name: "Help Roblox",

        description: "Admin Command List",

        usage: "*Help-3",

        accessableby: "everyone",

        aliases: ["help-3", "Help-3", "Helproblox"]

    },
  
  run: async(client, msg, args) => {
    
       const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
         let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your guild is blacklisted.")
    
    

    let mm = new RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setTitle("Roblox Commands")
    .setDescription("`search`")
    
    .setColor("RED")
    
    msg.delete()
    
    msg.author.send(mm)
    
    
    let m1 = new RichEmbed()
    .setTitle("DM")
    
    .setDescription(":mailbox: I sent a list of commands in direct message's.")
    
    .setColor("BLACK")
    
    msg.channel.send(m1)
    
    
    
    
    
  }}