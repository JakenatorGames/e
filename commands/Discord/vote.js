const { RichEmbed } = require('discord.js')



module.exports = {
  config: {
    
    
    name: "vote"
    
    
  
},
  run: async(bot, msg) => {
  
    let m = new RichEmbed()
    
    .setThumbnail(bot.user.avatarURL)
    
    .setTitle("Upvote")
    .setDescription(`Want to vote for snoop and show your support? Well now you can! **[Click](https://top.gg/bot/623348445104832522/vote)** here to vote!`)
    
    .setColor('RED')
 
    
    let d = new RichEmbed()
    .setTitle("DM")
    .setDescription('Check your direct messages.')
    msg.channel.send(d)
    
    msg.author.send(m)
}}