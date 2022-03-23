// Require Classes
const { Client, Intents, Collection } = require('discord.js');
const config = require('./config.json')

// New Client & Intents
const client = new Client({
    intents: [
        'GUILD_MEMBERS',
        'GUILD_MESSAGES',
        'GUILDS'
    ],
    partials: [
        'USER',
        'MESSAGE'
    ]
})

// Log when Ready
client.once('ready', () => {
    console.log(`${client.user.tag} is now online`)
})

// Log into Bot
client.login(config.token)