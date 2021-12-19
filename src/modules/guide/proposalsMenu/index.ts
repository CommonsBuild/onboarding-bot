import { ButtonInteraction, Message } from "discord.js";

import { logHandler } from "../../../utils/logHandler";
//import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the content for "making a proposal".
 *
 * @param {ButtonInteraction} interaction The command interaction.
 */
export const proposalsMenu = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    const message = (await interaction.editReply({
      content:
        "Great! The purpose of the TEC is to advance token engineering!\n\nIn order to submit a proposal for funding for a project, the first step is to share it on the TEC Forum for Advice Process. You can do that [here](https://forum.tecommons.org/c/proposals/pre-proposal-phase/14).\n\nAfter the Commons Upgrade, you will then be able to submit the same proposal to Conviction Voting for community approval.",
    })) as Message;

    const collector = message.createMessageComponentCollector({
      time: 270000,
    });

    collector.on("end", async () => {
      await interaction.editReply({
        content:
          "Sub-Menu timed out after 45 minutes...\nTo remove remnant, press 'dismiss message' below...",
        components: [],
      });
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
