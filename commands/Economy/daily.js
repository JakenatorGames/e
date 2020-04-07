const Discord = require("discord.js");

const db = require("quick.db");

const ms = require("parse-ms");

module.exports = {
  config: {
    name: "daily",

    description: "Every 24 Hours you can claim free money!",

    usage: "^daily",

    accessableby: "Members",

    aliases: ["daily"]
  },

  run: async (bot, message, args) => {
    let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
         let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    


    let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.

    let amount = Math.floor((Math.random() * 10000) + 250);

    // random amount: Math.floor(Math.random() * 1000) + 1;





    let daily = await db.fetch(`daily_${message.author.id}`);




    // random amount: Math.floor(Math.random() * 1000) + 1;




    if (daily !== null && timeout - (Date.now() - daily) > 0) {

        let time = ms(timeout - (Date.now() - daily));



        message.channel.send(`You already collected your daily reward, you can come back and collect it in **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)

    } else {

    let embed = new Discord.RichEmbed()

    .setAuthor(`Daily`, message.author.displayAvatarURL)

    .setColor("GREEN")

    .setDescription(`**Daily Reward**`)

    .addField(`Collected`, amount)



    message.channel.send(embed)

    db.add(`money_${message.author.id}`, amount)

    db.set(`daily_${message.author.id}`, Date.now())

        

    }



}
}