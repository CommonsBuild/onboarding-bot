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
