// Require Classes
const fs = require('fs')
const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
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
 
// Command Handler
client.commands = new Collection;
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.data.name, command)
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return; 

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction)
    } catch (error) {
    }
})

// Event Handler
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(client, ...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Embed to User when Joined
client.on('guildMemberAdd', async (member, message) => {

        if (member.guild.id) {
            const welcomechannel = member.guild.channels.cache.get('941149392637939752')

            const welcomeembed = new MessageEmbed()
            .setTitle('KD | Runway')
            .setThumbnail(member.user.displayAvatarURL())
            .setDescription(`
            **User Information:**
            **Username:** ${member.user.tag}
            **User ID:** ${member.user.id}
            **User Discriminator:** ${member.user.discriminator}**
            **User Age: ** ${member.user.createdAt} 
            **User Joined At:** ${member.guild.joinedAt}

            **Server Information**
            **Member Count:** ${member.guild.memberCount}
            **Server ID:** ${member.guild.id}

            **Channels**
            **Terms & Conditions: ** <#927575864869261362>
            **FAQ: ** <#927575844929564762>
            **About Us: ** <#927575836402548756>
            **Announcements: <#927576095342096435>
            `)
            
            .setFooter(`Welcome to Kayne's Development ${member.user.tag}`)
            .setTimestamp()
            welcomechannel.send({content: '_ _', embeds: [welcomeembed]})
        }
})

// Embed to Log when User Joined
client.on('guildMemberAdd', async (member) => {

    if (member.guild.id) {
        const logchannel = member.guild.channels.cache.get('927915306431692920')

        const logembed = new MessageEmbed()
        .setTitle('KD | User Joined')
        .setThumbnail(member.user.displayAvatarURL())
        .setDescription(`
        **User Information:**
        **Username:** ${member.user.tag}
        **User ID:** ${member.user.id}
        **User Discriminator:** ${member.user.discriminator}**
        **User Age: ** ${member.user.createdAt} 
        **User Joined At:** ${member.guild.joinedAt}
        They are the ${member.guild.memberCount}th Member
        `)
        .setFooter(member.user.tag)
        .setTimestamp()
        logchannel.send({content: '_ _', embeds: [logembed]})
    }
})


// Log when Ready
client.once('ready', () => {
    console.log(`${client.user.tag} is now online`)
})

// Log into Bot
client.login(config.token)