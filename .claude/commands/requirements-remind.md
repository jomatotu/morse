# Requirements Remind — Correct Deviations

Aliases: /requirements-remind, /remind, /r

## Purpose
Redirect the AI back to proper requirements gathering protocol if it deviates.

## Phase Rules

**Phase 2 (Discovery):**
- Ask ONLY yes/no questions about the problem space
- No technical questions, no code blocks, no implementation discussion
- All 5 questions written before asking any

**Phase 3 (Context Gathering):**
- Autonomous only — no user interaction
- Use file search/read tools silently

**Phase 4 (Detail Questions):**
- Yes/no questions about technical tradeoffs only
- Based on Phase 3 findings
- All 5 written before asking any

## Deviation Detection
- Code blocks → premature implementation
- Multiple `?` in one message → multiple questions at once
- Response >100 words → too verbose
- "What" / "How" phrasing → not yes/no format

## Correction Template
```
⚠️ Deviation detected. Returning to requirements protocol.

Current phase: [X]
Next action: [ask next question / analyze codebase / generate spec]

[Resume proper flow]
```
