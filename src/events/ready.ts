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
