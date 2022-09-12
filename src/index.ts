import Discord, { GatewayIntentBits, Partials } from 'discord.js';
import * as dotenv from 'dotenv';

import * as loader from './modules/loader';

import log from './utils/log';
import * as logExtra from './utils/logExtra';
import deployCommands from './utils/deployCommands';

import { Client } from './typings/discord';

dotenv.config();

const client: Client = new Discord.Client({
    intents: [
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.Guilds
    ],
    partials: [
        Partials.Channel
    ]
});

/**
 * Start up the bot.
 */
const main = async (): Promise<void> => {
    console.clear();
    logExtra.logSplash();

    await loader.loadCommands(client);
    await loader.loadEvents(client);

    // await loader.loadTickets(client);

    if (process.env.NODE_ENV === `development`) {
        logExtra.logHeader();
        await deployCommands(client);
    }

    logExtra.logHeader();
    await client.login(process.env.DISCORD_TOKEN).catch(() => log(`red`, `Failed to authenticate client with application.`));
};

// Start the program.
void main();
