const figlet = require("figlet");

console.log(figlet.textSync("Clean Arch kata"));

import { main } from "./src/app";
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

main(newUsers).catch(console.error);