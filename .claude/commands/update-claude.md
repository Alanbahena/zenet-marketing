---
name: update-claude
description: Audit project state vs CLAUDE.md, detect desyncs, propose section-by-section updates, wait for OK before applying
---

# Update CLAUDE.md

You are about to audit the Zenet Marketing workspace and propose updates to CLAUDE.md based on what changed since its last update.

## Optional context from the user

$ARGUMENTS

(If `$ARGUMENTS` is empty, do a general audit. If it has a hint about what changed, use it to prioritize but still run the full audit.)

## Workflow — follow this order strictly

### Step 1 — Read current state

1. Read CLAUDE.md fully so you know what each section says now.
2. Note the current "Last updated" date at the bottom and in section 2. **Do not modify dates unless the user explicitly asks for it.**

### Step 2 — Audit the filesystem

Run the following inspections (use Bash, Glob, Read as needed). **Do not run `git log` or any git inspection** — this command works off the filesystem state only.

a. **All primary docs.** Find every `.md` file in `Branding/_context/`, `Market Research and Analysis/_context/`, and any other department's `_context/` folder. For each, extract from frontmatter: `name`, `status`, `version`, `last_updated`, `type`, `owner`. Exclude `CLAUDE.md` and `README.md`.

b. **Folder structure.** List the directory tree of the workspace (depth 4 max) and compare against the tree in CLAUDE.md section 5. Identify any folder present in the filesystem but missing from the tree, or vice versa.

c. **Skills.** List all `.md` files inside any `*/skills/` folder and any `.claude/commands/` files (excluding this `update-claude.md`). Compare against section 11.

d. **Most recently modified primary doc.** Sort docs by `last_updated` field in frontmatter (not by filesystem mtime). The most recent is what section 2 should highlight if anything has changed.

### Step 3 — Detect desyncs

Build a list of differences between filesystem and CLAUDE.md current state. Categorize each as:

- **Auto-detected, ready to propose:** status change, version bump, new doc, new folder, new skill.
- **Requires user input:** new strategic decision, new convention, new working principle, new document type, new data connection, summary text for "Most Recent Work" section.

If no desyncs are found, tell the user "CLAUDE.md está sincronizado con el filesystem. No hay cambios necesarios" and stop.

### Step 4 — Ask the user about non-detectable changes

Before proposing, ask the user concisely (only what applies based on the audit):

- "¿Hubo alguna decisión estratégica nueva que deba entrar a la sección 4 (Strategic Decisions Log)? Si sí, una línea + path al doc fuente."
- "¿Hubo alguna convención, working principle, document type o data connection nueva?"
- "Para la sección 2 (Most Recent Work), ¿cómo describirías el último trabajo en 1-2 líneas?"

Skip these questions if the audit shows no signals that suggest them.

### Step 5 — Propose changes section by section

Present a structured proposal in this format:

```
SECCIÓN 2 — Most Recent Work
  Cambio propuesto: [diff conciso]

SECCIÓN 3 — Project Status
  Cambio propuesto: [diff conciso]

SECCIÓN 4 — Strategic Decisions Log
  Nueva entrada propuesta: [bullet]
  (o "sin cambios")

SECCIÓN 5 — Project Structure tree
  Cambio propuesto: [diff]

SECCIÓN 11 — Available Skills
  Cambio propuesto: [diff]

SECCIÓN 13 — Reference Table
  Cambio propuesto: [nueva fila o status update]
```

**Do not include "Last updated" date changes in the proposal.** Date updates are not part of this command. If the user wants to update the date, they will ask explicitly.

### Step 6 — Wait for explicit OK

Do NOT modify CLAUDE.md until the user confirms. The user may:

- Approve all proposed changes ("ok aplica todo").
- Approve some and reject others ("solo aplica sección 3 y 13").
- Ask for adjustments before applying.

### Step 7 — Apply approved changes

Use the Edit tool to apply each approved change. After applying:

- Confirm to the user which sections were updated.
- Summarize the changes in 3-5 lines.
- Remind that this action does NOT auto-commit — Alan decides when to commit.

## Working principles that govern this command

- **Honestidad sobre completitud:** if you can't determine something with confidence, say so and ask. Don't fabricate.
- **Step-by-step approval:** never apply changes without explicit OK.
- **No auto-commit:** never run `git commit` or any git command. Alan decides when to commit.
- **No git inspection:** do not run `git log`, `git diff`, or any git command. The audit works on filesystem state only.
- **Do not touch dates:** do not modify the "Last updated" date in section 2 or at the end of the file unless the user explicitly asks for it.
- **Preserve existing structure:** the 13-section structure of CLAUDE.md is canonical. Do not invent new sections without explicit user approval.
- **Voice/tone:** CLAUDE.md is in English with Spanish quotes for canonical brand text. Keep that convention.

## Common scenarios

- **Doc closed (draft → active or version bump):** update sections 2, 3, 13.
- **New doc created:** update sections 2, 3, 5, 13.
- **New department activated:** update sections 3, 5.
- **New strategic decision:** update section 4 (requires user input).
- **New skill created:** update section 11.
- **Multiple changes since last update:** propose all in one batch organized by section.

## What to never do

- Never run any git command.
- Never modify the "Last updated" date unless explicitly asked.
- Never commit or push.
- Never apply changes without user approval.
- Never invent sections, decisions, or data not present in the filesystem.
- Never re-write entire CLAUDE.md when targeted Edits suffice.
