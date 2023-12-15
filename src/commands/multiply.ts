import {CommandInteraction, SlashCommandBuilder} from "discord.js";

//the data about the command
export const data = new SlashCommandBuilder()
    .setName("multiply")
    .setDescription("Multiplies two numbers")
    .addIntegerOption((option) =>
        option
        //name of the option to refer to it later
            .setName("num1")
            .setDescription("The first number")
            .setRequired(true)
    )
    .addIntegerOption((option) =>
        option
            .setName("num2")
            .setDescription("The second number")
            .setRequired(true)
    );

//function to execute whatever the command is meant to do
export async function execute(interaction: CommandInteraction){

    //how to get number options from the options in the command
    const num1 = interaction.options.get("num1")?.value as number || 0 ;
    const num2 = interaction.options.get("num2")?.value as number || 0;

    console.log('top', num1, num2)


    if (num1 === null || num2 === null) {
        return interaction.reply("Invalid numbers provided");
    }

    return interaction.reply(`The product of ${num1} and ${num2} is ${num1 * num2}. `);
}