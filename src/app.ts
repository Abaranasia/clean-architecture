import * as promptly from "promptly";

import { userController } from "./compositionRoot";
import { UserData } from "./domain/entities/users/user";
import { printUserData, printUsers } from "./presentation/utils/utils";

const newUsers = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123!",
  },
  {
    name: "Ann Doe",
    email: "ann.doe@example.com",
    password: "password345!",
  },
  {
    name: "Pep Doe",
    email: "pepe.doe@example.com",
    password: "hell0Kitty!",
  },
];

const createInitialUsers = async () => {
  try {
    for (const userData of newUsers) {
      await userController.createUser(userData);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};



const listAllUsers = async () => {
  try {
    console.log("\n Fetching users...\n");
    const allUsers = await userController.getAllUsers();

    if (allUsers && allUsers.length > 0) {
      printUsers(allUsers);
    } else {
      console.log("📭 No users found.\n");
    }
  } catch (error) {
    console.error(
      "Error fetching users:",
      error instanceof Error ? error.message : error,
    );
  }
};

const addNewUser = async () => {
  try {
    console.log("\n Add New User\n");

    const name = await promptly.prompt("Enter user name: ");
    const email = await promptly.prompt("Enter user email: ");
    const password = await promptly.password(
      "Enter user password (min 8 chars): ",
    );

    const userData: UserData = {
      name: name.trim(),
      email: email.trim(),
      password,
    };

    await userController.createUser(userData);
    console.log(`\n User ${userData.name} created successfully!\n`);
  } catch (error) {
    console.log(
      "Error creating user:",
      error instanceof Error ? error.message : error,
    );
    return;
  }
};

const searchUserByEmail = async () => {
  try {
    console.log("\n Search User by Email\n");

    const email = await promptly.prompt("Enter user email: ");
    const user = await userController.getUserByEmail(email.trim());

    if (user) printUserData(user)
    
  } catch (error) {
    console.error(
      "User not found:",
      error instanceof Error ? error.message : error,
    );
  }
};

export { createInitialUsers, listAllUsers, addNewUser, searchUserByEmail };
