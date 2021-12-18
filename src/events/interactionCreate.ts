import { Interaction } from "discord.js";

import { aboutMenu } from "../modules/guide/aboutMenu";
import { contributeMenu } from "../modules/guide/contributeMenu";
import { organisationMenu } from "../modules/guide/organisationMenu";
import { praiseMenu } from "../modules/guide/praiseMenu";
import { proposalsMenu } from "../modules/guide/proposalsMenu";
import { question } from "../modules/verification/question";
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
          await aboutMenu(interaction);
          break;
        case "wg":
          await interaction.deferReply({ ephemeral: true });
          await organisationMenu(interaction);
          break;
        case "praise":
          await interaction.deferReply({ ephemeral: true });
          await praiseMenu(interaction);
          break;
        case "proposal":
          await interaction.deferReply({ ephemeral: true });
          await proposalsMenu(interaction);
          break;
        case "contribute":
          await interaction.deferReply({ ephemeral: true });
          await contributeMenu(interaction);
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
