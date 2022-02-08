import { ButtonInteraction } from "discord.js";

import { logHandler } from "../../../utils/logHandler";
//import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the content for "about Token engineering".
 *
 * @param {ButtonInteraction} interaction The source interaction.
 */
export const aboutTE = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    await interaction.editReply({
      content:
        "Token Engineering is an emerging engineering discipline focused on holistic systems design and the theory, practice and tools used to design and verify tokenized ecosystems",
      components: [],
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
