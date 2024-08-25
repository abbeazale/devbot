import { CommandInteraction, GuildMember, SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kicks a user from the server')
    .addUserOption((option) => 
        option
            .setName('user')
            .setDescription('The user to kick')
            .setRequired(true)
            
    )
    .addStringOption((option) =>
        option
            .setName('reason')
            .setDescription('The reason for the kick')
            .setRequired(true)
    )

    export async function execute(interaction: CommandInteraction) {

        if (!interaction.memberPermissions?.has(PermissionFlagsBits.Administrator)) {
            return interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
        }

        const user = interaction.options.getUser('user');
        const reason = interaction.options.get('reason')?.value as string || 'No reason';

         //exits if cant get the user id 
         if (!user) {
            return interaction.reply({
                content: 'User not found.',
                ephemeral: true
            });
        }

        // Check if the user is trying to kick themselves
        if (user?.id === interaction.user.id) {
            return interaction.reply({
                content: 'You cannot kick yourself.',
                ephemeral: true
            });
        }

        const member = interaction.guild?.members.cache.get(user.id);

        if (!member) {
            return interaction.reply({
                content: 'User is not a member of this server.',
                ephemeral: true
            });
        }

        if (!member.kickable) {
            return interaction.reply({
                content: 'I do not have permission to kick this user.',
                ephemeral: true
            });
        }

        try {
            await member.kick(reason);
            return interaction.reply(`kicked ${user} for: ${reason}`);
        } catch (error) {
            console.error(error);
            return interaction.reply({
                content: 'An error occurred while trying to kick the user.',
                ephemeral: true
            });
        }
    
    }

    



