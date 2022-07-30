import { ActivityType } from 'discord.js';

import log from '../utils/log';

import { Client } from '../typings/discord';

/**
 * Refresh the activity of the client.
 * @param client The Discord client to use.
 */
const refreshActivity = async (client: Client): Promise<void> => {
    client.user?.setPresence({
        activities: [{
            name: `play.atlasmc.org`,
            type: ActivityType.Playing
        }],

        status: `dnd`
    });

    log(`green`, `Status updated.`);
};

export default refreshActivity;
