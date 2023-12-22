import {CommandInteraction, SlashCommandBuilder, GuildMember, Client} from 'discord.js';
const { Track} = require('discord-player');
import {client} from '../index';
const { useMainPlayer } = require('discord-player');



export const data = new SlashCommandBuilder()
    .setName('skip')
    .setDescription('Skips the current song')

export async function execute( interaction: CommandInteraction){
    
}

