const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {

    config: {

        name: "Ban",

        description: "Ban a player.",

        usage: "*ban @Death#2184 Example",

        accessableby: "Staff",

        aliases: ["punish", "b", "Ban", "bn", "ban"]

    },
  run: async(client, message, args) => {
     let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
        let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
let logsChannel = message.guild.channels.find(`name`, "logs");

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  let bReason = args.join(" ").slice(22);



  let permsEmbed = new Discord.RichEmbed()

  .setColor('RED')

  .addField(":x: You don't have permission for this command.", "You must have the **BAN_MEMBERS** permission to use this command.")

  .setFooter('Snoop Logs');



  let noUserEmbed = new Discord.RichEmbed()

  .setColor('RED')

  .addField(":x: You didn't specify a user.", "Please specify the user you want to ban.")

  .setFooter('Snoop logs');



  let badUserEmbed = new Discord.RichEmbed()

  .setColor('RED')

  .addField(":x: You can't ban this user.", "This user's permissions are too high to be banned.")

  .setFooter('Snoop logs');



  let noReasonEmbed = new Discord.RichEmbed()

  .setColor('RED')

  .addField(":x: You didn't specify a reason.", "Please specify the reason you want to ban a user.")

  .setFooter('Snoop Logs');



  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(permsEmbed);

  if(!bUser) return message.channel.send(noUserEmbed);

  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send(badUserEmbed);

  if(!bReason) return message.channel.send(noReasonEmbed);



  let banEmbed = new Discord.RichEmbed()

  .setColor('GREEN')

  .addField(":white_check_mark: Success!", `${bUser} has been banned for **${bReason}**.`)

  .setFooter('Snoop Logs');



  let logsEmbed = new Discord.RichEmbed()

  .setColor('RED')

  .addField(":bell: Alert", `${message.author.username} has banned a member.`)

  .addField("Username", bUser, true)

  .addField("User ID", bUser.id, true)

  .addField("Reason", bReason, true)

  .addField("Time", message.createdAt, true)

  .setFooter('Snoop Logs');



  message.guild.member(bUser).ban(bReason);



  message.channel.send(banEmbed);

  logsChannel.send(logsEmbed);



  return;

}
  };