const { RichEmbed } = require('discord.js')


const db = require('quick.db')


module.exports = {
  config: {
    
    name: "blinfo",
    aliases: ["bli"]
    
  
}, 
  
  run: async(bot, msg, args) => {
    
    
     let blp = await db.fetch(`blperms_${msg.author.id}`) 
if (msg.author.id !== blp) return;
   
    let arg = args.join(' ')
    
    
    let m = await db.fetch(`blid_${arg}`)
    
    let reason = await db.fetch(`reason_${arg}`)
    msg.channel.send(`Blacklisted? If ID = False, then they are not blacklisted. ID: ${m} | ${reason}`)
    
    
    arg.send("Your ID was blacklisted, and reviewed.")
    
  }
  
  
}