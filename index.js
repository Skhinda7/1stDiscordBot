/* This is a straightforward code that allows you to bring a discord bot to life
You will need your bot token which can be acquired from the Discord Developer Portal: https://discord.com/developers/ */
const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'YOUR TOKEN HERE'
/*You can change the prefix to anything you'd like the bot to detect*/
const PREFIX = '$';

bot.login(token)

bot.on('ready',() =>{
    /* You can write whatever you'd like the bot to say in the terminal when the bot is online */
    console.log('Your first bot is online!');})
