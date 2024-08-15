import {SlashCommandBuilder, CommandInteraction} from 'discord.js';
import {Player } from 'discord-player';

export const data = new SlashCommandBuilder()
    .setName('queue')
    .setDescription('Shows the current queue');

export async function execute(interaction: CommandInteraction){
    const player = new Player(interaction.client);

    console.log('queues', player.queues.cache)

    const guildId = interaction.guildId;
    
    if (guildId) {
        const queue = player.queues.get(guildId);

        if (queue) {
            console.log(`the queue  ${queue.tracks.map((track: any) => track).join('\n')}`)
            return interaction.reply(`The next songs are \n ${queue.tracks.map((track: any) => track.title).join('\n')}`)
        }
        else{
            return interaction.reply('Nothing is currently playing!');
        }
    }

    

}