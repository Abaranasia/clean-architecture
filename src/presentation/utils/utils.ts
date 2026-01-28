import { User } from "../../domain/entities/users/user";

export const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

export const displayMenu = () => {
  console.log("\n╔════════════════════════════════════╗");
  console.log("║      User Management System        ║");
  console.log("╠════════════════════════════════════╣");
  console.log("║  1. List all users                 ║");
  console.log("║  2. Add new user                   ║");
  console.log("║  3. Search user by email           ║");
  console.log("║  0. Exit                           ║");
  console.log("╚════════════════════════════════════╝\n");
};

export const printUserData = (user: User) => {
  console.log("\n┌─────────────────────────────────────────┐");
  console.log("│ User Found                              │");
  console.log("├─────────────────────────────────────────┤");
  console.log(`│ Name:  ${user.getName().padEnd(32)} │`);
  console.log(`│ Email: ${user.getEmail().padEnd(32)} │`);
  console.log("└─────────────────────────────────────────┘\n");
};

export const printUsers = (usersList: User[]) => {
  console.log("┌──────────────────────────────────────────────────────────┐");
  console.log("│ Users                                                    │");
  console.log("├──────────────────────────────────────────────────────────┤");
  usersList.forEach((user, index) => {
    const name = user.getName();
    const email = user.getEmail();
    console.log(`│ ${index + 1}. ${name.padEnd(20)} | ${email.padEnd(30)} │`);
  });
  console.log("└──────────────────────────────────────────────────────────┘\n");
};