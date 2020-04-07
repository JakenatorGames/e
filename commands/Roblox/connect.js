const Discord = require('discord.js')

const roblox = require('noblox.js')
const db = require('quick.db')
module.exports = {

    config: {

        name: "connect",

        description: "Shows a roblox profiles information.",

        usage: "*search example",

        accessableby: "everyone",

        aliases: ["cnt"]

    },
  run: async(client, message, args) => {
    
 let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
    
         let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    
 var gid = message.guild.id

	if (message.member.roles.find('name', 'Roblox Connected')){

		let e2m = new Discord.RichEmbed()

		.setTitle(`${message.author.username}#${message.author.discriminator}`)

		.setDescription("Couldn't be connected")

		.addField("Reason:", "Already connected")

		.setThumbnail(message.author.displayAvatarURL)

		.setColor(`#FF0000`)

		.setTimestamp()

	
		.setFooter('Already Connected!');

		

		message.channel.send({embed: e2m});

	

	

	if (!message.guild.me.hasPermission("MANAGE_ROLES")) {message.channel.send('Unable to create role due to "No Permission" needs MANAGE_ROLES!'); }

	if (!message.guild.roles.find('name', "Roblox Connected")){

		

		message.guild.createRole({

			name: 'Roblox Connected',

			color: 'GREEN',

			position: 0

		}, "I didn't find this role so I made it!")

		.then (role => {

		if (message.guild.roles.find('name', 'Roblox Connected').comparePositionTo(message.guild.me.highestRole) > 0) {

			let em = new Discord.RichEmbed()

			.setTitle(`${message.author.username}#${message.author.discriminator}`)

			.setDescription("Couldn't be connected.")

			.addField("Reason:", "The 'Roblox Connected' role is higher than my role!")

			.setThumbnail(message.author.displayAvatarURL)

			.setColor(`#FF0000`)

			.setTimestamp()

			.setURL("")

			.setFooter('ERROR');



			message.channel.send({embed: em});

			return;

			};

		message.member.addRole(message.guild.roles.find('name', 'Roblox Connected'), "User has been connected")

		let em = new Discord.RichEmbed()

			.setTitle(`${message.author.username}#${message.author.discriminator}`)

			.setDescription("You are now connected to roblox.")

			.setThumbnail(message.author.displayAvatarURL)

			.setColor(`#00FF00`)

			.setFooter(`Now authorized on ${message.guild.name}`)

			.setURL("")

			.setTimestamp();

	

			message.channel.send({embed: em});

			return;

		});

	}

	if (!message.guild.roles.find('name', "Roblox Connected")){

		console.log("Unable to create role!")

	

	};

	if (message.guild.roles.find('name', 'Roblox Connected').comparePositionTo(message.guild.me.highestRole) > 0) {

		let em = new Discord.RichEmbed()

		.setTitle(`${message.author.username}#${message.author.discriminator}`)

		.setDescription("Couldn't be connected")

		.addField("Reason:", "The 'Roblox Connected' role is higher than my role!")

		.setThumbnail(message.author.displayAvatarURL)

		.setColor(`#FF0000`)

		.setTimestamp()

		.setURL("")

		.setFooter('ERROR');

		

		message.channel.send({embed: em});

  }

		}

	message.member.addRole(message.guild.roles.find('name', 'Roblox Connected'), "User has been connected")

	let em = new Discord.RichEmbed()

		.setTitle(`${message.author.username}#${message.author.discriminator}`)

   	 	.setDescription("You are now Connected")

		.setThumbnail(message.author.displayAvatarURL)

    		.setColor(`#00FF00`)

		.setFooter(`Now authorized on ${message.guild.name}`)

		.setURL("")

		.setTimestamp();
    
  let username = args[0]



 if (username) {



   roblox.getIdFromUsername(username).then(id => {



     if (id) {



       roblox.getPlayerInfo(parseInt(id)).then(function(info) {



         let date = new Date(info.joinDate)



         let dateInfo = date



         let embed = new Discord.RichEmbed()







         .setColor("#7700ff")



         .setURL(`https://roblox.com/users/${id}/profile`)



         .setTimestamp()



         .setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)



         .addField("Username", info.username || 'Unresolvable', true)



         .addField("User ID", id || 'Unresolvable', true)



         .addField("Description", info.blurb || 'Nothing', true)



         .addField("Status", info.status || 'Nothing', true)



         .addField("Account Age", `${info.age} days old` || 'Unresolvable')



         .addField("User Link", `https://roblox.com/users/${id}/profile`)
         
         .addField("Connected", `True`)



         .setFooter(`Connected To Roblox`, client.user.avatarURL)



          message.channel.send({embed})
         
         let embed2 = new Discord.RichEmbed()




         .addTitle("Connected To Roblox!")
         .addField("Congrats", `${message.author.tag} You have been connected to roblox! `)


         .setColor("#7700ff")



      


         .setFooter(`Connected To Roblox`, client.user.avatarURL)



          message.channel.send({embed2})



       })



     }







   }).catch(function (err) {



     message.channel.send("Sorry, that user doesn't seem to exist, double check your spelling and try again!" + client.responseEmojis)



   });



} else {



   message.channel.send("Please provide a valid username, e.g. '~search ROBLOX'.")



 }



    }




    
  };