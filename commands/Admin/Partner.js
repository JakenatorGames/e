

const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {

    config: {

        name: "Partner",

        description: "Partner requirements",

        usage: "*partner",

        accessableby: "Staff",

        aliases: ["Partner", "partner"]

    },
   run: async(bot, message, args) => {
let mdd = await db.fetch(`blid_${message.author.id}`)
       if(message.author.id === mdd) {
        return message.channel.send(":x: Your server is on the blacklist. So you can not request.")
         
    }

           let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
    
     let m = new Discord.RichEmbed()
     .setThumbnail(bot.user.avatarURL)
     
    
     
     .setTitle("Partnership Requirements")
     .setDescription("These following requirements are needed to be considered for a partnership. And your choice(Ping @here or @everyone) for us in your server.")
     .addField("Non-mention", '___')
     .addField("50+", 'For a non-mention partner you must have at least 50 members in your server')
     .addField("Channel", 'You must have a channel for partners to be announced in.')
     .addField("Staff", 'You must have responsible staff, and a well organized server.')
     .addField("Representative", 'A representative of your server must join our server.(Owner of the server must inform a partnership staff member.)')
     .addField("Mention", '___')
     .addField("150+", 'Your member count must be at least 150 to be considered for a mention.')
     .addField("Channel", 'You must have a partners channel for us to be announced in.')
     .addField("Organization", 'You must have a well organized server and at least 4 responsible moderators, and a responsible staff.')
     .addField("Representative", 'A member from your server must join ours and be the official representative of your server.(DM a partnership staff member.)')
     .addField("Both Types", 'You are required to give a detailed description of your server + link to join.(Must be a permanet invite.)')
     .setFooter("Use *partnership to request.")
     
     message.channel.send(m)
     
     
     
     
   }}