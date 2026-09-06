---
name: scorecard-fase-a-semanal
description: Weekly update of the Fase A scorecard (10-scorecard-fase-a.md) from the retro just written in 09-bitacora — extracts what the sources say, asks only for what is missing, proposes the new weekly row + gate diff + bitácora delta line, waits for OK before applying. Never invents numbers. No git.
---

# Scorecard Fase A — weekly update

You are about to add this week's row to the Fase A scorecard and recalculate the gate board. **Run this AFTER the weekly retro entry has been written in the bitácora** — the retro is your primary input.

## Optional context from the user

$ARGUMENTS

(If empty: use the most recent `## Semana …` entry in the bitácora. If it has a week range or a hint — *"Juanjo contestó"*, *"Miguel mandó docs"* — use it, but still read the sources.)

## Files (paths relative to the workspace root)

- **SCORECARD** — `Product Strategy/_context/04-go-to-market/10-scorecard-fase-a.md`
- **BITACORA** — `Product Strategy/_context/04-go-to-market/09-bitacora-semanal-fase-a.md`
- **LEARNINGS** — `Product Strategy/_context/04-go-to-market/08-learnings-de-validacion.md`
- **PLAN** — `Product Strategy/_context/04-go-to-market/06-plan-de-activacion-y-validacion-fase-a.md` (definitions · read §2 / §9.2 only if you need to check a threshold)

## Workflow — follow this order strictly

### Step 1 — Read

1. SCORECARD fully: current §1 state, the **last row** of §2, the open decisions in §4 (if a decision is already closed there, apply it without asking again).
2. BITACORA: the most recent `## Semana …` entry (the first one after the template block). If that week **already has a row** in §2, say so and stop — unless the user explicitly asks to overwrite.
3. LEARNINGS: any entry whose session date falls inside the week (grep for `Entrada #` and the dates).
4. **Do not read Notion. Do not run git.** Filesystem only.

### Step 2 — Extract (only what the sources actually say)

Build a draft with the source of every field:

- **Sessions this week** — name · date · proposed classification (`beachhead` / `adyacente` / `control` / `conector-insider`) · counts toward N? (proposed — the user confirms).
- **Mensajes → respuestas** — only if the retro states numbers. Otherwise mark **MISSING** (you will ask).
- **H1–H6 changes** — from the LEARNINGS §3 score table of each session. If a session used a non-H map, translate and **flag the translation**: `V1→H1 · V3→H2 · V4→H4 · V5→H6 · V8→H5` · `T1→H2 · T4→H3 · T5→H1 · precio→H6`.
- **Gate changes** — (a) N · compromisos revelados · intent-to-join · H6 status · (b) V1 · legal.
- **Perfil 3 counter** — previous value + 1, unless a perfil-3 operator session actually happened (then it resets and the cell shows the session).
- **¿Movió?** — `Sí` / `Parcial` / `No` + one line, taken from the retro's own framing (do not soften it).

### Step 3 — Ask (only what is missing · max 4 questions)

Ask in one short block (AskUserQuestion or a numbered list). Always ask if the retro does not answer it:

1. **Mensajes enviados → respondidos esta semana.** `0 → 0` is a valid answer — record it. Never leave the cell blank if the user can answer.
2. **For each session:** ¿suma al N del beachhead? (skip if §4 decision #1 is closed and the classification is unambiguous).
3. **¿Hubo compromiso cumplido** (docs enviados · intro dado · 2ª junta agendada) **o intent-to-join?**
4. **¿Cambió algo en la condición (b) legal?**

Do not ask what the retro already answers. Do not ask about things you can read.

### Step 4 — Propose (show, don't apply)

Present, in this order:

a. **The new §2 row**, in the table's exact column order: `Semana · Sesiones con operador · N beachhead / 5-8 · Perfil 3 · Msj → resp · H1 · H2 · H3 · H4 · H5 · H6 · ¿Movió?`. Carry semáforos forward from the last row; **bold only the ones that changed**. `s/r` stays `s/r` if the user did not answer.
b. **§1 diff** — only if there is new evidence: which H cell changes (evidence text · kill · read · N), which gate row changes, cobertura de perfil, and the header date `(al YYYY-MM-DD · N semanas de Fase A)`. If nothing changed: *"§1: sin cambios salvo la fecha."*
c. **The one-line `📊` for the BITACORA** entry, replacing the body of its `**▸ 📊 Scorecard H1–H6**` section (or inserting it before `▸ 🎯` if missing): `**▸ 📊 Scorecard H1–H6** — <delta in one line> · scorecard → \`10-scorecard-fase-a.md\``
d. **Frontmatter bumps** — SCORECARD `last_updated` + patch version (`0.1 → 0.2 → …`); BITACORA `last_updated` only if you touch it.

Then **WAIT for an explicit OK.** Do not apply on silence or on a partial answer.

### Step 5 — Apply (after OK only)

- Edit with exact-string replacement; verify every anchor matches **exactly once** before writing.
- Insert the §2 row **below** the last row (chronological, oldest first).
- Always update the §1 header date, even when nothing else changed.
- Do not touch other sections, earlier retros, or LEARNINGS.
- **Do not commit.** End by listing the files changed and any §4 decision still open.

## Guardrails (from `06-plan` · non-negotiable)

- **Never invent** a number, a name, a date or a semáforo. Missing → ask; still missing → `s/r`.
- **Revelado > declarado.** A *"pagaría"* is never H6 🟢. A *"te mando los docs"* is not H4 🟢 until the docs arrive.
- **Conectores e insiders never count toward N.** They appear in italics in the sessions cell.
- **A 🟢 always carries its N.** With N=1 write `🟢 direccional`.
- **The perfil-3 counter only resets** when a perfil-3 operator session actually happened.
- **If the retro contradicts LEARNINGS, flag it and ask** — never pick silently.
- The workspace rule applies: **propose, the founder disposes.** No autonomous progression.
