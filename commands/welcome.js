const Discord = require("discord.js");

module.exports =  welcome_message = new Discord.MessageEmbed()

	.setColor('#fcd703')
	.setThumbnail('https://i.imgur.com/upo2dW9.jpg')
	.setAuthor('Hello, im iLapaa :)')

	.addFields(
		{ name: '-', value: 'feel free to use this bot as your own, to start just type\n\t\t\t   "->help_bot" or "->help_commands"', inline: true},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'My repository', value: 'https://github.com/iLapaa/iLapaa-DiscordBot', inline: true },
	)
	.setTimestamp()
	.setFooter('iLapaa', 'https://i.imgur.com/upo2dW9.jpg');

