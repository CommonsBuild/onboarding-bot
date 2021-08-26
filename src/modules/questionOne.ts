import {
  ButtonInteraction,
  GuildMember,
  Message,
  MessageActionRow,
  MessageSelectMenu,
} from "discord.js";

import { logHandler } from "../utils/logHandler";
import { sendLogMessage } from "../utils/sendLogMessage";

import { questionTwo } from "./questionTwo";

/**
 * Handles the first question for the verification process.
 *
 * @param {ButtonInteraction} interaction The command interaction.
 */
export const questionOne = async (
  interaction: ButtonInteraction
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
      content:
        "Hello! Welcome to the verification process!\nYou will be asked a series of three questions. You have one minute to answer each questions. Answering incorrectly will result in a kick.\nTo select an answer, click the dropdown!",
      components: [component],
    })) as Message;

    const collector = first.createMessageComponentCollector({
      filter: (el) => el.user.id === interaction.user.id,
      max: 1,
      time: 60000,
    });

    collector.on("collect", async (collected) => {
      if (collected.isSelectMenu()) {
        if (collected.values[0] === "danny") {
          await collected.reply({
            content: "Correct! Please check the form for the next question.",
            ephemeral: true,
          });
          await questionTwo(interaction);
        } else {
          await interaction.editReply({
            content: "You failed to select the correct answer.",
            components: [],
          });
          await collected.reply({
            content: "You will now be kicked.",
            ephemeral: true,
          });
          setTimeout(async () => {
            await member.kick();
            await sendLogMessage(
              `${interaction.user.tag} was kicked for answering the first question incorrectly.`
            );
          }, 5000);
        }
      }
    });
  } catch (err) {
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
