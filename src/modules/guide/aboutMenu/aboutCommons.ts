import { ButtonInteraction } from "discord.js";

import { logHandler } from "../../../utils/logHandler";
//import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the contnet for "about Commons".
 *
 * @param {ButtonInteraction} interaction The source interaction.
 */
export const aboutCommons = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    await interaction.editReply({
      content:
        "Commons are resources that groups of people (communities, organizations) create and manage for individual and collective benefit. These resources are held collectively, not owned privately.\n[More Info](https://medium.com/commonsstack/automating-ostrom-for-effective-dao-management-cfe7a7aea138)",
      components: [],
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
