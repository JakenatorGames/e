const { RichEmbed } = require('discord.js')


module.exports = {
    config: {
        name: "cpr-1",
        description: "Shows CPR basics-1.",
        usage: "^cpr-1",
        accessableby: "Everyone",
        aliases: ["cr1", "cpr1", "c1"]
    },

    run: async(bot, msg, args) => {



let cpr = new RichEmbed()
.setTitle("Welcome to CPR basics!")
.setDescription("Here, we will be teaching some basic CPR steps so you could maybe one day save someones life.")
.addField("Compressions", 'We will be going over chest compressions + mouth to mouth.')
.addField("Remember", 'Only do this when needed, as it may severely ingure someone if not in need of medical attention.')
.addField("Pre steps(Including making sure the scene is safe.)", '1. If you have people around you, take charge of the scene. 2. If some people are around, have one person call 911, and if there is another have them look for an Automated External Defibrillator(AED). 3. If another person knows CPR, take turns every 5 sets and wait for Medical First Responders.')

.addField("Check the scene", 'Always make sure the scene is safe. If you are not safe chances of you getting injured are higher if you try to safe the persons life when there is danger.')
.addField("Let's Begin", 'Please use ^cpr-2 to continue.')
.setColor('#6F07EB')

msg.channel.send(":mailbox: DM's")


msg.author.send(cpr)


    }};