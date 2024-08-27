import { SlashCommandBuilder, CommandInteraction} from "discord.js";
import malApi from '../api/animeAPI';

export const data = new SlashCommandBuilder()
    .setName("anime")
    .setDescription("Show top 10 anime of the week");

export async function execute(interaction: CommandInteraction){
    await interaction.deferReply();
    console.log(process.env.MAL_ID);

    try{
        // get the top animes for the week 
        const response = await malApi.get('anime/ranking', {
            headers: {
                'X-MAL-CLIENT-ID': process.env.MAL_ID,
            },
            params: {
                ranking_type: 'airing', 
                limit: 15,
            },
        });

        console.log('response', response.data)
        const topAnime = response.data.data;

        if (topAnime.length === 0) {
            return interaction.editReply('No top anime found for this week.');
        }

        // Prepare a response message with the top anime titles
        const animeList = topAnime
            .map((anime: any, index: number) => `${index + 1}. ${anime.node.title}`)
            .join('\n');

        return interaction.editReply(`**Top Anime for This Week:**\n${animeList}`);

    } catch(error){
        console.error('Error:', error);
        return interaction.followUp(`Something went wrong: ${error}`);
    }
}