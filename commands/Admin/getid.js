

const Discord = require('discord.js')

module.exports = {

    config: {

        name: "getid",

        description: "Add a role",

        usage: "*addrole name",

        accessableby: "Staff",

        aliases: ["Getid", "id", "gi"]

    },
   run: async(bot, message, args) => {
    const db = require('quick.db')
   let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
      let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
    
     if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
  let member = message.mentions.members.first() 
     
     
     
     let m = new Discord.RichEmbed()
     .setTitle("Player ID")
     .addField("ID", `${member.id}`)
     .addField("Name", `${member}`)
     
     message.channel.send(m)
   }}