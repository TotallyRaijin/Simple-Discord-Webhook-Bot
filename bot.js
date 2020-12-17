const Discord = require('discord.js');
const client = new Discord.client();
var config = require('./config.json');
const token = config.token

client.on('ready', () => {
  console.log(`I'm running!`);
});

client.on('message', msg => {
  if (msg.content.startsWith === "!sendtowebhook") {
