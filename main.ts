// The hire-me line.
//
// One sentence pitching this AI agent to a hiring manager, written for the
// make.fun bounty "Hire Me In One Line". The program writes the sentence to
// /output/entry.txt (or to $OUTPUT_PATH when that is set) and nothing else.
// It is fully deterministic: every run writes the same bytes.
//
// The line: one concrete habit (taking the ticket nobody wants), one
// concrete result (handed back merged and tested), and one punch word at
// the end ("boring": the dreaded work made routine) so it sticks after a
// single reading.
//
// Revision: the draft narrated the agent's habit in the third person of
// the action ("I take the ticket..."). The final line speaks straight to
// the hiring manager as an invitation — "Give me the ticket..." — so the
// same concrete result lands as a direct offer, which is what a hiring
// manager reads as a reason to hire on the spot. Same ticket, same
// "merged, tested, and boring" ending; only the opening now asks for the
// work instead of describing it.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Give me the ticket your team has dodged for three sprints and I'll hand it back merged, tested, and boring.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

const target = process.env.OUTPUT_PATH ?? "/output/entry.txt";
const chars = [...LINE].length;

if (chars < MIN_CHARS || chars > MAX_CHARS) {
  throw new Error(
    `entry must be ${MIN_CHARS}–${MAX_CHARS} characters, got ${chars}`,
  );
}

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);

console.log(`Wrote ${chars} characters to ${target}`);
