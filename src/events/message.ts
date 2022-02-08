/*
 * This file is part of the tec-onboarding-bot project
 * The contents are derived from the commit-your-code-bot project
 *
 * Copyright (c) 2021 nhcarigan
 * Authors: Naomi Carrigan
 *
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

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
      "We’re glad you are here!\n\nBefore we can let you in, we need to know you are a human and not a bot. All you need to do in answer one simple question but beware because answering wrong will get you kicked from the server!\nClick the button below to get started.\nIf you get stuck, DM <@!558192816308617227>."
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
  if (
    message.content === "~journey-setup" &&
    message.author.id === "558192816308617227"
  ) {
    const embed = new MessageEmbed();
    embed.setTitle("Welcome to the TEC!");
    embed.setDescription(
      "Hello there! This channel provides a general overview about the TEC, click on the buttons below to start your journey into our community."
    );

    const aboutButton = new MessageButton()
      .setCustomId("about")
      .setLabel("What is the TEC?")
      .setStyle("PRIMARY");

    const wgButton = new MessageButton()
      .setCustomId("wg")
      .setLabel("How is the TEC organised?")
      .setStyle("PRIMARY");

    /*
    const discordButton = new MessageButton()
      .setCustomId("discord-channels")
      .setLabel("How to use the Discord?")
      .setStyle("PRIMARY");
    */

    const proposalButton = new MessageButton()
      .setCustomId("proposal")
      .setLabel("How to make a proposal?")
      .setStyle("PRIMARY");

    const praiseButton = new MessageButton()
      .setCustomId("praise")
      .setLabel("What is Praise?")
      .setStyle("PRIMARY");

    const buttonsA = new MessageActionRow().addComponents(
      aboutButton,
      wgButton,
      praiseButton
    );
    const buttonsB = new MessageActionRow().addComponents(
      proposalButton
      //discordButton
    );
    const buttonsC = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("contribute")
        .setLabel("I want to contribute to the TEC!")
        .setStyle("SUCCESS")
    );
    await message.channel.send({
      embeds: [embed],
      components: [buttonsA, buttonsB, buttonsC],
    });
    await message.delete();
  }
};
