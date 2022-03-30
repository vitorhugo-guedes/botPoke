const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setName('server').setDescription('Server info'),
    async execute(interaction){
        await interaction.reply(`O nome do server não é ${interaction.guild.name}\nMembros: ${interaction.guild.memberCount}`);
    }
}