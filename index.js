/*
    * to use different files you should first require the file with require(name of the file).
    * then on the we should use first { module.export = { something } }.

*/

// const is a variable that cannot be change.
// require() | we are requiring the file discord.js
const Discord = require("discord.js");
const Modules = require("./imports/modules.js");

const create_command = require("./shortcuts/create_command.js");
const setup_bot = require("./commands/set_bot.js");

// here we init our client/bot
const client = new Discord.Client();

/*
 ! will try to init the modules
*/
try{
    new Modules().help;
    console.log("help.js initialized");
    new Modules().welcome;
    console.log("welcome.js initialized");
}
/*
 ! if any module has an error it will say where and what is the error 
 ! and init the bot but not the module.
 
*/
catch (err)
{
    console.log(err);
}

client.on("ready", () => 
{
    console.log("BOT online");
})

create_command(client, "->welcome", welcome_message);
create_command(client, "->help_bot", help);
create_command(client, "->help_commands", help);

create_command(client, "->bot_setup", help);
setup_bot(client, "->set_bot_status");


// from the variable that i created "bot"
// im requiring the token
// ! so we say i want the token from the file inside variable bot
const {token} = require("./bot.json").bot;

// ? without an correct token it will not login
client.login(token);
