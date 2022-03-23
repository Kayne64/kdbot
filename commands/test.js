const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('Tests Functionality'),
    async execute(interaction) {
        await interaction.reply({content: `Test's Functionality of Bot`, ephemeral: true})
    }
};
