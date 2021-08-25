import { Interaction } from "discord.js";

import { CommandList } from "../commands/_CommandList";
import { logHandler } from "../utils/logHandler";

/**
 * Handles the interactionCreate event.
 *
 * @param {Interaction} interaction The interaction received over the gateway.
 */
export const interactionCreate = async (
  interaction: Interaction
): Promise<void> => {
  try {
    if (interaction.isCommand()) {
      for (const Command of CommandList) {
        if (interaction.commandName === Command.data.name) {
          await Command.run(interaction);
          break;
        }
      }
    }
  } catch (err) {
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
