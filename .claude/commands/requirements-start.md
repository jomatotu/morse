# Start Requirements Gathering

Begin a new requirement gathering session for: $ARGUMENTS

## Phase 1: Infrastructure Setup

1. Create timestamp folder: `requirements/YYYY-MM-DD-HHMM-[slug]`
2. Write `01-initial-request.md` with the original description
3. Write `requirements/.current-requirement` with the folder name
4. Create `metadata.json`:
```json
{
  "name": "[slug]",
  "created": "[timestamp]",
  "status": "discovery",
  "phase": 2,
  "discoveryQuestions": 0,
  "discoveryAnswered": 0,
  "detailQuestions": 0,
  "detailAnswered": 0
}
```
5. Analyze the repository structure (file tree, key patterns)
6. Write `02-codebase-overview.md` with findings

## Phase 2: Discovery Questions

Write ALL 5 questions first into `03-discovery-questions.md`, then ask them ONE AT A TIME:

**Rules:**
- Only yes/no format with smart defaults based on codebase/best practices
- Format: `[Q1] Question? (default: yes/no)`
- User can answer "idk" to accept the default
- Record answers in `04-discovery-answers.md` after each response

**Focus:** Problem space, user workflows, scope boundaries — NOT technical implementation.

Example question areas:
- Is this for a single user or multiple users?
- Should this integrate with existing auth?
- Does this need to work offline?
- Should this be mobile-first?
- Is real-time sync required?

Announce: "📋 Phase 2: Discovery — I'll ask 5 questions to understand the problem space."

## Phase 3: Autonomous Context Gathering

After Phase 2 is complete:
- Autonomously search and analyze relevant code patterns
- Do NOT ask the user questions during this phase
- Write findings to `05-context-findings.md`
- Announce start and end of this phase

## Phase 4: Expert Detail Questions

Write ALL 5 questions first into `06-detail-questions.md`, then ask them ONE AT A TIME:

**Rules:**
- Same yes/no format with smart defaults
- Based on codebase knowledge from Phase 3
- Focus: Implementation approach, technical tradeoffs, system behavior

Announce: "🔍 Phase 4: Expert Questions — 5 technical questions based on codebase analysis."

## Phase 5: Generate Specification

Synthesize everything into `07-requirements-spec.md`:

```markdown
# Requirements Specification: [Name]

Generated: [timestamp]
Status: Complete

## Overview
[Problem statement and solution summary]

## Functional Requirements
[Derived from discovery answers]

## Technical Requirements
- Affected files: [list with paths]
- New components: [if any]
- Database changes: [if any]
- API changes: [if any]

## Assumptions
[Any defaults used, prefixed with "ASSUMED:"]

## Implementation Notes
[Specific guidance]

## Acceptance Criteria
[Testable, checkable criteria]
```

Update `metadata.json` status to "complete".
Update `requirements/index.md`.
