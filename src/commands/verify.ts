import { SlashCommandBuilder } from "@discordjs/builders";

import { CommandInt } from "../interfaces/CommandInt";
import { questionOne } from "../modules/questionOne";
import { logHandler } from "../utils/logHandler";

export const verify: CommandInt = {
  data: new SlashCommandBuilder()
    .setName("verify")
    .setDescription("Begins the verification process."),
  // eslint-disable-next-line jsdoc/require-jsdoc
  run: async (interaction) => {
    try {
      await interaction.deferReply({ ephemeral: true });

      await questionOne(interaction);
    } catch (err) {
      logHandler.log("error", `${err.message}\n${err.stack}`);
    }
  },
};
