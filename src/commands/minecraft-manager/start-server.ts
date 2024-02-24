import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import https from 'https';

const options = {
    hostname: '4llrgrd1vb.execute-api.us-east-1.amazonaws.com',
    path:'/test/minecraft-vanilla/start',
    port: '443',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': '4'
    }
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start-server')
        .setDescription('starts the minecraft server'),
    async execute(interaction: CommandInteraction) {
        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk: string) => {
                data += chunk;
            })
            res.on('end', () => {
                console.log(data);
            });
        });

        let errorOccurred = false;
        req.on('error', (error) => {
            errorOccurred = true;
            console.error(error);
        });
        req.write("null");
        req.end();

        if (errorOccurred) {
            await interaction.reply('An Error Occurred. Tell Vi ASAP!')
        } else {
            await interaction.reply("The Server is Starting! Please give it a few minutes before attempting to connect.")
        }
    }
};