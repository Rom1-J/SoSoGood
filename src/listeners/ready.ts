import {Client, Interaction} from "discord.js";
import {CommandRegisterer} from "../Command";
import {EmailCommand} from "../commands/email";
import {FeelCommand} from "../commands/feel";
import {MamacitaCommand} from "../commands/mamacitaCommand";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        console.log("Chargement des commandes");

        CommandRegisterer.registerCommands([EmailCommand, FeelCommand, MamacitaCommand]);
        console.log(CommandRegisterer.getCommands)
        await client.application.commands.set(CommandRegisterer.getCommands);

        console.log("Soma est connecté !");
    });
};