import {
  ButtonInteraction,
  CommandInteraction,
  Guild,
  GuildMember,
  Message,
  MessageButton,
  MessageActionRow,
  MessageSelectMenu,
} from "discord.js";

import { logHandler } from "../utils/logHandler";
import { sendLogMessage } from "../utils/sendLogMessage";

import { verifyUser } from "./verifyUser";

/**
 * Handles the question for the verification process.
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const question = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    if (!interaction.member) {
      await interaction.editReply("Oh no!");
      return;
    }
    const member = interaction.member as GuildMember;
    const question = new MessageSelectMenu()
      .setCustomId("channel-name")
      .setPlaceholder("Are you a bot?")
      .addOptions([
        {
          label: "Beep boop",
          description: "Beep Boop, Boop Beep",
          value: "beep",
        },
        {
          label: "NO",
          description: "No, I am not a Bot",
          value: "no",
        },
      ]);

    const component = new MessageActionRow().addComponents([question]);

    const first = (await interaction.editReply({
      content: "Please complete this form to gain access to the server.",
      components: [component],
    })) as Message;

    const collector = first.createMessageComponentCollector({
      filter: (el) => el.user.id === interaction.user.id,
      max: 1,
      time: 60000,
    });

    collector.on("collect", async (collected) => {
      if (collected.isSelectMenu()) {
        if (collected.values[0] === "no") {
          await interaction.editReply({
            content: "Correct! Please wait...\nYou will be given access shortly...",
            components: []
          });
          setTimeout(
            async () =>
              await verifyUser(
                interaction.member as GuildMember,
                interaction.guild as Guild
              ),
            5000
          );
          const button = new MessageButton()
            .setLabel("Check out the Server Guide")
            .setURL(
              "https://discord.com/channels/810180621930070088/913086515574358066/913110202218319932"
            )
            .setStyle("LINK");
          await collected.reply({
            content:
              "For more info about the TEC, check out the <#913086515574358066> channel",
            components: [new MessageActionRow().addComponents(button)],
            ephemeral: true,
          });
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
            try {
              await member.kick();
              await sendLogMessage(
                `${interaction.user.tag} was kicked for answering the question incorrectly: ${collected.values[0]}`
              );
            } catch (e) {
              const err = e as Error;
              logHandler.log("error", `${err.message}\n${err.stack}`);
              await sendLogMessage(
                `${interaction.user.tag} can not be kicked for answering the question incorrectly... They are immune...`
              );
            }
          }, 5000);
        }
      }
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
