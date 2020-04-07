
const db = require('quick.db')

const Discord = require('discord.js')

module.exports = {
  config: {
    name: "rob",
    
    aliases: ["Rob"]
    
    
    
    
  
},

run: async(client, message, args) => {


let bl = await db.fetch(`blid_${message.author.id}`)
    if(message.author.id === bl){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
   let n = await db.fetch(`gban_${message.guild.id}`)
    if (message.guild.id === n) return message.channel.send("Error, your guild is blacklisted.")
    

    let user = message.mentions.members.first()

    let targetuser = await db.fetch(`money_${user.id}`) // fetch mentioned users balance

    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance





    if (!user) {

        return message.channel.send('Sorry, you forgot to mention somebody.')

    }

    if (author < 500) { // if the authors balance is less than 250, return this.

        return message.channel.send(':x: You need atleast 500$ to rob somebody.')

    }



    if (targetuser < 5) { // if mentioned user has 0 or less, it will return this.

        return message.channel.send(`:x: ${user.user.username} does not have anything to rob.`)

    }



let dev = await db.fetch(`dev_${user.id}`)
if (user.id === dev) return message.channel.send(`Can't rob a owner.`)
    let random = Math.floor(Math.random() * 200) + 1; // random number 200-1, you can change 200 to whatever you'd like





    let embed = new Discord.RichEmbed()

    .setDescription(`${message.author} you robbed ${user} and got away with ${random}!`)

    .setColor("GREEN")

    .setTimestamp()

    message.channel.send(embed)


 if(message.author.id === process.env.id){
        return message.channel.send('**You are blacklisted. Please contact a manager for questions..**')
    }
        if(message.guild.id === process.env.gid) {
        return message.channel.send('**You guild id is on the blacklist, use *blappeal if wanting it to be removed.**')
    }



    db.subtract(`money_${user.id}`, random)

    db.add(`money_${message.author.id}`, random)

}}