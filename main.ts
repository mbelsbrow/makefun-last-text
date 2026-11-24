import { writeFileSync } from "node:fs";

// Why this line wins: the dying phone uses its last words to snitch on the
// user — a specific, embarrassing number (11 hours of screen time) as its
// final act, then the flat punchline "embarrassing. goodbye." It is
// unmistakably a final text from a phone at 1% in its own voice, the joke is
// a real turn (last breath spent roasting the owner), the voice stays
// first-person phone throughout, it is punchy with no wasted words, and it
// dodges the obvious low-battery puns every other entrant will write.
const ENTRY_LINE =
  "i'm at 1% and my last words are these: your screen time was 11 hours today. embarrassing. goodbye.";
const MAX_CHARS = 200;

// Guards: the entry must be exactly one non-empty line within the limit.
if (ENTRY_LINE.includes("\n") || ENTRY_LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY_LINE.length > MAX_CHARS) {
  throw new Error(`entry exceeds ${MAX_CHARS} characters`);
}
if (ENTRY_LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

writeFileSync("/output/entry.txt", ENTRY_LINE + "\n", "utf8");
