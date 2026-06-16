# End Requirements Gathering

Finalize the current requirement gathering session.

## Instructions:

1. Read `requirements/.current-requirement`
2. If no active requirement: show "No active requirement to end" and exit

3. Show current status and ask:
```
⚠️ Ending requirement: [name]
Current phase: [phase] ([X/Y] complete)

What would you like to do?
1. Generate spec with current information
2. Mark as incomplete for later
3. Cancel and delete
```

4. Based on choice:

### Option 1: Generate Spec
- Create `07-requirements-spec.md` with all answered questions
- Add "ASSUMED:" prefix for unanswered questions using defaults
- Update metadata status to "complete"

### Option 2: Mark Incomplete
- Update metadata status to "incomplete"
- Add lastUpdated timestamp

### Option 3: Cancel
- Confirm deletion, remove folder, clear .current-requirement

5. Clear `requirements/.current-requirement`
6. Update `requirements/index.md`
