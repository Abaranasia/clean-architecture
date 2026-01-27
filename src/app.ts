import * as promptly from "promptly";


import { userController } from "./compositionRoot";
import { UserData } from "./domain/entities/users/user";

/* const listUsers = (userList: User[]) => {
  userList.forEach((user, index) => {
    console.log(
      `${index + 1}. Name: ${user.getName()}, Email: ${user.getEmail()}`,
    );
  });
}; */

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
    };

  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const listAllUsers = async () => {
  try {
    console.log("\n📋 Fetching users...\n");
    const allUsers = await userController.getAllUsers();

    if (allUsers && allUsers.length > 0) {
      console.log("┌─────────────────────────────────────────────────────────┐");
      console.log("│ Users                                                   │");
      console.log("├─────────────────────────────────────────────────────────┤");
      allUsers.forEach((user, index) => {
        const name = user.getName();
        const email = user.getEmail();
        console.log(`│ ${index + 1}. ${name.padEnd(20)} | ${email.padEnd(30)} │`);
      });
      console.log("└─────────────────────────────────────────────────────────┘\n");
    } else {
      console.log("📭 No users found.\n");
    }
  } catch (error) {
    console.error("❌ Error fetching users:", error instanceof Error ? error.message : error);
  }
};

/* const listAllUsers = async () => {
  const allUsers = await userController.getAllUsers();
  if (allUsers) {
    console.log("\nExisting Users:");
    listUsers(allUsers);
  } else {
    console.log("No users found");
  }
}; */

const addNewUser = async () => {
  try {
    console.log("\n📝 Add New User\n");

    const name = await promptly.prompt("Enter user name: ");

    if (name.trim().length < 2) {
      console.log("❌ Name must be at least 2 characters\n");
      return;
    }

    const email = await promptly.prompt("Enter user email: ");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("❌ Invalid email format\n");
      return;
    }

    const password = await promptly.password("Enter user password (min 8 chars): ");

    if (password.length < 8) {
      console.log("❌ Password must be at least 8 characters\n");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      console.log("❌ Password must contain at least one uppercase letter\n");
      return;
    }

    if (!/[a-z]/.test(password)) {
      console.log("❌ Password must contain at least one lowercase letter\n");
      return;
    }

    if (!/[0-9!@#$%^&*]/.test(password)) {
      console.log("❌ Password must contain at least one number or special character\n");
      return;
    }

    const userData: UserData = {
      name: name.trim(),
      email: email.trim(),
      password,
    };

    await userController.createUser(userData);
    console.log(`\n✅ User ${userData.name} created successfully!\n`);
  } catch (error) {
    console.error("❌ Error creating user:", error instanceof Error ? error.message : error);
  }
};

/* const addNewUser = async (userData: UserData) => {
  try {
    await userController.createUser(userData);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}; */

const searchUserByEmail = async () => {
  try {
    console.log("\n🔍 Search User by Email\n");

    const email = await promptly.prompt("Enter user email: ");

    if (!email.trim()) {
      console.log("❌ Email cannot be empty\n");
      return;
    }

    const user = await userController.getUserByEmail(email.trim());

    if (user) {
      console.log("\n┌─────────────────────────────────────────┐");
      console.log("│ User Found                              │");
      console.log("├─────────────────────────────────────────┤");
      console.log(`│ Name:  ${user.getName().padEnd(32)} │`);
      console.log(`│ Email: ${user.getEmail().padEnd(32)} │`);
      console.log("└─────────────────────────────────────────┘\n");
    }
  } catch (error) {
    console.error("❌ User not found:", error instanceof Error ? error.message : error);
  }
};

export { createInitialUsers, listAllUsers, addNewUser, searchUserByEmail };
