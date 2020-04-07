

const Discord = require("discord.js");


const db = require('quick.db')
module.exports = {



    config: {



        name: "perms",



        description: "pers for a user",



        usage: "*perms",



        accessableby: "Staff",



        aliases: ["perm", "Prm", "pem", "Perms", "perms"]



    },





run: async(client, message, args) => {

 let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }

	if (message.mentions.users.array()[0])



			var member = message.guild.members.get(message.mentions.users.array()[0].id);



		else if (client.users.get(message.content) != null)



			var member = message.guild.members.get(message.content);



		else



			var member = message.guild.members.get(message.author.id);







		var p = member.permissions.serialize(true)







		var perms = new Discord.RichEmbed()



			.setAuthor(member.user.username + '#' + member.user.discriminator, member.user.avatarURL)



			.setDescription("User Permissions for " + message.guild.name)



			.setColor(0x1675DB)







		var i = 0;



		for (var key in p) {



			if (p.hasOwnProperty(key) && i < 24) {



				if (p[key] == false)



					perms.addField(blah(key), ":no_entry:", true);



				else



					perms.addField(blah(key), ":ballot_box_with_check:", true);



				i++;



			} 



            if(i == 24) {



                message.channel.send({embed: perms})



                var perms = new Discord.RichEmbed()



                .setFooter('Triggered by ' + message.author.username, message.author.avatarURL)



                .setFooter("Snoop's Perms");



                i = 0;



            }



		}







        message.channel.send({embed: perms})







		function blah(str) {



            if(str == "MANAGE_ROLES_OR_PERMISSIONS") str = "MANAGE_ROLES"



			str = str.replace(new RegExp("_", "g"), " ");



			return str.replace(/\w\S*/g, txt => {



				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()



			});



		}



}







}