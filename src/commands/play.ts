import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { GuildMember } from 'discord.js';
import {YoutubeiExtractor} from 'discord-player-youtubei';
//const { useMainPlayer } = require('discord-player');
import { useMainPlayer, Player } from 'discord-player';

export const data = new SlashCommandBuilder()
    .setName('play')
    .setDescription('Plays a song')
    .addStringOption((option) => 
        option
            .setName('song')
            .setDescription('The song to play')
            .setRequired(true)
    )

    export async function execute(interaction: CommandInteraction) {
        console.log('Execute function called');
        const player = useMainPlayer();
       
        //register the player to play youtube with youtube credentials
        player.extractors.register(YoutubeiExtractor, {
            authentication: process.env.YOUTUBEI_ACCESS
        })

        //gets the song entry from the user
        const query = interaction.options.get('song')?.value as string || '';
        
        //checks theres a member in the guild
        if (!(interaction.member instanceof GuildMember)) {
            return interaction.reply('You must be in a voice channel to use this command');
        }
    
        const channel = interaction.member.voice.channel;

        //checks if the member is in a voice channel
        if (!channel) {
            return interaction.reply('You need to be in a voice channel to play music!');
        }
    
        await interaction.deferReply();
    
        try {
            const {track} = await player.play(channel, query, {
                nodeOptions: {
                    metadata: interaction,
                    leaveOnEmpty: false,
                    leaveOnEnd: false,
                }
            });
        
            return interaction.followUp(`Started playing **${track.title}**!`);

        } catch (error) {
            console.error('Playback error:', error);
            return interaction.followUp(`Something went wrong: ${error}`);
        }
    }