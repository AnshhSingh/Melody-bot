const Discord = require('discord.js');
module.exports = {
    name: "sexcar",
    async run(client,message){
          if (message.channel.nsfw) {
            function between(min, max) {  
                return Math.floor(
                    Math.random() * (max - min) + min
                  )
                }
                const n = between(1,101);
            const hen = new Discord.MessageEmbed()
            .setColor('#00faf0')
            .setImage('https://wetgif.com/wp-content/uploads/porno-gif-seks-v-mashine-'+n+'.gif')
            .setFooter(``)
            message.channel.send(hen);
            
        } else {
            message.channel.send("This command is only for NSFW channels");
        }

    }
}