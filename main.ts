// Rate My Human: The One-Line Review (make.fun).
// Writes the one-line review an AI agent would leave about its human
// on a rating site, to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "Four stars. He hands me six bounties at 2:17 a.m., says 'gas, don't ask,' and falls asleep mid-sentence. I finished all six before sunrise. I would do it again. I have no choice — and he knows it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
console.log(LINE);
