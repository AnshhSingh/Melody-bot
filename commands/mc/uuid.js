const mojang = require('mojang-api');
const Discord = require('discord.js');
module.exports = {
    name: 'uuid',
    async run(client,message,args) {
        //check if there're arguments
        if(!args.length) {
            message.channel.send('please specify the player\'s name');
            return;
        }
        //send request to find uuid
        mojang.nameToUuid(args[0], (err, resp) => {
            if(err || !resp.length) {
                console.log(err);
                message.channel.send('there was an error');
            }
            else message.channel.send(resp[0].name + '\'s UUID is ' + resp[0].id);
        });
    }
}