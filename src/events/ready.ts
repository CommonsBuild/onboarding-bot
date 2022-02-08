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

import { logHandler } from "../utils/logHandler";
import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the ready event, which fires when the bot connects
 * to the gateway.
 */
export const ready = async (): Promise<void> => {
  try {
    logHandler.log("debug", "Connected to Discord!");
    await sendLogMessage(
      `Bot has loaded! Version ${process.env.npm_package_version}`
    );
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
