const Discord = require('discord.js');
const fetch = require("node-fetch");
module.exports = {
    cooldown: 5,
    name: "food",
    async run(client,message){

 const url = `https://foodish-api.herokuapp.com/api/`;
 let res; 
res = await fetch(url).then(url => url.json());
const data = res.image
          
        const img = new Discord.MessageEmbed()
        .setColor('#00faf0')
        .setTitle('because *you eat with your eyes first*')
        .setImage(`${data}`)
        .setFooter(``)
        message.channel.send(img);
    }
}
