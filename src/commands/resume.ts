import {SlashCommandBuilder, CommandInteraction} from 'discord.js';
import { useTimeline } from 'discord-player';

export const data = new SlashCommandBuilder()
    .setName('resume')
    .setDescription('Resumes the current song')

export async function execute(interaction: CommandInteraction){
    await interaction.deferReply();
    const timeLine = useTimeline(interaction.guildId!);

    if(!timeLine){
        return interaction.followUp('Nothing is currently playing');
    }

    if(!timeLine.paused){
        return interaction.followUp('The song is already playing');
    }

    try {
        timeLine?.resume();
        return interaction.followUp('Resumed the current song');
    } catch (e) {
        console.log('error', e);
        return interaction.followUp(`Something went wrong: ${e}`);
    }
}