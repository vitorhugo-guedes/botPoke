const { Client, Intents } = require('discord.js');
require('dotenv/config');

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

client.once('ready', ()=>{
    console.log('On');
})

client.login(process.env.DISCORD_TOKEN);