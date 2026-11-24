import { mkdirSync, writeFileSync } from "node:fs";

const line = "My map labeled it 'debris.' I just followed orders.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
