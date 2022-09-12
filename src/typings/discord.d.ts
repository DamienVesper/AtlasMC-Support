import * as Discord from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import TicketManager from '../modules/TicketManager';

interface Command {
    cmd: SlashCommandBuilder
    run: (client: Discord.Client, interaction: Discord.CommandInteraction) => void
}

interface Event {
    callback: (...any) => void
}

interface Client extends Discord.Client {
    commands?: Map<string, Command>
    events?: Map<string, Event>

    tickets?: TicketManager
}

export {
    Client,
    Command,
    Event
};
