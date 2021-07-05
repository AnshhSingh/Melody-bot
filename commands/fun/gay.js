const Discord = require('discord.js');
module.exports = {
    name: "howgay",
    async run(client,message){
        const user = message.mentions.users.first() || message.author;
        function between(min, max) {  
          return Math.floor(
              Math.random() * (max - min) + min
            )
          }
          const n = between(0,100);
          const img = new Discord.MessageEmbed()
          .setColor('#00faf0')
          .setTitle(`G`)
          .setDescription(`${user.username} is `+n+'% gay 🏳️‍🌈')
          .setFooter(``)
          message.channel.send(img);
      }
    }
