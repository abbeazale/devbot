import { CommandInteraction, SlashCommandBuilder } from "discord.js";


//the data about the command
export const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!")

//function to execute whatever the command is meant to do 
export async function execute(interaction: CommandInteraction){
    
    return interaction.reply("Pong!");
}