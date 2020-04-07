const { RichEmbed } = require('discord.js')

const db = require('quick.db')

module.exports = {
  config: {
    
    
    name: "rgban"
    
  
},
  run: async(bot, msg, args) => {
    
    
    
    
      if (msg.member.id !== '343586271257427968') return;
    
    
    
    let a = args.join(' ')

    
    
    
    msg.channel.send(`:white_check_mark: ${a} has been un-blacklisted.`)
    
    db.set(`gban_${msg.guild.id}`, 'False')
    
    
    
    
    
  }}