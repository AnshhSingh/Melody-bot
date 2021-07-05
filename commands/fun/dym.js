

const Discord = require('discord.js');
module.exports = {
    cooldown: 5,
    name: "dym",
    async run(client,message,args){

          
        const img = new Discord.MessageEmbed()
        .setColor('#00faf0')
        .setTitle(`hmmmmmmm..`)
        .setImage('https://https://api.cool-img-api.ml/didyoumean?top=.org/'+url)
        .setFooter(``)
        message.channel.send(img);
    }
}