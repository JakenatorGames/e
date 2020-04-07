let db = require('quick.db')

module.exports = {
  config: {
    
    
    
    
    
    
  
},
  run: async(bot, msg, args) => {
    
    if (!msg.member.hasPermission('ADMINISTRATOR')) return;
    
    let ran = await db.fetch(`rank_${msg.guild.id}.roblox`)
    
    
    
    let arga = args.join(' ')
    
    
    
    db.set(`rank_${msg.guild.id}.roblox`, arga)
    
    
  }}