const Discord = require('discord.js')
module.exports = {

    config: {
//we do not need getfile
        name: "Help Admin",

        description: "Admin Command List",

        usage: "*Help admin",

        accessableby: "everyone",

        aliases: ["help-1", "admincmds", "Help-1"]

    },
  
  run: async(client, message, args) => {
        const db = require('quick.db')
   let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
         let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
    

    let a = new Discord.RichEmbed()
    .setTitle("Admin Commands")
    .setDescription("`Ban, Tempban, Kick, Prune, Warn, Warns, Support, Addrole, Tban, partner, getid, ticketbl, Announce, random`")
    
    message.author.send(a)
    
    let m = new Discord.RichEmbed()
    .setTitle("DM")
    .setDescription(":mailbox: I have sent you a list of commands in DM's.")
    .setColor('RANDOM')
    message.channel.send(m)
  }};