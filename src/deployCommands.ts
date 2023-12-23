//add new coomands 
import {REST, Routes} from 'discord.js';
import {config} from './config';
import {commands} from './commands';

const commandData = Object.values(commands).map((command) => command.data);
const rest = new REST({version: '10'}).setToken(config.TOKEN);

type DeplyoCommandProps = {
    guildId: string;
};

export async function deployCommands(){
    console.log('STARTING TO DEPLOY APPLICATION COMMANDS');
    try {
        console.log('RELOADING APPLICATION COMMANDS');
        await rest.put(
            Routes.applicationGuildCommands(config.CLIENT_ID, config.SERV_ID),
            {
                body: commandData
            }
        );
        console.log('SUCCESSFULLY RELOADED APPLICATION COMMANDS')

    } catch(error){
        console.error(error);
    }
}