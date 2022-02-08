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

import { Guild, GuildMember } from "discord.js";

import { logHandler } from "../../utils/logHandler";
import { sendLogMessage } from "../../utils/sendLogMessage";

/**
 * Grants the verified role to a user.
 *
 * @param {GuildMember} user The user to verify.
 * @param {Guild} guild The guild the user is in.
 */
export const verifyUser = async (
  user: GuildMember,
  guild: Guild
): Promise<void> => {
  try {
    const verifyRole = await guild.roles.fetch(
      process.env.VERIFIED_ROLE || "oh no!"
    );

    if (!verifyRole) {
      logHandler.log("error", "Could not locate verified role!");
      return;
    }
    await user.roles.add(verifyRole);
    await sendLogMessage(`${user.user.tag} was verified!`);
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
