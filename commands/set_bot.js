const Discord = require("discord.js");

const client = new Discord.Client();


// * https://www.youtube.com/watch?v=J2bKyv5pp-M&ab_channel=AnsontheDeveloper
module.exports = (client, command) =>
{
    client.on('message', msg =>
    {
        if (msg.author.bot) return;
    
        if (msg.content === command)
        {
            msg.channel.send('write a status...');

            let filter = m => !m.author.bot;
            let i = false;
           
            let collector = new Discord.MessageCollector(msg.channel, filter);
            collector.on('collect', (msg, col) =>
            {
                if(!(msg.content === '->bot_stop_status'))
                {
                    i = true;
                    console.log("Status: " + msg.content);
                    client.user.setActivity(msg.content);
        
                    if (i)
                    {
                        collector.stop();
                    }  
                }
                else
                {
                    msg.channel.send("Your status cannot be a command of this type");
                }
            })
        }
    });
}
