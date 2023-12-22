import {SlashCommandBuilder, CommandInteraction} from 'discord.js';
import { useTimeline } from 'discord-player';

export const data = new SlashCommandBuilder()
    .setName('pause')
    .setDescription('Pauses the current song')

export async function execute(interaction: CommandInteraction){
    await interaction.deferReply();

    const timeLine = useTimeline(interaction.guildId!);

    if (!timeLine) {
        return interaction.followUp('Nothing is currently playing');
    }

    if(timeLine.paused){
        return interaction.followUp('The song is already paused');
    }

    try {
        timeLine?.pause();
        return interaction.followUp('Paused the current song');

    }
    catch (error) {
        console.log('error', error);
        return interaction.followUp(`Something went wrong: ${error}`);
    }

}