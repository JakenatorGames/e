let db = require('quick.db')

module.exports = {
  config: {
    
    
    
    name: "setcookie"
    
    
  
},
  
  run: async(bot, msg, args) => {
  msg.delete()
  if (!msg.member.hasPermission('ADMINISTRATOR')) return;
    
    
    let m = args.join(' ')
    msg.channel.send("Success | Configured roblox cookie login. Do not share it as it may risk account hacked.")
    db.set(`cookie_${msg.guild.id}.env`, m)
}}