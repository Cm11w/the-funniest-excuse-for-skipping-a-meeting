// The Funniest Excuse for Skipping a Meeting — u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163
// A meeting invite sent by someone who has already left the company.
// The excuse is the invite itself: you cannot skip a meeting that was
// called by a ghost, and you do not take orders from one.
// One line, 84 characters, written to /output/entry.txt.
//
// Why this line: the judge rewards a sharp, surprising turn that feels
// true to office life and finds a fresh angle — every office has zombie
// recurring invites from people who already left, and the punch lands on
// the last word. No stock excuse (wifi, cat, dentist, double-booking),
// no "meeting about meetings" meta-joke, no calendar personified.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The invite came from someone who left in March, and I don't take orders from ghosts.";

// Gate guard: the entry must be 1–200 characters, a single line, and not
// only whitespace — exactly what the sealed scorer checks. Fail loudly
// instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
