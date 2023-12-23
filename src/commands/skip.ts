import {CommandInteraction, SlashCommandBuilder, GuildMember, Client} from 'discord.js';
const { Track} = require('discord-player');
import {client} from '../index';
const {  Player } = require('discord-player');
import {useMainPlayer} from 'discord-player';
import { useTimeline, useQueue } from 'discord-player';

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
        queue.node.skip();
        return interaction.followUp('Skipped the current song');
   } catch (e) {
        console.log('error', e);
        return interaction.followUp(`Something went wrong: ${e}`);
   }
}