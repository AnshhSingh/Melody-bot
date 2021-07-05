
const Discord = require('discord.js');
module.exports = {
    name: "pickwaifu",
    async run(client,message){
        var lastReply = 0;
          if (message.channel.nsfw) {
            
            if(Date.now() - lastReply < 30000) {
                message.channel.send('you can not pickwaifu again so fast!');return;
                }
            function between(min, max) {  
                return Math.floor(
                    Math.random() * (max - min) + min
                  )
                }
                const n = between(1,10000);
            const hen = new Discord.MessageEmbed()
            .setColor('#00faf0')
            .setImage('https://www.thiswaifudoesnotexist.net/example-'+n+'.jpg')
            .setFooter(``)
            message.channel.send(hen);
            
        } else {
            message.channel.send("This command is only for NSFW channels");
        }

    }
}