import { ButtonInteraction } from "discord.js";

import { logHandler } from "../../../utils/logHandler";
//import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the content for "MVV".
 *
 * @param {ButtonInteraction} interaction The source Interaction.
 */
export const aboutMVV = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    await interaction.editReply({
      content:
        "**Vision**\n\nEnable the creation of ethical, safe, resilient and diverse economic systems to benefit societies around the world\n\n**Mission**\n\nOur goal is to become a [Schelling Point](https://nav.al/schelling-point) for the token engineering community.\nOur economic layer will fund projects that discover, develop and proliferate the best practices for engineering safe tokenized economies, while aligning our collective success with the individual benefit of token holders.\nOur social layer is even more important, as it will unite the token engineering field around the ethical principles, standards, tools and methodologies that emerge as this nascent field advances.\n\n**Values**\n\nOur Commons operates from a prosocial, human-centered perspective and prioritizes the advancement of token engineering over short-term profits.\nIntegrity, curiosity, constructive inquiry, presence and gratitude are foundational for maintaining mutual respect within our growing community.\nWe encourage our members to be radically open source, non-hierarchical, transparent in their intentions and accountable for their actions.",
      components: [],
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
