import path from "path";
import { fileURLToPath } from "url";
import { availableParallelism } from "node:os";
import { Worker } from "node:worker_threads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerFile = path.resolve(__dirname, "worker.js");

const performCalculations = async () => {
  const numCPUs = availableParallelism();
  function createWorker(data) {
    return new Promise((resolve) => {
      const worker = new Worker(workerFile, {
        workerData: data,
      });
      worker.on("message", (data) => {
        resolve({ status: "resolved", data });
      });
      worker.on("error", () => {
        resolve({ status: "error", data: null });
      });
    });
  }
  const workerPromises = [];
  for (let i = 0; i < numCPUs; i++) {
    workerPromises.push(createWorker(i + 10));
  }
  const thread_results = await Promise.all(workerPromises);
  console.log(thread_results);
};

await performCalculations();
