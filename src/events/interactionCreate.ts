import { Interaction } from "discord.js";

import {
  about,
  aboutWG,
  aboutPraise,
  aboutProposals,
  usingDiscord,
  contribute,
} from "../modules/about";
// import { schedule } from "../modules/schedule";
import { question } from "../modules/question";
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
          await question(interaction);
          break;
        case "about":
          await interaction.deferReply({ ephemeral: true });
          await about(interaction);
          break;
        case "wg":
          await interaction.deferReply({ ephemeral: true });
          await aboutWG(interaction);
          break;
        case "contribute":
          await interaction.deferReply({ ephemeral: true });
          await contribute(interaction);
          break;
        case "praise":
          await interaction.deferReply({ ephemeral: true });
          await aboutPraise(interaction);
          break;
        case "proposal":
          await interaction.deferReply({ ephemeral: true });
          await aboutProposals(interaction);
          break;
        case "discord-channels":
          await interaction.deferReply({ ephemeral: true });
          await usingDiscord(interaction);
          break;

        /*
        case "time":
          await interaction.deferReply({ ephemeral: true });
          await schedule(interaction);
        */
      }
    }
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
