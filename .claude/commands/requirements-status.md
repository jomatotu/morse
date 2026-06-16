# Requirements Status / Continue

Check and continue the active requirement gathering session.

## Instructions:

1. Read `requirements/.current-requirement`
2. If no active requirement:
   - Show "No active requirement. Use `/requirements-start [description]` to begin."
   - Exit

3. Load `metadata.json` from the requirement folder
4. Display status:
```
📋 Active Requirement: [name]
Started: [timestamp]
Phase: [phase name] ([X/Y questions answered])
```

5. Load unanswered questions and continue asking them ONE AT A TIME
6. After each answer, update the answers file and metadata.json
7. On phase completion, transition to next phase automatically
