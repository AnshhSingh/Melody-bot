
const Discord = require('discord.js');
module.exports = {
    cooldown: 5,
    name: "genparrot",
    async run(client,message){
        function between(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
          }
          const n = between(1,99)
          
        const img = new Discord.MessageEmbed()
        .setColor('#00faf0')
        .setTitle('Parrot')
        .setImage(`http://electrohaxz.tk/media/img/birbs/Birb%20(${n}).jpg`)
        .setFooter(``)
        message.channel.send(img);
    }
}