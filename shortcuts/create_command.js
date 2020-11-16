/*
    we create the function and then we use it very simple to not
    be overloaded with code
    
    the function should be
     ! create_command (
     ! client { we need to call the bot },
     ! "->command" { with the prefix included }",
     ! "hello world { and then our message }" );
*/

module.exports = (client, command, msg) =>
{
    client.on('message', (message) =>
    {
        const { content } = message;

        if(content.startsWith(`${command} `) || content === command){
            message.channel.send(msg);
        }
    })
}