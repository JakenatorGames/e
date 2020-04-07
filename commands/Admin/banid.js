module.exports = {
  config: {
    
    name: "banid",
    aliases: ["idban", "Banid", "bi"]
    
  
},
  run: async(bot, msg, args) => {
    
    
    
    
    if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.channel.send("Error, you can't ban people.")
    
    
    
    let bUser = args.shift()

    if (!bUser) return msg.channel.send("Please supply an id.")
    
    let reason = args.join(' ')
    
    
    
    
    msg.channel.send(`Success! Banned the user with the id of ${bUser} for ${reason}`)
    
    
    msg.guild.ban(bUser)
    
    
  }
  }