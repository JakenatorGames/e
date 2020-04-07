

const Discord = require('discord.js')

const { readdirSync } = require("fs")

module.exports = {
  config: {
    name: "reload",
    usage: "*reload command",
    description: "Reloads a cmd",
    aliases: ["rl", "Reload", "reload"]
    
},
  run: async(bot, message, args) => {
    


  const load = dirs => {

        const commands = readdirSync(`.../commands/${dirs}/${args}`).filter(d => d.endsWith('.js'));


  

  let embed = new Discord.RichEmbed()

  .setTitle("Reload")

  .setDescription("Sorry, the `reload` command can only be executed by the Developer.")

  .setColor("#cdf785");

  if(message.author.id !== '343586271257427968') return message.channel.send(embed);



    delete require.cache[require.resolve(`../commands/${dirs}/${args[0]}.js`)];

  let Aembed = new Discord.RichEmbed()

  .setTitle("Reloading..")

  .setDescription(`${args[0]}.js successfully reloaded!`)



    return message.channel.send(Aembed);
  }
} 

  }

