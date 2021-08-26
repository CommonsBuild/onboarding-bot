import { Client } from "discord.js";

import { logHandler } from "../utils/logHandler";
import { sendLogMessage } from "../utils/sendLogMessage";

/**
 * Handles the ready event, which fires when the bot connects
 * to the gateway.
 *
 * @param {Client} bot The Bot instance.
 */
export const ready = async (bot: Client): Promise<void> => {
  try {
    logHandler.log("debug", "Connected to Discord!");
    await sendLogMessage(
      `Bot has loaded! Version ${process.env.npm_package_version}`
    );
  } catch (err) {
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
