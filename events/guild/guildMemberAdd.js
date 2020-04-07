 
const Discord = require("discord.js"); //Imports the Discord.Js Module
//I know how to make a 8ball.
module.exports = async(bot, message, member) => {
//Dont edit this ik idk why I wass just on this page I am making a 8ball command but idk if its gonna work
   
    const channel = message.guild.channels.find('name', 'welcome'); //"welcome" is the channel the welcome message will send to you can change this if needed
let url = 'https://helendipity.files.wordpress.com/2013/09/welcome-animated51.gif'
    if (channel) {

        let embed = new Discord.RichEmbed() //Defines Embed

            .setColor("WHITE") // Sets the Embed color

            .setAuthor(`New Member`, message.guild.iconURL) // Sets Embeds Author (this acts as the title in this instance)

            .setDescription(`Welcome ${message.user.username} to ${message.guild.name}. Please be sure to invite all of your friends and follow all the rules we have	

            ➢ :link: __**User ID:**__ \`${message.user.id}\`	

            `)

            .setFooter('Snoop Welcomes you. | @2019', bot.user.displayAvatarURL, true) //Please put your footer here this can be anything
.setImage(url)
            .setTimestamp() // Time of the message been sent

               
        channel.send(embed) //This will send the welcome message to the "welcome" channel
      
      


    if (!channel) return;
      
    





    //This is an optional embed message sent to the user if you want to use this please just remove the block comment

    /* let embed2 = new Discord.RichEmbed()

        .setColor("#ff0000")

        .setAuthor(`Welcome to the Official NAME Discord`, message.guild.iconURL)

        .setDescription(`Hello ${message.user.username} welcome to ${message.guild.name}

        Here is a list of important links i think you will need:

        Twitter: Your Twitter here

        Mixer: Put your Mixer or twitch here

        GitHub: Put Your github here

        `)



    message.user.sendMessage(embed2)*/
    }


}