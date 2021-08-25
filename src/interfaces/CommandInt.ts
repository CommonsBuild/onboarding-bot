import {
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export interface CommandInt {
  data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
  /**
   * Handles the logic of the command.
   *
   * @param {CommandInteraction} interaction The command interaction object.
   */
  run: (interaction: CommandInteraction) => Promise<void>;
}
