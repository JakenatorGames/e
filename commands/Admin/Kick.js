const Discord = require('discord.js')

 const db = require('quick.db')
module.exports = {

    config: {

        name: "Kick",

        description: "Kick a user.",

        usage: "*kick @Death#2184 Example",

        accessableby: "Staff",

        aliases: ["exile", "k", "kick"]

    },
  
  run: async(client, message, args) => {
    let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
    let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));



    if(!kUser) return message.channel.send("Can't find user!");



    let kReason = args.join(" ").slice(22);



    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No can do pal!");



    if(kUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be kicked!");







    let kickEmbed = new Discord.RichEmbed()



    .setDescription("~Kick~")
    
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);







    let kickChannel = message.guild.channels.find(`name`, "logs");








    if(!kickChannel) return message.channel.send("Can't find the logs channel.");


    message.guild.member(kUser).kick(kReason);



    kickChannel.send(kickEmbed);



}




    
  };