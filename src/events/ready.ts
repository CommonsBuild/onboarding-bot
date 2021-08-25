import { REST } from "@discordjs/rest";
import { APIApplicationCommandOption, Routes } from "discord-api-types/v9";
import { Client } from "discord.js";

import { CommandList } from "../commands/_CommandList";
import { logHandler } from "../utils/logHandler";
import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the ready event, which fires when the bot connects
 * to the gateway.
 *
 * @param {Client} bot The Bot instance.
 */
export const ready = async (bot: Client): Promise<void> => {
  try {
    logHandler.log("debug", "Connected to Discord!");

    const rest = new REST({ version: "9" }).setToken(
      process.env.TOKEN as string
    );
    const commandData: {
      name: string;
      description: string;
      options: APIApplicationCommandOption[];
    }[] = [];

    CommandList.forEach((command) => commandData.push(command.data.toJSON()));
    await rest.put(
      Routes.applicationGuildCommands(
        bot.user?.id || "missing token",
        process.env.GUILD_ID as string
      ),
      { body: commandData }
    );

    logHandler.log("debug", "registered commands");
    await sendLogMessage(
      `Bot has loaded! Version ${process.env.npm_package_version}`
    );
  } catch (err) {
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
