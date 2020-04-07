const Discord = require('discord.js')


const ytdl = require('ytdl-core')



module.exports = {
  config: {
    
    name: "play",
    
    aliases: ["Play", "p"],
    
    
  

},
  run: async(bot, message, args) => {
    
    
    
    
    
    
    
    
       let embed = new Discord.RichEmbed()
       
       //not needed okay  
    
    if (!message.member.voiceChannel) return message.channel.send(':x: Error | Please connect to the voice channel.')

    if (!args[0]) return message.channel.send(":x: Error | Please insert a URL")
    
    let validate = await ytdl.validateURL(args[0]);
    if (!validate) return message.channel.send(':x: Error | Please provide a valid url.')
      let info = await ytdl.getInfo(args[0]);

    let connection = await message.member.voiceChannel.join();

    let dispatcher = await connection.playStream(ytdl(args[0], {filter: 'audioonly'})) //Audio correction
    
    
    
    message.channel.send(`> Now playing ${info.title}`) //Song title
    
    //Grim I know how to do the module remember functions.js lets do the same thing with users.js and it will work
  }
  
  
  
  
}