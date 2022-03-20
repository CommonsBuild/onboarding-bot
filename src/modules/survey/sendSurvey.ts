import { Guild, GuildMember } from "discord.js";

import { logHandler } from "../../utils/logHandler";
import { sendLogMessage } from "../../utils/sendLogMessage";

/**
 * Sends the Survey to Verified folks.
 *
 * @param {GuildMember} user The user to send the survey to.
 */
export const sendSurvey = async (user: GuildMember): Promise<void> => {
  try {
    await user.send("You have been verified on the TEC Discord! ");
  } catch (e) {
    const err = e as Error;
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
};
