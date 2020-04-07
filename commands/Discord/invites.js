
const Discord = require("discord.js");



module.exports = {

    config: {

        name: "invites",

        description: "see how many invites you have",

        usage: "*invites",

        accessableby: "Member",

        aliases: ["invs"]

    },

    run: async(bot, message, args) => {
    const db = require('quick.db')
   let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
     let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
        message.guild.fetchInvites().then(invs => {

            let user = message.mentions.users.first() || message.author

            let personalInvites = invs.filter(i => i.inviter.id === user.id);

            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);

            message.channel.send(`**${user}, has :arrow_right: __${inviteCount}__ invites!**`);

        })

    }

};