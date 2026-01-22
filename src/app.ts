import { UserController } from "./presentation/controllers/UserController";
import { CreateUserUseCase } from "./domain/useCases/createUserUseCase";
import { GetAllUseCase } from "./domain/useCases/getAllUseCase";
import { UserApiRepository } from "./data/users/userRepository";
import { UserStorage } from "./data/api/userStorage";

// Set up dependencies
const userStorage = new UserStorage();
const userRepository = new UserApiRepository(userStorage);
const createUserUseCase = new CreateUserUseCase(userRepository);
const getAllUseCase = new GetAllUseCase(userRepository);
const userController = new UserController(createUserUseCase, getAllUseCase);

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
// Example usage
async function main() {
  try {
    // Create all users from the newUsers array
    for (const userData of newUsers) {
      await userController.createUser(userData);
    }

    // Get and display all users
    const allUsers = await userController.getAllUsers();
    if (allUsers) {
      console.log("\nAll Users:");
      allUsers.forEach((user, index) => {
        console.log(`${index + 1}. Name: ${user.getName()}, Email: ${user.getEmail()}`);
      });
    } else {
      console.log("No users found");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

export { userController, main };
