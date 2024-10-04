import path from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.resolve(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = createHash("sha256").setEncoding("hex");

  createReadStream(srcPath)
    .pipe(hash)
    .on("finish", function () {
      console.log(`Hash of file is calculated: ${hash.read()}.`);
    });
};

await calculateHash();
