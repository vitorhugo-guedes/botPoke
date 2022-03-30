const fs = require('fs')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv/config')

const token = process.env.TOKEN
const client = process.env.CLIENT_ID
const guild = process.env.GUILD_ID

const commands = []
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({version: '9'}).setToken(token);

rest.put(Routes.applicationGuildCommands(client, guild), {body: commands})
    .then(()=> console.log('Successfully registered slash commands'))
    .catch(console.error)


