import path from "path";
import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcFile = path.resolve(__dirname, "files", "fileToCompress.txt");
const archiveFile = path.resolve(__dirname, "files", "archive.gz");

const compress = async () => {
  const readStream = createReadStream(srcFile);
  const writeStream = createWriteStream(archiveFile);
  await pipeline(readStream, createGzip(), writeStream);
};

await compress();
