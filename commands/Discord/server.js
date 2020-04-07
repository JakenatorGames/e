
const { RichEmbed } = require("discord.js");


const db = require('quick.db')
module.exports = {

    config: {

        name: "inv",

        description: "Join our support server",

        usage: "*inv",

        accessableby: "Member",

        aliases: ["sinv", "ss"]

    },

    run: async(bot, message, args) => {

        let embed = new RichEmbed()

            .setTitle("** :arrow_right: Click Here to join our support server.**")

            .setAuthor(`Invite`, message.guild.iconURL)

            .setColor("#ff0000")

            .setURL("https://discord.gg/QKxRgu5")

            .setFooter('Join our support server')

            .setTimestamp()

        message.channel.sendEmbed(embed);
    
    
  let bl = await db.fetch(`tblid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
        if(message.guild.id === process.env.gid) {
        return message.channel.send('**You guild id is on the blacklist, use *blappeal if wanting it to be removed.**')
    }

    
    


    }

}