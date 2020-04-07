let db = require('quick.db')

module.exports = {
  config: {
    
    
    
    name: "setgroup"
    
    
  
},
  run: async(bot, msg, args) => {
    if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(":x: You need to be an admin.")
    let m = args.join(' ')
    
    
    
    
    
    
    
    msg.channel.send(`Success! Added your groupID to the database.`)
    
    db.set(`groupId_${msg.guild.id}`, m)
    
    
    
    
  }}