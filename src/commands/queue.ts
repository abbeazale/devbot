import {SlashCommandBuilder, CommandInteraction} from 'discord.js';
const { Player } = require('discord-player');

export const data = new SlashCommandBuilder()
    .setName('queue')
    .setDescription('Shows the current queue');

export async function execute(interaction: CommandInteraction){
    const player = new Player(interaction.client);

    console.log('queues', player.queues.cache)
    
    console.log(`the queue ${player.queues.get(interaction.guildId).tracks.map((track: any) => track).join('\n')}`)
    return interaction.reply(`The current queue is ${player.queues.get(interaction.guildId).tracks.map((track: any) => track.title).join('\n')}`)
}