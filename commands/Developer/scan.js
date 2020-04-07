
const Discord = require('discord.js');



module.exports = {
  config: {
    
    
    name: "scan"
  
},
run: async(client, message, args) => {

 

    message.channel.send('Scanning Viruses').then(async msg => {

        setTimeout(() => {

            msg.edit('Scanning.');

        }, 500);

        setTimeout(() => {

            msg.edit('Scanning.. ');

        }, 1000);

        setTimeout(() => {

            msg.edit('Scanning...');

        }, 1500);

        setTimeout(() => {

            msg.edit('Scanning. ');

        }, 2000);

        setTimeout(() => {

            msg.edit('Scanning..');

        }, 2500);

        setTimeout(() => {

            msg.edit('Scanning...');

        }, 3000);

        setTimeout(() => {

            msg.edit('Scanning. ');

        }, 3500);

        setTimeout(() => {

            msg.edit(`Scan Complete`);

        }, 4000);
      
         setTimeout(() => {
           
            
           msg.edit(`Scan Complete Your Ping Is: ${client.ping} `) 
           
           
             
          
           
          
                    
                    

        }, 4500);

    });

}}