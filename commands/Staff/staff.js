const { RichEmbed } = require('discord.js')




module.exports = {
  config: {
    name: "Staff",
    
    aliases: ["staff", "Staff", "stf"]
    
    
  
},
  
  run: async(bot, msg, message) => {
    
       const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
       
    let m = new RichEmbed()
    .setThumbnail(bot.user.avatarURL)
    .setTitle("Staff List")
    .addField("Owners", '<@343586271257427968> - <@478428561800429591>')
    .addField("Developers", '<@343586271257427968> - <@478428561800429591> - <@198146749137813504> - <@241632903258177536>')
    .addField("Head of Staff", '<@543930342654869526>')
    .addField("Management", '<@451321935154905089> - <@377065280179798016> - <@436283235366993921>')
    
  .addField("System Administrator", ' - <@263694962418384897>')
    .addField("Support Staff", 'N/A')
    .setFooter('Snoop Entertainment`s official staff', bot.user.avatarURL)
    msg.channel.send(m)
    
    
    
  
  }}