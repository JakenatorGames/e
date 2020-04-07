module.exports = {
  config: {
    name: "afk",
    description: "Set your profile afk",
    aliases: ["Afk"]
    
    
    
  
},
  
  run: async(bot, message, args) => {
    if (message.author.id === process.env.id) {
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
   let reason = args.join(' ') ? args.join(' ') : 'I am currently afk, I will reply as soon possible.';

    let afklist = bot.afk.get(message.author.id);

    
    
    
     if(message.author.id === process.env.id){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
        if(message.guild.id === process.env.gid) {
        return message.channel.send('**You guild id is on the blacklist, use *blappeal if wanting it to be removed.**')
    }

    
    

    if (!afklist) {

        let construct = {

            id: message.author.id,

            reason: reason

        };



        bot.afk.set(message.author.id, construct);

        return message.reply(`SET TO AFK REASON: ${reason}`).then(msg => msg.delete(5000));

    }



}
    
    
    
    
  };
  
  
  
  
  
  
