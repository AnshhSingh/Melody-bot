const Discord = module.require('discord.js');
const moment = require('moment');
module.exports = {
    name: "userinfo",
    async run(client,message){
        const user = message.mentions.users.first() || message.author;
        const uf = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField("In Server", message.guild.name, true)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Bot:", `${user.bot}`, true)
    .addField("Joined The Server On:", `${moment.utc(user.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    //.addField("Roles:", user.roles.map(roles => `${roles}`).join(', '), true)
    .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
message.channel.send(uf);
    }}