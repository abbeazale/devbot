import {SlashCommandBuilder, CommandInteraction} from 'discord.js';
const { useMainPlayer, UseQueue, Player } = require('discord-player');


export const data = new SlashCommandBuilder()
    .setName('queue')
    .setDescription('Shows the current queue');


export async function execute(interaction: CommandInteraction){
    const player = new Player(interaction.client);


    
    console.log('queues', player.queues.cache)
    console.log('guildid', interaction.guildId)
    //const queue = await player.getQueue(interaction.guildId);
    //console.log('queue', queue)

    console.log(`the queue ${player.queues.get(interaction.guildId).tracks.map((track: any) => track.author).join('\n')}`)
    return interaction.reply(`The current queue is ${player.queues.get(interaction.guildId).tracks.map((track: any) => track.title).join('\n')}`)
}