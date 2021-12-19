import { ButtonInteraction, Message } from "discord.js";

import { logHandler } from "../../../utils/logHandler";
//import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the content for "contribute".
 *
 * @param {ButtonInteraction} interaction The command interaction.
 */
export const contributeMenu = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    const message = (await interaction.editReply({
      content:
        "1. Come say hello on our Orientation call, every Wednesday, 7am PST / 6pm CET on our Community hall channel on discord.\n2. Join our next Community Call on Thursday, 9am PST / 8pm CET on our Community hall channel on Discord.\n3. Feel free to join any of our calls! Add one or more to your calendar:\nhttps://calendar.google.com/calendar/u/0/embed?src=5mkep1ad1j860k6g7i7fr8plq0@group.calendar.google.com&ctz=Europe/Berlin\n4. Connect with us and stay up to date by following the TEC on [Twitter](https://twitter.com/tecmns) and [Medium](https://medium.com/token-engineering-commons).\n\nHave a look around our [Sprint board](https://app.zenhub.com/workspaces/tec-coordination-workspace-5fad0d3fbbe4da0011c2f40d/board?repos=306706322,349409011) and comment on any issues that you think you can help with!",
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
