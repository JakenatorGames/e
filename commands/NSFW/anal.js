
const { RichEmbed } = require("discord.js");

const db = require('quick.db')

module.exports = {

    config: {

        name: "anal",

        description: "Shows anal",

        usage: "*anal",

        accessableby: "Members",

        aliases: ["Anal", "anl"]

    },
  run: async(client, message, args) => {
    
 let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
        if(message.guild.id === process.env.gid) {
        return message.channel.send('**You guild id is on the blacklist, use *blappeal if wanting it to be removed.**')
    }


  if(!message.channel.guild) return message.reply('this command is for guilds only!');



  var anal = [



    "https://images-ext-1.discordapp.net/external/5YyAB8WpDUwRwCMgpEAlR9pK5afbrwRs0wmNclXAMzM/https/cdn.boob.bot/anal/8075.jpg?width=400&height=267",



    "https://images-ext-1.discordapp.net/external/qTvKtdbjovDM3iOqAoiuuN5H_lxWXCMMS0YJoy9_NGk/https/cdn.boob.bot/anal/16B7A.jpg?width=211&height=300",



    "https://cdn.boob.bot/anal/1680F.jpg",



    "https://cdn.boob.bot/anal/C3DC.jpg",



    "https://images-ext-1.discordapp.net/external/aXGzAru-AZWndr0LBfAv3_lFAB92ZVMoHxcoM04Jv2k/https/cdn.boob.bot/anal/168E1.jpg?width=400&height=266",



    "https://images-ext-2.discordapp.net/external/TucPiMNi02SFyQSWJPb0JLat4JIi72Jps7wVPEaVVKY/https/cdn.boob.bot/anal/216A6.jpg?width=200&height=301",



    "https://cdn.boob.bot/anal/1A572.jpg",



    "https://cdn.boob.bot/anal/1EFF5.jpg",



    "https://cdn.boob.bot/anal/13EC5.jpg",



    "https://cdn.boob.bot/anal/180F1.jpg",



    "https://cdn.boob.bot/anal/D7D2.jpg",



    "https://cdn.boob.bot/anal/1F0A4.jpg",



    "https://cdn.boob.bot/anal/C4F4.jpg",



    "https://cdn.boob.bot/anal/FD02.jpg",



    "https://cdn.boob.bot/anal/AC7B.jpg",



    "https://cdn.boob.bot/anal/17D63.png",



    "https://cdn.boob.bot/anal/7AFD.jpg",



    "https://cdn.boob.bot/anal/FA69.jpg",



    "https://cdn.boob.bot/anal/58CF.jpg",



    "https://cdn.boob.bot/anal/B90F.png",



    "https://cdn.boob.bot/anal/1D49D.jpg",



    "https://cdn.boob.bot/anal/8D72.jpg",



    "https://cdn.boob.bot/anal/1D4E3.jpg",



    "https://cdn.boob.bot/anal/DBEC.jpg",



    "https://cdn.boob.bot/anal/1B7A1.jpg",



    "https://cdn.boob.bot/anal/8AB6.jpg",



    "https://cdn.boob.bot/anal/21EDA.jpg",



    "https://cdn.boob.bot/anal/D421.jpg",



    "https://cdn.boob.bot/anal/1766A.jpg",



    "https://cdn.boob.bot/anal/16D1E.jpg"]



          console.log(message.channel.nsfw); // false



          var pus = new RichEmbed()



          .addField('NSFW not allowed here','Use NSFW commands in a NSFW marked channel (These Commands are allowed in NSFW channels. Please switch this channel to NSFW if you  wish.)')



          .setImage('https://images-ext-2.discordapp.net/external/hiWbEzhiEXfFaza5khoxg3mR3OWeugZwWo8vGxK8LzA/https/i.imgur.com/oe4iK5i.gif')



          if (message.channel.nsfw === false)    return message.channel.send(pus);



          var cat = new RichEmbed()



    .setImage(anal[Math.floor(Math.random() * anal.length)])



    message.channel.sendEmbed(cat);


    
    
  }};