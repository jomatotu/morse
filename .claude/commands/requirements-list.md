# List All Requirements

Display all requirements with status.

## Instructions:

1. Check `requirements/.current-requirement` for active item
2. List all folders in `requirements/` (exclude hidden files)
3. For each folder, read `metadata.json` and display:

```
🔴 [active]   [name] — Phase [X], started [date]
✅ [complete] [name] — Completed [date]
⚠️ [incomplete] [name] — Last updated [date]
```

4. Show summary:
```
Total: X requirements (Y complete, Z incomplete, W active)
```

5. Flag items incomplete for >7 days as stale.
