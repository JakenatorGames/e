const db = require('quick.db')
const { RichEmbed } = require('discord.js')

module.exports = {
  config: {
    
    name: "hbinfo",
    aliases: ["hbinfo", "hbi"]
    
    
  },
  run: async(bot, msg, args) => {
    
    
    
    let dev = await db.fetch(`dev_${msg.author.id}`)
    
    if (msg.author.id !== dev) return msg.channel.send(`:x: You are not a developer.`)
    
    
    let id2 = args.shift();
    
    let id = await db.fetch(`blid_${id2}`)
    
    let m = await db.fetch(`hbreason_${id2}`)
    
    let m2 = new RichEmbed()
    .setTitle("Hackban Information")
    .addField("ID", id, true)
    .addField('Reason', m, true)
    .setColor('BLUE')
    
    msg.channel.send(m2)
  }






}