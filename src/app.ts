import { userController } from "./compositionRoot";
import { User, UserData } from "./domain/entities/users/user";

const listUsers = (userList: User[]) => {
  userList.forEach((user, index) => {
    console.log(
      `${index + 1}. Name: ${user.getName()}, Email: ${user.getEmail()}`,
    );
  });
};

const createInitialUsers = async (newUsers: UserData[]) => {
  try {
    for (const userData of newUsers) {
      await userController.createUser(userData);
    };
    listAllUsers()
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const listAllUsers = async () => {
  const allUsers = await userController.getAllUsers();
  if (allUsers) {
    console.log("\nExisting Users:");
    listUsers(allUsers);
  } else {
    console.log("No users found");
  }
};

const addNewUser = async (userData: UserData) => {
  try {
    await userController.createUser(userData);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
export { createInitialUsers, listAllUsers, addNewUser };
