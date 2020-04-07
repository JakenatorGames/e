
const Discord = require("discord.js");



const db = require("quick.db");









module.exports = {

  config: {

    name: "lb",

    

    aliases: ["lb", "LB", "Leader", "leader", "lB", "Lb"]

    

    //better-sqlite

    

    

  

},

  

  run: async(client, message, args) => {





    

    

    

    let money = db.startsWith(`money`, { sort: '.data'}).then(resp => {

    resp.length = 10;

    var finalLb = "";

    var i = 0;

    let indexnum = 0;

    for (i in resp) {

      finalLb += `**${++indexnum}. <@${client.users.get(resp[i].ID.split('_')[1]).id}>** - $${resp[i].data }\n`;

    }



    

    const embed = new Discord.RichEmbed()

    .setAuthor(`Leaderboard`, message.guild.iconURL)

    .setColor('BLUE')

    .setDescription(finalLb)

    .setFooter(client.user.tag, client.user.displayAvatarURL)

    .setTimestamp()

    message.channel.send(embed)

  })

    

    

    

    

    

    

    

  }}