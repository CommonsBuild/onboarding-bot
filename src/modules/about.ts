import {
  ButtonInteraction,
  CommandInteraction,
  MessageButton,
  MessageActionRow,
} from "discord.js";

import { logHandler } from "../utils/logHandler";
//import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the content for "about" button.
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const about = async (interaction: ButtonInteraction): Promise<void> => {
  try {
    const teButton = new MessageButton()
      .setCustomId("te")
      .setLabel("What is Token Engineering?")
      .setStyle("PRIMARY");

    const commonsButton = new MessageButton()
      .setCustomId("commons")
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
    //const response =
    await interaction.editReply({
      content:
        "The TEC is an **open source** and **collectively governed project** that aims to create a token economy that will accelerate the responsible & ethical creation of public goods within the TE community. The TEC is the first product of the Common Stack. ([Deep Dive](https://medium.com/token-engineering-commons/kicking-off-the-token-engineering-commons-be6a253cba81))\n\nJump directly to our [TEC Handbook](https://token-engineering-commons.gitbook.io/tec-handbook)",
      components: [buttons],
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the content for "about Token engineering".
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const aboutTE = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    // const response =
    await interaction.editReply({
      content:
        "Token Engineering is an emerging engineering discipline focused on holistic systems design and the theory, practice and tools used to design and verify tokenized ecosystems",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the content for "about WGs".
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const aboutWG = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    // const response =
    await interaction.editReply({
      content:
        "The Token Engineering Commons is comprised of 11 Working Groups that collaborate to promote our Vision which is to advance token engineering through enabling the creation of ethical, safe, resilient and diverse economic systems to benefit societies around the world.\n\nOur Working Groups are: Stewards, SoftGov, Legal, Transparency, Omega, Gravity, Parameters, Comms, Commons Swarm, Labs, Communitas\n\nThe [workgroup website page](https://tecommons.org/workgroups) provides more info and the [TEC calendar](https://calendar.google.com/calendar/u/0/embed?src=5mkep1ad1j860k6g7i7fr8plq0@group.calendar.google.com&ctz=Europe/Berlin) provides the schedule for all WG calls.\nAll calls are open to anyone to join. Hope we see you there!",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the content for "contribute".
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const contribute = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    //const response =
    await interaction.editReply({
      content:
        "1. Come say hello on our Orientation call, every Wednesday, 7am PST / 6pm CET on our Community hall channel on discord.\n2. Join our next Community Call on Thursday, 9am PST / 8pm CET on our Community hall channel on Discord.\n3. Feel free to join any of our calls! Add one or more to your calendar:\nhttps://calendar.google.com/calendar/u/0/embed?src=5mkep1ad1j860k6g7i7fr8plq0@group.calendar.google.com&ctz=Europe/Berlin\n4. Connect with us and stay up to date by following the TEC on [Twitter](https://twitter.com/tecmns) and [Medium](https://medium.com/token-engineering-commons).\n\nHave a look around our [Sprint board](https://app.zenhub.com/workspaces/tec-coordination-workspace-5fad0d3fbbe4da0011c2f40d/board?repos=306706322,349409011) and comment on any issues that you think you can help with!",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the content for "what is praise?".
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const aboutPraise = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    // const response =
    await interaction.editReply({
      content:
        "Praise is a reward mechanism based on gratitude that is quantified into Impact Hours which will turn into TEC tokens.\n\nThe TEC borrowed the Praise system from the [Commons Stack](https://commonsstack.org/) to create a culture of gratitude. Multiple community members have the ability to 'dish praise' to other members for their contributions. Praise is subjective to capture not only clear actions but also less concrete contributions like care work.",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the content for "making a proposal".
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const aboutProposals = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    // const response =
    await interaction.editReply({
      content:
        "Great! The purpose of the TEC is to advance token engineering!\n\nIn order to submit a proposal for funding for a project, the first step is to share it on the TEC Forum for Advice Process. You can do that [here](https://forum.tecommons.org/c/proposals/pre-proposal-phase/14).\n\nAfter the Commons Upgrade, you will then be able to submit the same proposal to Conviction Voting for community approval.",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the contnet for "about Commons".
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const aboutCommons = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    // const response =
    await interaction.editReply({
      content:
        "Commons are resources that groups of people (communities, organizations) create and manage for individual and collective benefit. These resources are held collectively, not owned privately.\n[More Info](https://medium.com/commonsstack/automating-ostrom-for-effective-dao-management-cfe7a7aea138)",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the content for "how to discord".
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const usingDiscord = async (
  interaction: ButtonInteraction
): Promise<void> => {
  try {
    // const response =
    await interaction.editReply({
      content: "<Coming soon...!>",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};

/**
 * Handles the content for "MVV".
 *
 * @param {CommandInteraction} interaction The command interaction.
 */
export const mvv = async (interaction: ButtonInteraction): Promise<void> => {
  try {
    // const response =
    await interaction.editReply({
      content:
        "**Vision**\n\nEnable the creation of ethical, safe, resilient and diverse economic systems to benefit societies around the world\n\n**Mission**\n\nOur goal is to become a [Schelling Point](https://nav.al/schelling-point) for the token engineering community.\nOur economic layer will fund projects that discover, develop and proliferate the best practices for engineering safe tokenized economies, while aligning our collective success with the individual benefit of token holders.\nOur social layer is even more important, as it will unite the token engineering field around the ethical principles, standards, tools and methodologies that emerge as this nascent field advances.\n\n**Values**\n\nOur Commons operates from a prosocial, human-centered perspective and prioritizes the advancement of token engineering over short-term profits.\nIntegrity, curiosity, constructive inquiry, presence and gratitude are foundational for maintaining mutual respect within our growing community.\nWe encourage our members to be radically open source, non-hierarchical, transparent in their intentions and accountable for their actions.",
    });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
