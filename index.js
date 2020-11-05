/* This is a straightforward code that allows you to bring a discord bot to life
You will need your bot token which can be acquired from the Discord Developer Portal: https://discord.com/developers/ */
const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'YOUR TOKEN HERE'

const PREFIX = '$';

bot.login(token)

bot.on('ready',() =>{
    console.log('Your first bot is online!');})
