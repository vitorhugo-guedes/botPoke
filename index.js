const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
require('dotenv/config');

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

// Create a new collection on client to store the commands
client.commands = new Collection();

// get all command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

// get all event files
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'))

for(const file of eventFiles){
    const event = require(`./events/${file}`);

    if(event.once){
        client.once(event.name, (...args) => event.execute(...args));
    }
    else{
        client.on(event.name, (...args )=> event.execute(...args));
    }
}


// client.on('interactionCreate', async (interaction) => {})
client.login(process.env.TOKEN);