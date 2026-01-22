const figlet = require("figlet");

console.log(figlet.textSync("Clean Arch kata"));

import { main } from "./src/app";

main().catch(console.error);