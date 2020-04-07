const Discord = require('discord.js')




module.exports = async(bot, msg) => {
  let m = new Discord.RichEmbed()
  .setTitle("New Server")
  .addField("Name", `${msg.guild}`)
  .addField("ID", `${msg.guild.id}`)
  .addField("Owner", `${msg.guild.owner}`)
  .addField("Owner ID", `${msg.guild.owner.id}`)
  
  
  bot.channels.get('654328520549466142').send(m)
}