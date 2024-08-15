//initializing bot to discord making it online

import { Client } from "discord.js";
import { commands } from "./commands";
import { config } from "./config";
import { deployCommands } from "./deployCommands";
import {Player } from 'discord-player';


export const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'DirectMessages', "GuildVoiceStates", "GuildMembers"]
})

const player = new Player(client);

client.on('ready', async (guild) => {
    console.log('Bot is ready!!');
    console.log('deplying commands');
    
    //adds new commands to the server
    deployCommands();
    console.log('commands deployed');

    //initiatize the discord player extractors
    await player.extractors.loadDefault((ext) => ext !== 'YouTubeExtractor');

    // this event is emitted whenever discord-player starts to play a track
    player.events.on('playerStart', (queue, track) => {});

    console.log('player ready');

   
})

//event for when a new user interaction has been created
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        
        return;
    }
    const {commandName} = interaction;
    if(commands[commandName as keyof typeof commands]) {
        commands[commandName as keyof typeof commands].execute(interaction) ;
        console.log('command executed', commandName);
    }
});

client.login(config.TOKEN);