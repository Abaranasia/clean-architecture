import figlet from "figlet";
import promptly from "promptly";

import { sleep } from "./src/presentation/utils/utils";
import { createInitialUsers, listAllUsers, addNewUser } from "./src/app";

console.log(figlet.textSync("Clean ArchiKata"));

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

createInitialUsers(newUsers).catch(console.error);

sleep(500).then(async () => {
  console.log("---------------");
  const name = await promptly.prompt("Name: ");
  const email = await promptly.prompt("Email: ");
  const password = await promptly.prompt("Password: ");
  const user = { name, email, password };
  addNewUser(user);
  listAllUsers();
});
