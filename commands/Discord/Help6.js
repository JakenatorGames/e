const { RichEmbed } = require('discord.js')
module.exports = {

    config: {

        name: "Help NSFW",

        description: "NSFW Commands",

        usage: "*Help-6",

        accessableby: "everyone",

        aliases: ["help-6", "Help-6", "Helpnsfw"]

    },
  run: async(client, msg, args) => {
        const db = require('quick.db')
   let bl = await db.fetch(`blid_${msg.author.id}`)
    if(msg.author.id === bl){
        return msg.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
        let n = await db.fetch(`gban_${msg.guild.id}`)
    if (msg.guild.id === n) return msg.channel.send("Error, your guild is blacklisted.")
    
    
    let m = new RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setTitle(":underage: NSFW Commands")
    .setDescription("`ass, anal, porn, spank`")
    .setColor('RANDOM')
    msg.delete()
    
    msg.author.send(m)
    
    let k = new RichEmbed()
    .setTitle(":underage: DM")
    .setDescription("I sent a list of commands in DIrect Message's, Advisement: 18+ commands so use at your own risk.")
    .setColor('RED')
    msg.channel.send(k)
    
    
    
    
    
  }}