
const Discord = require('discord.js');
module.exports = {
    name: 'qr',

    async run (client, message, args) {

if (!args[0]) return message.channel.send('please give the text which needs to be converted');
else 

var res = args.toString().replace(" ","%20");
const qr = new Discord.MessageEmbed()
.setColor('#00faf0')
.setTitle(`${args}`)
.setImage(`https://chart.googleapis.com/chart?chl=${res}]&chs=500x500&cht=qr&chld=H%7C0`)
.setFooter(``)
message.channel.send(qr);

    }}