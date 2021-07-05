const Discord = require('discord.js');
module.exports = {
    name: "burn",
    async run(client,message,args){
const user = message.mentions.users.first() || message.author;
   
    const img = new Discord.MessageEmbed()
        .setColor(0x333333)
        .setTitle(`${user.username}`)
        .setImage(`https://useless-api.vierofernando.repl.co/burn?image=${user.displayAvatarURL()}`);
    message.channel.send(img);
    }
}
