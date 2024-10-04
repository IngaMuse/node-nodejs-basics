import path from "path";
import { fileURLToPath } from "url";
import { fork } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptFile = path.resolve(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const forked = fork(scriptFile, args);

  forked.on("message", (msg) => {
    console.log("Message from child", msg);
  });
  forked.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["a", "b", "c"]);
