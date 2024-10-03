import path from "path";
import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { pipeline } from "stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const decompressFile = path.resolve(__dirname, "files", "fileToCompress.txt");
const archiveFile = path.resolve(__dirname, "files", "archive.gz");

const decompress = async () => {
  const readStream = createReadStream(archiveFile);
  const writeStream = createWriteStream(decompressFile);
  await pipeline(readStream, createGunzip(), writeStream);
};

await decompress();
