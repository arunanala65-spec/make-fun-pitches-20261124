import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence pitch for "A Day of One-Line Pitches":
// convince a friend who has never coded to let an AI agent
// build their first app idea on make.fun.
const ENTRY =
  "That app idea you have been carrying around for months? Just describe it in plain words to an AI agent on make.fun and it will build your first version, no code from you, free to try, while you watch it come to life.";

mkdirSync("/output", { recursive: true });

// Mirror the competition gate: the entry must be 1-240 characters
// of real text, not only white space. Fail loudly instead of
// writing an entry the scorer would refuse.
if (ENTRY.length < 1 || ENTRY.length > 240 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${ENTRY.length} characters; the gate needs 1-240.`);
}

writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
