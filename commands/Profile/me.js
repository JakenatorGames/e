const { RichEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
  config: {
    name: "me"
  
},
  run: async(bot, msg, args) => {
    
    //DB SECTION
    let d = await db.fetch(`warncount_${msg.author.id}`)
    
    if (d === null) d = '0'
    
    
    let m = await db.fetch(`rep_${msg.author.id}`)
    
    if (m === null) m = '0'
    
        
    let dd = await db.fetch(`userInfo_${msg.author.id}.rpn`)
    
   
    

    
    
  
    // let { RichEmbed } = require('discord.js')
    //I have been longer than u lol Ik I have been programming in 2017 back then I was not so good as now. Yes back then I still do a little. I am a pro at lua
    //you did Lua right? Yes. How about we show rules and code of conduct and are chats that have been going on 
    if (dd === null) dd = 'No Name Set'
      
    let money = await db.fetch(`money_${msg.guild.id}_${msg.author.id}`)
    
      
    
    let pp = await db.fetch(`penthouse_${msg.guild.id}_${msg.author.id}`)
    
   
    

    
    
  
    // let { RichEmbed } = require('discord.js')
    //I have been longer than u lol Ik I have been programming in 2017 back then I was not so good as now. Yes back then I still do a little. I am a pro at lua
    //you did Lua right? Yes. How about we show rules and code of conduct and are chats that have been going on 
    if (pp === null) pp = 'Pentless'
      
    let penthouse = await db.fetch(`penthouse_{msg.guild.id}_${msg.author.id}`)
    
        //you did Lua right? Yes. How about we show rules and code of conduct and are chats that have been going on 
    
    
    
    
    //maybe
    
    
    
    
    //Embed Section
    let me = new RichEmbed()
    .setThumbnail(msg.author.avatarURL)
    .setTitle(`${msg.author} Stats`)
    .addField("**Likes to be called:**", `${dd}`)
    .addField("**Balance:**", `${money}`)
    .addField("**Warn Count:**", `${d}`)
    .addField("**Reputation:**", `${m}`)
    .addField("**Penthouses:**", `${pp}`)

    
    .setColor('BLUE')
    .setFooter(`Your information`, bot.user.avatarURL)
    
    
    msg.channel.send(me)
    
  }
  
  
  
}