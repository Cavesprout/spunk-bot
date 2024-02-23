import { CommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('replies with ping'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('Pong!')
    }


};