const Discord = require('discord.js')



module.exports = {
  config: {
    name: "random"
    
    
  },
  
  
  run: async(bot, msg) => {
     const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
      let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your guild is blacklisted.")
    if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.channel.send(':x: You require `MANAGE_MESSAGES`')
  let m =  msg.guild.members.random()
    
    
    
    msg.channel.send(`${m}`)
    
    
    
    
  }
  
  
}
