import figlet from "figlet";
import { initializeCLI } from "./src/cli";

console.log(figlet.textSync("Clean ArchiKata"));

// Initialize and run the CLI application
initializeCLI();
