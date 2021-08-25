import {
  CommandInteraction,
  GuildMember,
  Message,
  MessageActionRow,
  MessageSelectMenu,
} from "discord.js";

import { logHandler } from "../utils/logHandler";

import { questionThree } from "./questionThree";

/**
 * Handles the second question for the verification process.
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const questionTwo = async (
  interaction: CommandInteraction
): Promise<void> => {
  try {
    if (!interaction.member) {
      await interaction.editReply("Oh no!");
      return;
    }
    const member = interaction.member as GuildMember;
    const question = new MessageSelectMenu()
      .setCustomId("server-name")
      .setPlaceholder("What is the name of this server?")
      .addOptions([
        {
          label: "Commit Your Code!",
          description: "The name of this server is Commit Your Code!",
          value: "coc",
        },
        {
          label: "nhcommunity",
          description: "The name of this server is nhcommunity!",
          value: "nh",
        },
        {
          label: "Discord Developers",
          description: "The name of this server is Discord Developers!",
          value: "ddev",
        },
      ]);

    const component = new MessageActionRow().addComponents([question]);

    const first = (await interaction.editReply({
      content: "Please complete this form to gain access to the server.",
      components: [component],
    })) as Message;

    const collector = first.createMessageComponentCollector({
      // eslint-disable-next-line jsdoc/require-jsdoc
      filter: (el) => el.user.id === interaction.user.id,
      max: 1,
      time: 60000,
    });

    collector.on("collect", async (collected) => {
      if (collected.isSelectMenu()) {
        if (collected.values[0] === "coc") {
          await questionThree(interaction);
        } else {
          await interaction.editReply({
            content: "You failed to select the correct answer.",
            components: [],
          });
          setTimeout(async () => await member.kick(), 5000);
        }
      }
    });
  } catch (err) {
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
