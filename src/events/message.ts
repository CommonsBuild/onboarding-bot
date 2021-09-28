import {
  Message,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
} from "discord.js";

/**
 * Handles the message create event. Essentially used just to send the
 * initial verification post.
 *
 * @param {Message} message The Discord message object received.
 */
export const onMessage = async (message: Message): Promise<void> => {
  if (
    message.content === "~init" &&
    message.author.id === "558192816308617227"
  ) {
    const embed = new MessageEmbed();
    embed.setTitle("Welcome to the TEC!");
    embed.setDescription(
      "In order to verify, you need to answer the questions. Answering incorrectly will result in a kick. Failure to verify in 5 minutes will result in a kick.\n\nClick the button below to get started.\n\nIf you get stuck, DM <@!558192816308617227>."
    );

    const button = new MessageButton()
      .setLabel("Click here to verify!")
      .setEmoji("✅")
      .setCustomId("verify")
      .setStyle("SUCCESS");
    const row = new MessageActionRow().addComponents(button);

    await message.channel.send({ embeds: [embed], components: [row] });
    await message.delete();
  }
};
