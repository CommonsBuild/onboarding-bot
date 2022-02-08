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

import { WebhookClient } from "discord.js";

import { logHandler } from "./logHandler";

/**
 * Sends a message to the logging webhook. Use this for tracking
 * when a member is kicked, and why.
 *
 * @param {string} message The message to send. Should include the user's name, id, and reason for kick.
 */
export const sendLogMessage = async (message: string): Promise<void> => {
  try {
    const hook = new WebhookClient({ url: process.env.WH_URL || "oh no" });

    await hook.send({ content: message });
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
