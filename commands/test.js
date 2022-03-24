const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('Tests Functionality'),
    async execute(interaction) {
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('KD | Testing')
        .setDescription('Bot is functioning well, No Errors!')
        interaction.reply({content: '_ _', embeds: [embed], ephemeral: true})
    }
};
