
const Discord = require('discord.js');
module.exports = {
    name: "creampie",
    async run(client,message){
          if (message.channel.nsfw) {
            function between(min, max) {  
                return Math.floor(
                    Math.random() * (max - min) + min
                  )
                }
                const n = between(1,108);
            const hen = new Discord.MessageEmbed()
            .setColor('#00faf0')
            .setImage('http://porn-gif.net/img/pussy_filled_with_cum/pussy_filled_with_cum_'+n+'.gif')
            .setFooter(``)
            message.channel.send(hen);
            
        } else {
            message.channel.send("This command is only for NSFW channels");
        }

    }
}