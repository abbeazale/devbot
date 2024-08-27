import { SlashCommandBuilder, CommandInteraction } from "discord.js";
import cryptoApi from "../api/crypto";

export const data = new SlashCommandBuilder()
    .setName("crypto")
    .setDescription("Show current crypto prices");

export async function execute(interaction: CommandInteraction){
    await interaction.deferReply();
    console.log(process.env.CRYPTO_KEY);

    try{
        // get the top animes for the week 
        const response = await cryptoApi.get('v2/cryptocurrency/quotes/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': process.env.CRYPTO_KEY,
            },
            params: {
                symbol: 'BTC,ETH',
                convert: 'CAD'
            }
        });

        console.log('response.data:', JSON.stringify(response.data, null, 2));
        const btcPrice = response.data.data.BTC[0].quote.CAD.price;
        const ethPrice = response.data.data.ETH[0].quote.CAD.price;

        if (!btcPrice || !ethPrice) {
            return interaction.editReply('Couldn\'t get the crypto prices.');
        }

         // Format the prices to two significant figures
        const formattedBtcPrice = btcPrice.toFixed(2);
        const formattedEthPrice = ethPrice.toFixed(2);

    
        return interaction.editReply(`**Bitcoin price: **$${formattedBtcPrice} CAD\n**Ethereum price: **$${formattedEthPrice} CAD`);

    } catch(error){
        console.error('Error:', error);
        return interaction.followUp(`Something went wrong: ${error}`);
    }
}