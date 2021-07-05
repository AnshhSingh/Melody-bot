const Discord = require('discord.js');
module.exports = {
    cooldown: 5,
    name: "imggen",
    async run(client,message){
        function between(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
          }
          const n = between(2050, 4000)
          
        const img = new Discord.MessageEmbed()
        .setColor('#00faf0')
        .setTitle('Random images')
        .setImage('https://picsum.photos/'+n)
        .setFooter(``)
        message.channel.send(img);
    }
}