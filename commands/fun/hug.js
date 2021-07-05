const Discord = require('discord.js');
module.exports = {
    name: "hug",
    async run(client,message){
      if (!message.mentions.users.size) {
        message.channel.send('Nobody was mentioned'); return;
    }
        function between(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
          }
          const n = between(10,90);
          const user = message.mentions.users.first();
        const img = new Discord.MessageEmbed()
        .setColor('#00faf0')
        .setTitle(`${message.author.username} hugged ${user.username}`)
        .setImage('https://purrbot.site/img/sfw/hug/gif/hug_0'+n+'.gif')
        .setFooter(``)
        message.channel.send(img);
    }
}