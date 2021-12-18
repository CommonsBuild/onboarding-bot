import { Message, ButtonInteraction } from "discord.js";

import { logHandler } from "../../../utils/logHandler";
//import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the content for "about WGs".
 *
 * @param {ButtonInteraction} interaction The command interaction.
 */
export const organisationMenu = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    const message = (await interaction.editReply({
      content:
        "The Token Engineering Commons is comprised of 11 Working Groups that collaborate to promote our Vision which is to advance token engineering through enabling the creation of ethical, safe, resilient and diverse economic systems to benefit societies around the world.\n\nOur Working Groups are: Stewards, SoftGov, Legal, Transparency, Omega, Gravity, Parameters, Comms, Commons Swarm, Labs, Communitas\n\nThe [workgroup website page](https://tecommons.org/workgroups) provides more info and the [TEC calendar](https://calendar.google.com/calendar/u/0/embed?src=5mkep1ad1j860k6g7i7fr8plq0@group.calendar.google.com&ctz=Europe/Berlin) provides the schedule for all WG calls.\nAll calls are open to anyone to join. Hope we see you there!",
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
