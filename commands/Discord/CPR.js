
const { RichEmbed } = require('discord.js')






module.exports = {
    config: {
        name: "cpr-2",
        description: "Shows CPR basics-2.",
        usage: "^cpr-2",
        accessableby: "Everyone",
        aliases: ["cr2", "cpr2", "c2"]
    },

    run: async(bot, msg, args) => {



let cpr2 = new RichEmbed()

.setTitle("CPR Lesson 2(Compressions + Mouth to Mouth")
.setDescription("Chest compressions are very simple, when performing CPR make sure to do a set of 30;2. 30 Compressions, 2 mouth to mouth.")
.addField("Picture", "[Link](https://cprcmd.files.wordpress.com/2011/04/step-by-step.png)")

.setColor("#6F07EB")
.setFooter("Next lesson: ^cpr-3")
msg.author.send(cpr2)
msg.channel.send(":mailbox: DM's")





    }
}