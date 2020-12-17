const Discord = require('discord.js');
const client = new Discord.client();
var config = require('./config.json');
const url = config.url
const token = config.token
const { Webhook } = require('discord-webhook-node');

client.on('ready', () => {
  console.log(`I'm running!`);
});

client.on('message', msg => {
  if (msg.content.startsWith === "!sendtowebhook") {
  
