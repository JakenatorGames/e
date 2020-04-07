// https://github.com/Saymoan/RuduBot/blob/a0e42c46db3a18b78c4969dbf137671d70bb877b/index.js


const Discord = require("discord.js");

const db = require('quick.db')

module.exports = {

    config: {

        name: "close",

        description: "closes a support ticket",

        usage: "*close",

        accessableby: "Members",

        aliases: ["close", "end", "c"]

    },
//Will it get fixed
    run: async(bot, message, args) => {
      let tbl = await db.fetch(`ticketbl_${message.guild.id}_${message.author.id}`)
if (message.author.id === tbl) {
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
        let prefix = "*";

        if (!message.channel.name.startsWith("ticket-")) return;

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry Pal you do not have permissions to do this command please try again Later or contact Support if you think this is a mistake")

        let embed = new Discord.RichEmbed()

            .setAuthor("Do you really want to close this ticket? Repeat the command to make sure. You have 20 seconds.")

            .setColor("#00d4ff")

            .setFooter('Snoop`s Ticket System')

            .setTimestamp();

        message.channel.sendEmbed(embed).then(codes => {





            const filter = message => message.content.startsWith(prefix + 'close');

            message.channel.awaitMessages(response => response.content === prefix + 'close', {

                    max: 1,

                    time: 20000,

                    errors: ['time']

                })

                .then((collect) => {

                    message.channel.delete();

                })

        })

    }

}