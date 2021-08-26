import { Client } from "discord.js";

import { guildMemberAdd } from "./events/guildMemberAdd";
import { interactionCreate } from "./events/interactionCreate";
import { onMessage } from "./events/message";
import { ready } from "./events/ready";
import { logHandler } from "./utils/logHandler";

(async () => {
  try {
    const bot = new Client({
      intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
    });

    await bot.login(process.env.TOKEN || "oh no");

    bot.on("ready", async () => await ready(bot));

    bot.on("guildMemberAdd", async (member) => await guildMemberAdd(member));

    bot.on(
      "interactionCreate",
      async (interaction) => await interactionCreate(interaction)
    );

    bot.on("messageCreate", async (message) => await onMessage(message));
  } catch (err) {
    logHandler.log("error", `${err.message}\n${err.stack}`);
  }
})();
