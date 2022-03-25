import {
  ButtonInteraction,
  Message,
  MessageButton,
  MessageActionRow,
} from "discord.js";

import { logHandler } from "../../../utils/logHandler";
//import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the content for "contribute".
 *
 * @param {ButtonInteraction} interaction The command interaction.
 */
export const acquireTECMenu = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    const message = (await interaction.editReply({
      content:
        "There are two ways to make an impact: One is to contribute your talent and time. The other is by acquiring $TEC, which allows you to help steer the TEC while directly supporting its [mission](https://token-engineering-commons.gitbook.io/tec-handbook/what-is-the-tec/mission-vision-and-values). [Here's how](https://token-engineering-commons.gitbook.io/tec-handbook/how-to-purchase-usdtec).",
      components: [
        new MessageActionRow().addComponents(
          new MessageButton()
            .setLabel("How to purchase $TEC?")
            .setURL(
              "https://token-engineering-commons.gitbook.io/tec-handbook/how-to-purchase-usdtec"
            )
            .setStyle("LINK")
        ),
      ],
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
