import {
  CommandInteraction,
  GuildMember,
  Message,
  MessageActionRow,
  MessageSelectMenu,
} from "discord.js";

import { logHandler } from "../utils/logHandler";

import { questionTwo } from "./questionTwo";

/**
 * Handles the first question for the verification process.
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const questionOne = async (
  interaction: CommandInteraction
): Promise<void> => {
  try {
    if (!interaction.member) {
      await interaction.editReply("Oh no!");
      return;
    }
    const member = interaction.member as GuildMember;
    const question = new MessageSelectMenu()
      .setCustomId("server-owner")
      .setPlaceholder("Who is the owner of the server?")
      .addOptions([
        {
          label: "nhcarrigan",
          description: "Nicholas Carrigan is the owner of the server.",
          value: "nhcarrigan",
        },
        {
          label: "DThompsonDev",
          description: "Danny Thompson is the owner of the server.",
          value: "danny",
        },
        {
          label: "Me!",
          description: "I am the owner of the server.",
          value: "self",
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
        if (collected.values[0] === "danny") {
          await questionTwo(interaction);
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
