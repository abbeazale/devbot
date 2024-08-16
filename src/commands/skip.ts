import {CommandInteraction, SlashCommandBuilder, GuildMember, Client} from 'discord.js';
import { useQueue } from 'discord-player';

export const data = new SlashCommandBuilder()
    .setName('skip')
    .setDescription('Skips the current song')

export async function execute( interaction: CommandInteraction){
    await interaction.deferReply();
    const queue = useQueue(interaction.guildId!);

    if (!queue) {
        return interaction.followUp('Nothing is currently playing!');
    }   

   try {
        if(queue.node.skip()){
            return interaction.followUp(`Skipped the current song: ${queue.currentTrack?.title}`);
        }
       
   } catch (e) {
        console.log('error', e);
        return interaction.followUp(`Something went wrong: ${e}`);
   }
}