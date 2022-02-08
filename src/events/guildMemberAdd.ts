/*
 * This file is part of the tec-onboarding-bot project
 * The contents are derived from the commit-your-code-bot project
 *
 * Copyright (c) 2021 nhcarigan
 * Authors: Nicholas Carrigan
 * Modified by: Vyvy-vi
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

import { GuildMember } from "discord.js";

import { logHandler } from "../utils/logHandler";
import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the member add event. Sets a timeout to kick members
 * if they do not verify within 5 minutes.
 *
 * @param {GuildMember} member The GuildMember object representing the member that joined.
 */
export const guildMemberAdd = async (member: GuildMember): Promise<void> => {
  try {
    await sendLogMessage(
      `${member.user.tag} has joined. Will kick in 5 minutes if they do not verify.`
    );
    setTimeout(async () => {
      const updated = await member.fetch();
      if (updated.user.bot) {
        await sendLogMessage(
          `${member.user.tag} wasn't kicked, because they're a valid bot. They're one of the good ones! :)`
        );
        return;
      }
      if (
        !updated.roles.cache.find(
          (role) => role.id === process.env.VERIFIED_ROLE
        )
      ) {
        await updated.kick();
        await sendLogMessage(
          `${member.user.tag} was kicked because they did not verify within 5 minutes.`
        );
      }
    }, 300000);
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
