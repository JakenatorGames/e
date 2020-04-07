
const Discord = require('discord.js')  //Do you want cap D or lower d



module.exports = {
  config: {
    
    name: "fmk",
    aliases: ["mfk","Fmk", "fmk"],
    
  
},
  run: async(bot, message, args) => {
    
     let replies = ['MARRY :ring:', 'KILL :bomb:', 'FUCK :ok_hand:'];

    let result = Math.floor(Math.random() * replies.length);



    let makifuembed = new Discord.RichEmbed()


//We put no hard 
        .setDescription(`**${args[0]} has been choosed by <@${message.author.id}>**`)

        .setColor('RANDOM')

        .addField('You choosed:', replies[result])

        .setFooter('Fuck, Marry, Kill!', bot.user.displayAvatarURL)

        .setTimestamp();



    if (!message.mentions.users.first()) return message.channel.send(`<@${message.author.id}>, `).then(msg => {

        msg.delete(3000)

    });



    message.channel.send(makifuembed);


}
    
    
    
    
    
  }



