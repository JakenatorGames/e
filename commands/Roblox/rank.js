
const rbx = require('noblox.js')

const db = require('quick.db')
module.exports = {
  config: 
  {
    
    
    name: "rank"
    
  
},
run: async(client, message, args) => {
let config = await db.fetch(`groupId_${message.guild.id}`)
let md = await db.fetch(`cookie_${message.guild.id}.env`)
rbx.cookieLogin(md)
let con = await db.fetch(`rank_${message.guild.id}.roblox`)
 if(!message.member.roles.some(r=>["Rank Perms"].includes(r.name)) )

            return message.channel.send({embed: {

                color: 15406156,

                description: "You need the `Rank Perms` role to run this command.",

                author: {

                    name: message.author.username,

                    icon_url: message.author.displayAvatarURL

                }

            }});

            var username = args[0]

            var rankIdentifier = Number(args[1]) ? Number(args[1]) : args[1];

            if (!rankIdentifier) return message.channel.send({embed: {

                color: 15406156,

                description: "Please specify a rank.",

                author: {

                    name: message.author.username,

                    icon_url: message.author.displayAvatarURL

                }

            }});

            if (username){

                rbx.getIdFromUsername(username)

                .then(function(id){

                    rbx.getRankInGroup(config.groupId, id)

                    .then(function(rank){

                        if(con <= rank){

                            message.channel.send({embed: {

                                color: 15406156,

                                description: "This rank cannot be ranked by this bot.",

                                author: {

                                    name: message.author.username,

                                    icon_url: message.author.displayAvatarURL

                                }

                            }});

                        } else {

                            rbx.setRank(config, id, rankIdentifier)

                            .then(function(newRole){

                                message.channel.send({embed: {

                                    color: 8117429,

                                    description: `You have successfully ranked ${username} to ${rankIdentifier}!`,

                                    author: {

                                        name: message.author.username,

                                        icon_url: message.author.displayAvatarURL

                                    }

                                }});

                            }).catch(function(err){

                                console.log('Error:' + err)

                                message.channel.send({embed: {

                                    color: 15406156, 

                                    description: "Oops! Something went wrong. The issue has been logged to the bot console.",

                                    author: {

                                        name: message.author.username,

                                        icon_url: message.author.displayAvatarURL

                                    }

                                }});

                            })

                        }

                    }).catch(function(err){

                        message.channel.send({embed: {

                            color: 15406156,

                            description: "Oops! Something went wrong. The issue has been logged to the bot console.",

                            author: {

                                name: message.author.username,

                                icon_url: message.author.displayAvatarURL

                            }

                        }});

                    });

                }).catch(function(err){

                    message.channel.send({embed: {

                        color: 15406156,

                        description: `Oops! ${username} does not exist in the Roblox user database. Perhaps you misspelled?`,

                        author: {

                            name: message.author.username,

                            icon_url: message.author.displayAvatarURL

                        }

                    }});

                });

            } else {

                message.channel.send({embed: {

                    color: 15406156,

                    description: "Please specify a target username.",

                    author: {

                        name: message.author.username,

                        icon_url: message.author.displayAvatarURL

                    }

                }});

            }

            return;

    }}