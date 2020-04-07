const { RichEmbed } = require('discord.js')
module.exports = {

    config: {

        name: "Help Economy",

        description: "NSFW Commands",

        usage: "*Help-6",

        accessableby: "everyone",

        aliases: ["help-7", "Help-7", "Helpeco"]

    },
  run: async(client, msg, args) => {
       const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
     let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your guild is blacklisted.")
    
    
    
    
    
    let d = new RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setTitle("Economy Commands")
    .setDescription("`balance, daily,  rob, work, store, buy, monthly`")
    
    .setColor('RANDOM')
    
    .setFooter('Snoop`s Economy', client.user.avatarURL)
    
    
    msg.author.send(d)
    
    
    let no = new RichEmbed()
    .setTitle("DM")
    .setDescription("I sent a list of command's in Direct Messages.")
    .setColor('RANDOM')
    
    
    msg.channel.send(no)
      }}