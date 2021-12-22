import {
  Message,
  ButtonInteraction,
  CommandInteraction,
  MessageButton,
  MessageActionRow,
} from "discord.js";

import { logHandler } from "../../../utils/logHandler";
//import { sendLogMessage } from "../utils/sendLogMessage";

import { aboutCommons } from "./aboutCommons";
import { aboutMVV } from "./aboutMVV";
import { aboutTE } from "./aboutTE";

/**
 * Handles the content for "What is the TEC?" button.
 * (button with id - "about").
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const aboutMenu = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    const teButton = new MessageButton()
      .setCustomId("what-is-te")
      .setLabel("What is Token Engineering?")
      .setStyle("PRIMARY");

    const commonsButton = new MessageButton()
      .setCustomId("what-is-a-commons")
      .setLabel("What is a Commons?")
      .setStyle("PRIMARY");

    const mvvButton = new MessageButton()
      .setCustomId("mvv")
      .setLabel("Mission, Vision, Values")
      .setStyle("PRIMARY");

    const websiteButton = new MessageButton()
      .setLabel("TEC Website")
      .setURL("https://tecommons.org/")
      .setStyle("LINK");

    const buttons = new MessageActionRow().addComponents(
      teButton,
      commonsButton,
      mvvButton,
      websiteButton
    );

    const message = (await interaction.editReply({
      content:
        "The TEC is an **open source** and **collectively governed project** that aims to create a token economy that will accelerate the responsible & ethical creation of public goods within the TE community. The TEC is the first product of the Common Stack. ([Deep Dive](https://medium.com/token-engineering-commons/kicking-off-the-token-engineering-commons-be6a253cba81))\n\nJump directly to our [TEC Handbook](https://token-engineering-commons.gitbook.io/tec-handbook)",
      components: [buttons],
    })) as Message;

    const collector = message.createMessageComponentCollector({
      filter: (click) => click.user.id === interaction.user.id,
      time: 270000,
    });

    collector.on("collect", async (click) => {
      await click.deferUpdate();
      switch (click.customId) {
        case "what-is-te":
          await aboutTE(interaction);
          break;
        case "what-is-a-commons":
          await aboutCommons(interaction);
          break;
        case "mvv":
          await aboutMVV(interaction);
          break;
      }
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
