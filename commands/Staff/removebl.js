const db = require('quick.db')
const ms = require('ms')
const Discord = require('discord.js')

module.exports = {

    config: {

        name: "removebl",

        description: "works",

        usage: "*rbadge staff @user",

        accessableby: "Developers",

        aliases: ["rbl","Rblacklist","removebl", "blremove", "BLR", "rBl"]

    },
  
  run: async(client, message, args) => {
    let a = await db.fetch(`dev_${message.author.id}`)
          if (message.member.id !== a) return (":x: Nope.");
    

    
   let user = message.mentions.members.first()
   let r = args.join(' ').slice(22)
   
   let m = new Discord.RichEmbed()
.setTitle("Un-Blacklisted")
   .addField("User", user, true)
   .addField("Reason", r, true)
   
   
   message.channel.send(m)
    db.set(`blid_${user.id}`, 'False')
    db.set(`reason_${user.id}`, 'N/A')
    user.send(m)
    
  }}