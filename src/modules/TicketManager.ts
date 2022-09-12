import * as Discord from 'discord.js';

import { Categories as TicketCategories } from '../typings/tickets';

class Ticket {
    owner: Discord.Snowflake;
    members: Discord.Snowflake[];

    channel: Discord.Snowflake;

    constructor (interaction: Discord.CommandInteraction, type: TicketCategories, id: number) {
        this.owner = interaction.user.id;

        const channelName = `${type === `support`
            ? `ticket`
            : type === `bug`
                ? `bugreport`
                : type}-${ticketID}`;

        const channel = this.ticketCounter;
    }
}

class TicketManager {
    tickets: Record<TicketCategories, Map<Discord.Snowflake, Ticket>>;
    ticketIDs: string[];

    ticketCounter: number;

    constructor () {
        this.tickets = {
            support: new Map(),
            punishment: new Map(),
            payment: new Map(),
            bug: new Map()
        };

        this.ticketCounter = 0;
    }

    /**
     * Create a ticket.
     * @param interaction The invoking interaction.
     * @param type The type of ticket to open.
     * @returns 
     */
    createTicket = async (interaction: Discord.CommandInteraction, type: TicketCategories): Promise<Ticket | void> => {
        const userOwnsTicket = [...this.tickets[type].values()].map(ticket => ticket.owner).includes(interaction.user.id);
        if (userOwnsTicket) {
            await interaction.reply({ content: `You already have a ticket open in this category!`, ephemeral: true });
            return;
        }

        const ticket = new Ticket(interaction, type, );
    };
}

export default TicketManager;
