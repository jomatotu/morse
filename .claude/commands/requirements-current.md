# View Current Requirement

Display full details of the active requirement (view only — does not continue gathering).

## Instructions:

1. Read `requirements/.current-requirement`
2. If none: show "No active requirement" + last 3 completed
3. Load all files from the requirement folder and display:

```
📋 Requirement: [name]
Duration: [time since created]
Phase: [current phase]

## Original Request
[content of 01-initial-request.md]

## Codebase Overview
[content of 02-codebase-overview.md]

## Discovery Q&A
[questions + answers]

## Context Findings
[content of 05-context-findings.md if exists]

## Detail Q&A
[questions + answers if exists]

## Next Action
- Continue: /requirements-status
- Finalize: /requirements-end
```
