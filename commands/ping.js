const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('latency')
    .setDescription('View Latency of Bot'),
    async execute(interaction) {
        const { MessageEmbed } = require('discord.js')
        const channel = interaction.channel
        const embed = new MessageEmbed()
        .setTitle('KD | Latency')
        .setDescription(`Kayne's Assistant is currently running on ${interaction.client.ws.ping} ms`)
        interaction.reply({
            content: '_ _', 
            ephemeral: true
        })
        const msg = await channel.send({content: '_ _', embeds: [embed]})
        if(${interaction.client.ws.ping} < 500 {

        })
    }
};
