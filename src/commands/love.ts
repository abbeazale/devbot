import {CommandInteraction, SlashCommandBuilder} from "discord.js";

//the data about the command
export const data = new SlashCommandBuilder()
    .setName("love")
    .setDescription("Gives Love");

//function to execute whatever the command is meant to do
export async function execute(interaction: CommandInteraction){
    return interaction.reply("I love you  <3");
}