const { RichEmbed } = require('discord.js')
const ms = require('parse-ms')
const db = require('quick.db')
module.exports = {
  
  config: {
    
    name: "suggest"
    
    
    
    
    
    
  
},
  run: async(bot, message, args) => {
      let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
        let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
    
      let sug = args.join(' ')
    let timeout = 300000 // 24 hours in milliseconds, change if you'd like.


    // random amount: Math.floor(Math.random() * 1000) + 1;





    let daily = await db.fetch(`suga_${message.author.id}`);




    // random amount: Math.floor(Math.random() * 1000) + 1;




    
    
  
    let e = new RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle("Suggestion")
    .addField("**Author:**", `${message.author.tag}`)
    .addField("**Suggested:**", sug, true)
    .addField("**In server:**", `${message.guild.name}(${message.guild.id})`)
    .addField("**On:**", `${message.createdAt}`)
    .setColor('RED')
    .setFooter("Snoop's Suggestion's", bot.user.avatarURL)
    .setTimestamp()
    const pollTopic = await bot.channels.get('659832693097234432').sendEmbed(e);

    pollTopic.react(`✅`);

    pollTopic.react(`⛔`);
  
  
   
  }}