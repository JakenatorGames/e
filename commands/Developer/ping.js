const Discord = require("discord.js");

const client = new Discord.Client();

const fs = require("fs");


module.exports = {
  config: {
    name: "ping"
  
},
 run: async(client, message, args) => {

                    

                            if (`${client.ping}` <= 50) { 

                            let  goodping = new Discord.RichEmbed()

                                .setColor("#2ace2a")

                                .addField(`Ping: ${client.ping}`, `Woo! I'm feeling good! :slight_smile:`)

                                    message.channel.send(goodping);

                             

                            }

                            if (`${client.ping}` > 51 && `${client.ping}` < 100) {

                                let decentping = new Discord.RichEmbed()

                                .setColor("#e6e600") 

                                .addField(`Ping: ${client.ping}`, `It's not that bad, right? :confused:`)

                                message.channel.send(decentping);

                            } else {

                             if (`${client.ping}` > 101) { 

                                let  badping = new Discord.RichEmbed()

                                .setColor("#8b0000")

                                .addField(`Ping: ${client.ping}`, `Snoop Reboot || Finished! Back Online..`)

                                    message.channel.send(badping);

                               
                               
                            } else {

                                   if (`${client.ping}` > 400) { 

                                let  rbadping = new Discord.RichEmbed()

                                .setColor("#8b0000")

                                .addField(`Ping: ${client.ping}`, `Snoop Reboot.. || System Online!`)

                                    message.channel.send(rbadping);
                            }

                           }

                            }
   
 }}