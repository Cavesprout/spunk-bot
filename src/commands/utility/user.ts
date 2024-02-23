import { CommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Responds with information about the user'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply(`This command was run by ${interaction.user.username}.`)
    }
}