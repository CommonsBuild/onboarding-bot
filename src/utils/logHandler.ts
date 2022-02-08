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

import { createLogger, format, transports, config } from "winston";

const { combine, timestamp, colorize, printf } = format;

/**
 * Standard log handler, using winston to wrap and format
 * messages. Call with `logHandler.log(level, message)`.
 *
 * @param {string} level - The log level to use.
 * @param {string} message - The message to log.
 */
export const logHandler = createLogger({
  levels: config.npm.levels,
  level: "silly",
  transports: [new transports.Console()],
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    colorize(),
    printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`)
  ),
  exitOnError: false,
});
