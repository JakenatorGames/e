
const { RichEmbed } = require("discord.js");


const db = require('quick.db')
module.exports = {

    config: {

        name: "porn",

        description: "Shows anal",

        usage: "*porn",

        accessableby: "everyone",

    },
  run: async(client, message, args) => {
    
 let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }

  if(!message.channel.guild) return message.reply('this command is for guilds only!');



  var porn = [



    "https://cdn.boob.bot/Gifs/1806.gif",
    
    
    "https://cdn.boob.bot/Gifs/166A.gif",
    
    
    "https://cdn.boob.bot/Gifs/18C1.gif",
    
    
    "https://cdn.boob.bot/Gifs/171A.gif",
    
    
    "https://cdn.boob.bot/Gifs/17EA.gif",
    
    
    "https://cdn.boob.bot/Gifs/1689.gif",
    
    
    "https://cdn.boob.bot/Gifs/174C.gif",
    
    
    "https://cdn.boob.bot/Gifs/16B1.gif",
    
    
    "https://cdn.boob.bot/Gifs/1696.gif",
    
    
    "https://cdn.boob.bot/Gifs/189E.gif",
    
    
    "https://cdn.boob.bot/Gifs/1952.gif",
    
    
    "https://cdn.boob.bot/Gifs/1917.gif",
    
    
    "https://cdn.boob.bot/Gifs/18F3.gif",
    
    
    "https://cdn.boob.bot/Gifs/1627.gif",
    
    
    "https://cdn.boob.bot/Gifs/17FA.gif",
    
    
    "https://cdn.boob.bot/Gifs/1745.gif",
    
    
    "https://cdn.boob.bot/Gifs/164D.gif",
    
    
    "https://cdn.boob.bot/Gifs/17DF.gif",
    
    
    "https://cdn.boob.bot/Gifs/1729.gif",
    
    
    "https://cdn.boob.bot/Gifs/170F.gif",
    
    
    "https://cdn.boob.bot/Gifs/17EA.gif",
    
    
    "https://cdn.boob.bot/Gifs/173A.gif",
    
    
    "https://cdn.boob.bot/Gifs/1999.gif",
    
    
    "https://cdn.boob.bot/Gifs/166A.gif",
    
    
    "https://cdn.boob.bot/Gifs/1854.gif",
    
    
    "https://cdn.boob.bot/Gifs/1608.gif",
    
    
    "https://cdn.boob.bot/Gifs/15DC.gif",]





          console.log(message.channel.nsfw); // false



          var pus = new RichEmbed()



          .addField('NSFW not allowed here','Use NSFW commands in a NSFW marked channel (These Commands are allowed in NSFW channels. Please switch this channel to NSFW if you  wish.)')



          .setImage('https://images-ext-2.discordapp.net/external/hiWbEzhiEXfFaza5khoxg3mR3OWeugZwWo8vGxK8LzA/https/i.imgur.com/oe4iK5i.gif')



          if (message.channel.nsfw === false)    return message.channel.send(pus);



          var cat = new RichEmbed()



    .setImage(porn[Math.floor(Math.random() * porn.length)])



    message.channel.sendEmbed(cat);


    
    
  }};