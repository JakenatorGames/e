const Discord = require("discord.js");

const db = require('quick.db')

var imageArray = [



    "http://upload.inven.co.kr/upload/2013/03/30/bbs/i4322089631.gif",



    "https://media.giphy.com/media/zkn7frya243hm/giphy.gif",



    "http://gifimage.net/wp-content/uploads/2017/09/anime-spank-gif-6.gif",



    "http://i.giphy.com/l41lNLGDSAZo1lcd2.gif",



    "http://i0.kym-cdn.com/photos/images/newsfeed/001/052/135/0a9.gif",



    "http://animediet.net/wp-content/uploads/2012/10/tumblr_mau3m763Y71qzd219o9_500.gif",



    "https://i.pinimg.com/originals/c6/6f/8f/c66f8f3a9b9842244e310ba6f0f2551a.jpg",



    "https://ci.memecdn.com/7158387.gif",



    "http://i0.kym-cdn.com/photos/images/newsfeed/000/928/255/280.gif",



    "https://media.giphy.com/media/iSOe5a2NeQ6yc/giphy.gif",



    "https://data.whicdn.com/images/105172302/original.gif"



];

module.exports = {
  config: {
    name: "spank",
    usage: "*spank user/self",
    
    aliases: ["Spank", "spank", "spnk", "s"]
    
    
    
    
  
},
  
  run: async(client, message, args) => {
      let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
        if(message.guild.id === process.env.gid) {
        return message.channel.send('**You guild id is on the blacklist, use *blappeal if wanting it to be removed.**')
    }

    

    var spank = [Math.floor(Math.random() * imageArray.length)]



    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);



    if (message.mentions.users.first()) {



        const embed = new Discord.RichEmbed()



        .setDescription(''+ message.mentions.users.first() + ' you have been spanked by '+ message.author.toString())



        .setColor(embedcolor)



        .setImage(`${imageArray[spank]}`)



        .setFooter("ReaperBot");



        message.channel.send({embed: embed});



    } else {



        if (!message.mentions.users.first()) {



            const embed = new Discord.RichEmbed()



            .setDescription("**Laughs** Of course I'll spank you :smiling_imp:")



            .setColor(embedcolor)



            .setImage(`${imageArray[spank]}`)



            .setFooter("Snoop NSFW @2019");



            message.channel.send({embed: embed});



        }



    }







}
    
    
  }
  
  
