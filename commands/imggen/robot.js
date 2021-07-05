
const Discord = require('discord.js');
module.exports = {
    cooldown: 5,
    name: "robot",
    async run(client,message){
        function between(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
          }
          const n = between(1,5000)
          
        const img = new Discord.MessageEmbed()
        .setColor('#00faf0')
        .setTitle(`robot`)
        .setImage('https://robohash.org/'+n)
        .setFooter(``)
        message.channel.send(img);
    }
}