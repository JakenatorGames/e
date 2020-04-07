

  const shorten = require('isgd');

const { RichEmbed } = require('discord.js')
module.exports = {

    config: {

        name: "shorten",

        description: "Support request",

        usage: "*support E.g. bugged command",

        accessableby: "everyone",

        aliases: ["Shorten", "short", "surl"]

    },
  run: async(bot, message, args) => {

  if(message.author.id === process.env.id){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }

  if(!args[0]) return message.reply("You have to give a URL to shorten!");

    

    if(!args[1]){

    shorten.shorten(args[0]), function(res) {

    if(res.startsWith('Error:')) return message.channel.send("**Please enter a valid <URL>**");

       message.channel.send(`**${res}**`);

    }

    

} else {

    shorten.custom(args[0], args[1], function(res) {

      if(res.startsWith('Error:')) message.channel.send("**Please enter a valid <URL>**");

       message.channel.send(`**${res}**`);

    

    })

    

    

    }
  
  }}