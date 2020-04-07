
const Discord = require('discord.js');
const db = require('quick.db')


module.exports = {
  config: {
    
    
    name: "rebootsnoop"
  
},
run: async(client, msg, args) => {
  
      let dev = await db.fetch(`dev_${msg.author.id}`)
    if (msg.author.id !== dev) return msg.channel.send(`:x: ERROR | Sorry, you cant reboot snoop! Your not a dev.`)

 

    msg.channel.send('**Rebooting Snoop!**').then(async msg => {

        setTimeout(() => {

            msg.edit('Reboot.');

        }, 500);

        setTimeout(() => {

            msg.edit('Reboot..');

        }, 1000);

        setTimeout(() => {

            msg.edit('Reboot... ');

        }, 1500);

        setTimeout(() => {

            msg.edit('Reboot. ');

        }, 2000);

        setTimeout(() => {

            msg.edit('Reboot..');

        }, 2700);

        setTimeout(() => {

            msg.edit('Reboot...');

        }, 3000);

        setTimeout(() => {

            msg.edit('Reboot. ');

        }, 3500);

        setTimeout(() => {

            msg.edit(`**Reboot Complete Systems Should Not Be Laggy!**`);

        }, 4000);

    });

}}