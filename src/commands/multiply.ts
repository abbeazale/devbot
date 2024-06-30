import {CommandInteraction, SlashCommandBuilder} from "discord.js";

//the data about the command
export const data = new SlashCommandBuilder()
    .setName("multiply")
    .setDescription("Multiplies two numbers")
    .addStringOption(option =>
        option.setName("numbers")
            .setDescription("Numbers to operate on (space-separated)")
            .setRequired(true)
);

//function to execute whatever the command is meant to do
export async function execute(interaction: CommandInteraction){

    const numbersString = interaction.options.get("numbers")?.value as string;

    if (!numbersString) {
        await interaction.reply("Invalid input provided");
        return;
    }

    const numbers: number[] = numbersString.split(" ").map(Number);

    if (numbers.some(isNaN)) {
        await interaction.reply("Invalid numbers provided");
        return;
    }

    let result: number = numbers.reduce((a, b) => a * b);

    return interaction.reply(`The result of ${numbers.join(" * ")} is ${result}`);
}