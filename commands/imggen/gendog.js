///https://api.cool-img-api.ml/dogs?$random[1;999
const Discord = require('discord.js');
module.exports = {
    cooldown: 5,
    name: "gendog",
    async run(client,message){
        function between(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
          }
          const n = between(1,999)
          
        const img = new Discord.MessageEmbed()
        .setColor('#00faf0')
        .setTitle('Parrot')
        .setImage(`https://api.cool-img-api.ml/dogs?`+n)
        .setFooter(``)
        message.channel.send(img);
    }
}
