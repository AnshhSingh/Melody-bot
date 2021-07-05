const Discord = require('discord.js');
module.exports = {
    name: "av",
    aliases: ["cc"],
    async run(client,message,args){
const user = message.mentions.users.first() || message.author;
   
    const img = new Discord.MessageEmbed()
        .setColor(0x333333)
        .setTitle(`${user.username}`)
        .setImage(user.displayAvatarURL());
    message.channel.send(img);
    }
}
