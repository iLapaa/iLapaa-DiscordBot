const Discord = require("discord.js");

module.exports =  help = new Discord.MessageEmbed()

	.setColor('#fcd703')
	.setThumbnail('https://i.imgur.com/upo2dW9.jpg')
	.setAuthor('iLapaa-Help')

	.addFields(
		{ name: '->set_bot_name', value: 'Allows you to change the name of the bot to whatever you want', inline: false},
		{ name: '->set_bot_image', value: 'Change the image of the bot', inline: false},
		{ name: '->set_bot_status', value: 'Allows you to change the status of the bot to whatever you want', inline: false},
		{ name: '->set_bot_name', value: 'Change what the bot is playing', inline: false},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'My repository', value: 'https://github.com/iLapaa/iLapaa-DiscordBot', inline: true },
	)
	.setTimestamp()
	.setFooter('iLapaa', 'https://i.imgur.com/upo2dW9.jpg');

