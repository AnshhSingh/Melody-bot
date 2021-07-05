const { poll } = require('discord.js-poll');
module.exports = {
	name: 'poll',
	description: 'Create a poll',
	usage: 'Title + Option 1 + Option 2 + Option 3 + etc',
	async run(client, message, args) {
        if (!args[0]){
            return message.channel.send(`You need to provide some text or options example- option1 + option2 + option3(make sure you give spaces like given in example)`)
        }
		poll(message, args, '+', '#00D1CD');
	},
};