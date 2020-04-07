const Discord = require('discord.js')


const bot = new Discord.Client();

const DBL = require("dblapi.js");

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzM0ODQ0NTEwNDgzMjUyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTc3MDY4NTE0fQ.fNAuu0NuMe_t6R0u5RgLqAPD9j5w-NES9FKiLC0uC6E';

const dbl = new DBL(API_KEY, bot);




module.exports = {
  config: {
    name: "serverinfo"
  
},
  run: async(bot, message, args) => {
  
    let d = new Discord.RichEmbed()
    
     .setThumbnail(bot.user.avatarURL)
    
    .setTitle(`Server Information`)
    
    .setDescription(`


**Name:** ${message.guild.name}

**Owner:** ${message.guild.owner} 

**ID:** ${message.guild.id}

**Created on:** ${message.guild.createdAt}

**Member Count:** ${message.guild.memberCount}


`)
    
    message.channel.send(d)
        
  }}