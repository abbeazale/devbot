import {SlashCommandBuilder, CommandInteraction} from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Stops the current song');