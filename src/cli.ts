import { Command } from "commander";
import * as promptly from "promptly";

import {
  addNewUser,
  createInitialUsers,
  listAllUsers,
  searchUserByEmail,
} from "./app";

const MENU_OPTIONS = {
  LIST: "1",
  ADD: "2",
  SEARCH: "3",
  EXIT: "0",
};

const displayMenu = () => {
  console.log("\n╔════════════════════════════════════╗");
  console.log("║      User Management System        ║");
  console.log("╠════════════════════════════════════╣");
  console.log("║  1. List all users                 ║");
  console.log("║  2. Add new user                   ║");
  console.log("║  3. Search user by email           ║");
  console.log("║  0. Exit                           ║");
  console.log("╚════════════════════════════════════╝\n");
};

const handleMenuChoice = async (choice: string) => {
  switch (choice) {
    case MENU_OPTIONS.LIST:
      await listAllUsers();
      break;
    case MENU_OPTIONS.ADD:
      await addNewUser();
      break;
    case MENU_OPTIONS.SEARCH:
      await searchUserByEmail();
      break;
    case MENU_OPTIONS.EXIT:
      console.log("\n👋 Goodbye!\n");
      process.exit(0);
    default:
      console.log("\n❌ Invalid option. Please try again.\n");
  }
};

const startMenu = async () => {
  createInitialUsers();
  let running = true;

  while (running) {
    displayMenu();

    try {
      const choice = await promptly.prompt("Select an option (0-3): ");

      await handleMenuChoice(choice);
    } catch (error) {
      if (error instanceof Error && error.message.includes("canceled")) {
        console.log("\n👋 Goodbye!\n");
        running = false;
      } else {
        console.error("Error:", error);
      }
    }
  }
};

export function initializeCLI() {
  const program = new Command();

  program
    .name("User Manager")
    .description("CLI tool to manage users in the application")
    .version("1.0.0")
    .action(async () => {
      await startMenu();
    });

  program.parse(process.argv);
}

export { startMenu, handleMenuChoice };
