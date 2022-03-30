const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setName('user').setDescription('User info'),
    async execute(interaction){
        await interaction.reply(`O panaca ${interaction.user.tag} executou o comando /user`);
    }
}