import {SlashCommandBuilder, CommandInteraction, GuildMember} from 'discord.js';
const { useMainPlayer } = require('discord-player');
const {GuildQueuePlayerNode} = require('discord-player');

export const data = new SlashCommandBuilder()
    .setName('skip')
    .setDescription('Skips the current song');


export async function execute(interaction: CommandInteraction){
    const player = useMainPlayer();
    const queue = GuildQueuePlayerNode();

    if(interaction.member instanceof GuildMember){
        const channel = interaction.member?.voice.channel;
        await interaction.deferReply();
        try {
            const {track} = await player.current(channel);
            console.log('queue', queue)

            await queue.skip()

            return interaction.followUp(`Skipping the song`);
        } catch(error){
            console.log('error', error)
            return interaction.followUp(`Something went wrong: ${error}`);
        }
    }
}