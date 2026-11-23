import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const data: Buffer = readFileSync(join(import.meta.dirname, "entry.txt"));

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), data);

console.log(`copied entry.txt (${data.length} bytes) -> ${join(dir, "entry.txt")}`);
