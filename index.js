const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'YOUR TOKEN HERE'

const PREFIX = '$';

bot.login(token)

bot.on('ready',() =>{
    console.log('Your first bot is online!');})