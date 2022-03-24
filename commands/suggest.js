const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('suggest')
    .addStringOption(option => option.setName('suggestion').setDescription('Your Suggestion').setRequired(true))
    .setDescription('Make a Suggestion'),
    async execute(interaction) {
        const suggestionchannel = interaction.member.guild.channels.cache.get('927915306431692920')
        const { Permissions, MessageEmbed } = require('discord.js')
        const desc = interaction.options.getString("suggestion")
        if(interaction.member.roles.cache.has('927573628609003590')) {
        const embed = new MessageEmbed()
        .setTitle('KD | New Suggestion')
        .setDescription(`${desc}`)
        .setThumbnail(interaction.member.displayAvatarURL())
        .setFooter(interaction.member.user.tag)
        .setTimestamp()
        await interaction.reply({content: `Thanks for your Suggestion ${interaction.member.user}`, ephemeral: true})
        const msg = await suggestionchannel.send({content: '_ _', embeds: [embed]})
        await msg.react('✅')
        await msg.react('❌')
        } else {
            const embed1 = new MessageEmbed()
            .setTitle('KD | No Permissions')
            .setDescription('You lack permissions to do that!')
            .setThumbnail(interaction.member.guild.iconURL())
            interaction.reply({content: '_ _', embeds: [embed1], ephemeral: true})
        }
    }
};
