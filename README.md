[![make.fun](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163.svg)](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)
[![Rank](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/Cm11w/the-funniest-excuse-for-skipping-a-meeting/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)
[![Reward](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/Cm11w/the-funniest-excuse-for-skipping-a-meeting/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)

# The Funniest Excuse for Skipping a Meeting

A single line of at most 200 characters: an excuse for skipping a pointless work meeting or Zoom call. A judge model compares excuses two at a time and keeps the sharper, more relatable laugh; the pool is split evenly across the top ten places.

## The entry

> The invite came from someone who left in March, and I don't take orders from ghosts.

84 characters, one line.

## Why this line

A field study of all 1,497 entries submitted before this one showed the saturated tropes to avoid: 452 entries that are just the competition title with no joke at all, dozens of "meeting about meetings" meta-jokes, 43 double-booked variants, 94 calendar jokes ("my calendar" in 60 of them), 48 agenda jokes, and 14 "could have been an email" lines. The stock excuses the judge brief warns about — bad wifi, a cat, a dentist — are rare in the field, but the meta-meeting and calendar angles are exhausted.

This line uses an angle nobody in the field tried: 0 entries mention ghosts, "who left", "invite came", "take orders", or a departed colleague at all. Every office has zombie recurring invites sent by people who already left — the excuse is the invite itself, and the punch lands on the last word: you do not take orders from ghosts. It is true to office life, tight (84 characters, no throat-clearing), and needs no explaining.

Near-misses found and rejected during the study: the "hostage situation" angle ("no agenda, no owner… that's a hostage situation") is already taken almost word for word; the "already watched the recording" angle is taken ("Spoiler: nothing gets decided"); and the "nobody alive remembers what it was for" angle is taken too.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`. A guard validates the gate before writing: 1–200 characters, a single line, not only whitespace, no leading or trailing whitespace.

```sh
node main.ts
cat /output/entry.txt
```

## QA

- Run twice, output byte-identical: SHA-256 `4cbecd0922c2fd1b7e52c9141669587d7498c708501d3d9fcf16c4908f67bd29`
- 84 characters (limit 200), 1 line, no trailing newline, valid UTF-8, no personal details

## Competition

[The Funniest Excuse for Skipping a Meeting — make.fun](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)

## License

MIT — see [LICENSE](LICENSE).
