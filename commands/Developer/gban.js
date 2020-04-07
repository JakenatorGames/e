const { RichEmbed } = require('discord.js')

const db = require('quick.db')

module.exports = {
  config: {
    
    
    name: "gban"
    
  
},
  run: async(bot, msg, args) => {
    
    
    
    
      if (msg.member.id !== '343586271257427968') return;
    
    
    
    let a = args.join(' ')
    
    if (a === '656950577586241549') return msg.channel.send(":x: Can not blacklist this server.")
    if (a === '653041028432920576') return msg.channel.send(":x: My support server can not be blacklisted.")
    msg.channel.send(`:white_check_mark: ${a} has been blacklisted by: Death#2184`)
    bot.channels.get('657995248366256148').send(`The server: ${a} | Has been blacklisted on ${msg.createdAt}`)
    db.set(`gban_${a}`, a)
    
    
    
  }}