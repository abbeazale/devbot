import {SlashCommandBuilder, CommandInteraction} from 'discord.js';
import {useQueue, useTimeline} from 'discord-player';

export const data = new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Stops the current song');

export async function execute(interaction: CommandInteraction){

    const timeLine = useTimeline(interaction.guildId!);
    await interaction.deferReply();
    const queue = useQueue(interaction.guildId!);

    if(!timeLine){
        return interaction.followUp('Nothing is currently playing');
    }

    try {
        queue?.node.stop();
        return interaction.followUp('Stopped the current song');
    } catch(e) {
        console.log('error', e);
        return interaction.followUp(`Something went wrong: ${e}`);
    }
}