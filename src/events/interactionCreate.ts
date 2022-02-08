/*
 * This file is part of the tec-onboarding-bot project
 * The contents are derived from the commit-your-code-bot project
 *
 * Copyright (c) 2021 nhcarigan
 * Authors: Nicholas Carrigan
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

import { Interaction } from "discord.js";

import { aboutMenu } from "../modules/guide/aboutMenu";
import { contributeMenu } from "../modules/guide/contributeMenu";
import { organisationMenu } from "../modules/guide/organisationMenu";
import { praiseMenu } from "../modules/guide/praiseMenu";
import { proposalsMenu } from "../modules/guide/proposalsMenu";
import { question } from "../modules/verification/question";
import { logHandler } from "../utils/logHandler";

/**
 * Handles the interactionCreate event.
 *
 * @param {Interaction} interaction The interaction received over the gateway.
 */
export const interactionCreate = async (
  interaction: Interaction
): Promise<void> => {
  try {
    if (interaction.isButton()) {
      switch (interaction.customId) {
        case "verify":
          await interaction.deferReply({ ephemeral: true });
          await question(interaction);
          break;
        case "about":
          await interaction.deferReply({ ephemeral: true });
          await aboutMenu(interaction);
          break;
        case "wg":
          await interaction.deferReply({ ephemeral: true });
          await organisationMenu(interaction);
          break;
        case "praise":
          await interaction.deferReply({ ephemeral: true });
          await praiseMenu(interaction);
          break;
        case "proposal":
          await interaction.deferReply({ ephemeral: true });
          await proposalsMenu(interaction);
          break;
        case "contribute":
          await interaction.deferReply({ ephemeral: true });
          await contributeMenu(interaction);
          break;
        /*
        case "time":
          await interaction.deferReply({ ephemeral: true });
          await schedule(interaction);
        */
      }
    }
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
