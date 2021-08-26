import { Interaction } from "discord.js";

import { questionOne } from "../modules/questionOne";
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
    if (interaction.isButton()) {
      switch (interaction.customId) {
        case "verify":
          await interaction.deferReply({ ephemeral: true });
          await questionOne(interaction);
      }
    }
  } catch (err) {
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
