
const Discord = require("discord.js");

const fs = require("fs");

module.exports = {
  config: {
    
    name: "setprefix",
    
    
    aliases: ["sp"]
    
    
    
  
},
  run: async(bot, message, args) => {


  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**ERROR |** No perms. :D!");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));



  prefixes[message.guild.id] = {

    prefixes: args[0]

  };



  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {

    if (err) console.log(err)

  });



  let sEmbed = new Discord.RichEmbed()

  .setColor("#01bab7")

  .setTitle("Prefix Change!")

  .setDescription(`New Prefix **${args[0]}**`);



  message.channel.send(sEmbed);



}
}