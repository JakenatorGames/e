// server.js just grim dont do anything 
// where your node app starts

// init project
const fs = require("fs");
const http = require("http");
const express = require("express");

//we do not need that it will not work due to how the bot set up is / Wdym?
const app = express();
// what do you mean functions?




app.get("/", (request, response) => {
  console.log("Ping received!");
  response.sendStatus(200);
});

// This keeps the bot running 24/7
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const { Client, Collection, RichEmbed, ShardingManager } = require("discord.js"); // Imports the Discord.Js Libary
const rbx = require('noblox.js')
const dbd = require('quick.db')
const DBL = require("dblapi.js");

const bot = new Client(); //Defines Block


["commands", "aliases"].forEach(x => bot[x] = new Collection());

["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));


bot.on('guildCreate', guild => {
  //8ball works
  
  let m = new RichEmbed()
  .setTitle("New Server")
  .setDescription(`

Name: ${guild.name}

ID: ${guild.id}

Owner: ${guild.owner}


`)
  .setFooter('Snoop`s Guild Tracker', bot.user.avatarURL)
  
  .setColor('RANDOM')
  
  bot.channels.get('654328520549466142').send(m)
})


bot.on('guildDelete', guild => {
  
  let d = new RichEmbed()
  .setTitle("Left Server")
  .setDescription(`

Name: ${guild.name}

ID: ${guild.id}

Owner: ${guild.owner} 

Owner ID: ${guild.owner.id}


`)
  .setColor('RED')
  .setFooter('Guild Left', bot.user.avatarURL)
  bot.channels.get('654328520549466142').send(d)
  
})

bot.login("NjIzMzQ4NDQ1MTA0ODMyNTIy.Xg3zvQ.T9I4ZyUijv0jwttwGYoN422lu1U");


const queue = new Map();




bot.afk = new Map();

