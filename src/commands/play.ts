import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { GuildMember } from 'discord.js';

const { useMainPlayer } = require('discord-player');

export const data = new SlashCommandBuilder()
    .setName('play')
    .setDescription('Plays a song')
    .addStringOption((option) => 
        option
            .setName('song')
            .setDescription('The song to play')
            .setRequired(true)
    )

export async function execute(interaction: CommandInteraction){
    const player = useMainPlayer();
    const query = interaction.options.get('song')?.value as string || '';
    //connect to a voice channel
    if (interaction.member instanceof GuildMember) {
        //connect to a voice channel
        const channel = interaction.member?.voice.channel;
        //const channel = await player.connect(interaction.member.voice.channel!);
        await interaction.deferReply();
        try {
            const {track} = await player.play(channel, query, {
                nodeOptions: {
                    metadata: interaction
                }
            });

            return interaction.followUp(`queing up ${track.title}`)
        } catch(error){
            console.log('error', error)
            return interaction.followUp(`Something went wrong: ${error}`);
        }

    } else {
        // Handle the case where interaction.member is not a GuildMember
        console.log('not in a voice channel')
        return interaction.reply('You must be in a voice channel to use this command');
    }
}
