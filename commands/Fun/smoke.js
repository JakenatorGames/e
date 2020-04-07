
const Discord = require('discord.js');


module.exports = {
  config: {
    
    
    name: "smoke"
  
},
run: async(client, message, args) => {

 

    message.channel.send('**Taking a hit of a blunt.**').then(async msg => {

        setTimeout(() => {

            msg.edit('🚬');

        }, 500);

        setTimeout(() => {

            msg.edit('🚬 ☁ ');

        }, 1000);

        setTimeout(() => {

            msg.edit('🚬 ☁☁ ');

        }, 1500);

        setTimeout(() => {

            msg.edit('🚬 ☁☁☁ ');

        }, 2000);

        setTimeout(() => {

            msg.edit('🚬 ☁☁');

        }, 2500);

        setTimeout(() => {

            msg.edit('🚬 ☁');

        }, 3000);

        setTimeout(() => {

            msg.edit('🚬 ');

        }, 3500);

        setTimeout(() => {

            msg.edit(`Finished smoking`);

        }, 4000);

    });

}}