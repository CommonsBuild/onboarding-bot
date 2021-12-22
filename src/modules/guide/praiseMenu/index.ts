import { ButtonInteraction, Message } from "discord.js";

import { logHandler } from "../../../utils/logHandler";
//import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the content for "what is praise?".
 *
 * @param {ButtonInteraction} interaction The command interaction.
 */
export const praiseMenu = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    const message = (await interaction.editReply({
      content:
        "Praise is a reward mechanism based on gratitude that is quantified into Impact Hours which will turn into TEC tokens.\n\nThe TEC borrowed the Praise system from the [Commons Stack](https://commonsstack.org/) to create a culture of gratitude. Multiple community members have the ability to 'dish praise' to other members for their contributions. Praise is subjective to capture not only clear actions but also less concrete contributions like care work.",
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
