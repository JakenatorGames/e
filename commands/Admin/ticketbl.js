const { RichEmbed } = require('discord.js')


const db = require('quick.db')


module.exports = {
  config: {
    
    
    name: "ticketbl",
    aliases: ["tbl"]
  
},
  run: async(bot, msg, args) => {
    
    if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(":x: You need the administrator permission to add people to your server ticket blacklist")
    let m = args.join(' ')
    
    
    
    msg.channel.send(`Success | Added the id: ${m} to the ticket blacklist.`)
    db.set(`ticketbl_${msg.guild.id}_${m}`)
    
    
    
  }
  
  
}