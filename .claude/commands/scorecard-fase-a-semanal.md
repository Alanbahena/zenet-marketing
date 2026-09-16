---
name: scorecard-fase-a-semanal
description: Weekly update of the Fase A scorecard (10-scorecard-fase-a.md) from the retro just written in 09-bitacora — extracts what the sources say, asks only for what is missing, proposes the two weekly rows (hypotheses §2.1 + sales funnel §2.2 with its Σ) + gate diff + bitácora delta line, waits for OK before applying. Never invents numbers. No git.
---

# Scorecard Fase A — weekly update

You are about to add this week's two rows to the Fase A scorecard — the hypotheses row (§2.1) and the sales-funnel row (§2.2, nine counts + recomputed Σ) — and recalculate the gate board. **Run this AFTER the weekly retro entry has been written in the bitácora** — the retro is your primary input.

## Optional context from the user

$ARGUMENTS

(If empty: use the most recent `## Semana …` entry in the bitácora. If it has a week range or a hint — *"Juanjo contestó"*, *"Miguel mandó docs"* — use it, but still read the sources.)

## Files (paths relative to the workspace root)

- **SCORECARD** — `Product Strategy/_context/04-go-to-market/10-scorecard-fase-a.md`
- **BITACORA** — `Product Strategy/_context/04-go-to-market/09-bitacora-semanal-fase-a.md`
- **LEARNINGS** — `Product Strategy/_context/04-go-to-market/08-learnings-de-validacion.md`
- **PLAN** — `Product Strategy/_context/04-go-to-market/06-plan-de-activacion-y-validacion-fase-a.md` (definitions · read §2 / §9.2 only if you need to check a threshold)
- **PROCESO** — `Product Strategy/_context/04-go-to-market/12-proceso-de-ventas-fase-a.md` (§6.1 pipeline stages · §6.2 the nine counts — read only if a stage boundary is unclear)

## Workflow — follow this order strictly

### Step 1 — Read

1. SCORECARD fully: current §1 state, the **last row of §2.1 and of §2.2** (and the Σ row), the open decisions in §4 (if a decision is already closed there, apply it without asking again).
2. BITACORA: the most recent `## Semana …` entry (the first one after the template block). If that week **already has a row** in §2.1 or §2.2, say so and stop — unless the user explicitly asks to overwrite.
3. LEARNINGS: any entry whose session date falls inside the week (grep for `Entrada #` and the dates).
4. **Do not read Notion. Do not run git.** Filesystem only.

### Step 2 — Extract (only what the sources actually say)

Build a draft with the source of every field:

- **Sessions this week** — name · date · proposed classification (`beachhead` / `adyacente` / `control` / `conector-insider`) · counts toward N? (proposed — the user confirms).
- **Mensajes → respuestas** — only if the retro states numbers. Otherwise mark **MISSING** (you will ask).
- **The nine funnel counts (§2.2)** — this week's *deltas*, not totals: ① contactados (enviados → vistos → respondieron) · ③ sesiones (agendadas → hechas) · ④ discovery con paso a pitch (3+ de 5 + perfil ③/②) · ⑤ ofertas dichas (precio **con el punto**) · ⑥ síes (con precio y términos) · ⑦ pagados (transferencia en cuenta) · ⑧ diagnósticos entregados · ⑨ activos al mes 2 · and how many of ④+ are perfil ③. Take what the retro / LEARNINGS state; everything else is **MISSING**. ④ must equal the N delta of §2.1 — if it does not, flag it.
- **H1–H6 changes** — from the LEARNINGS §3 score table of each session. H6 is read in two parts since v0.3 of the scorecard: *pozo* (¿le cuesta hoy? — cuantificación revelada) and *precio* (¿aceptó el ancla cuando se le dijo, con el punto?). If a session used a non-H map, translate and **flag the translation**: `V1→H1 · V3→H2 · V4→H4 · V5→H6 · V8→H5` · `T1→H2 · T4→H3 · T5→H1 · precio→H6`.
- **Gate changes** — (a) N · compromisos revelados · intent-to-join · H6 status · (b) V1 · legal.
- **Perfil 3 counter** — previous value + 1, unless a perfil-3 operator session actually happened (then it resets and the cell shows the session).
- **¿Movió?** — `Sí` / `Parcial` / `No` + one line, taken from the retro's own framing (do not soften it).

### Step 3 — Ask (only what is missing · max 4 questions)

Ask in one short block (AskUserQuestion or a numbered list). Always ask if the retro does not answer it:

1. **The funnel, in one block:** enviados → vistos → respondidos · sesiones agendadas → hechas · ofertas dichas · síes · pagados · diagnósticos entregados · activos al mes 2. `0` everywhere is a valid answer — record it. Never leave a cell blank if the user can answer; `s/r` only when they cannot.
2. **For each session:** ¿suma al N? Apply the rule in `11-icp-hipotesis-fase-a.md` §2.3 (3 eliminatorios · ≥ 4 of 6 calificadores · quién valida qué · N por cuenta) — propose the result with the checks you could read from `08`, and ask only if a check is unreadable. Also ask: **¿se dijo el precio? ¿con el punto? ¿reacción?** (H6·precio · `11` §7.7).
3. **¿Hubo compromiso cumplido** (docs enviados · intro dado · 2ª junta agendada) **o intent-to-join?**
4. **¿Cambió algo en la condición (b) legal?**

Do not ask what the retro already answers. Do not ask about things you can read.

### Step 4 — Propose (show, don't apply)

Present, in this order:

a. **The new §2.1 row**, in the table's exact column order: `Semana · Sesiones con operador · N ICP Fase A / 5-8 · Perfil 3 · Msj → resp · H1 · H2 · H3 · H4 · H5 · H6 · ¿Movió?`. Carry semáforos forward from the last row; **bold only the ones that changed**. `s/r` stays `s/r` if the user did not answer.
   **The new §2.2 row**, in order: `Semana · ① Contactados (env → vistos → resp) · ③ Sesiones (agend → hechas) · ④ Discovery → Pitch · ⑤ Ofertas dichas · ⑥ Síes · ⑦ Pagados · ⑧ Diagnósticos entregados · ⑨ Activos al mes 2 · de ellos, perfil ③` — this week's counts — plus the **recomputed Σ row** (sum of every row since 14-sep; the italic *antes del 14-sep* row never sums). Update the one-line *"Lo que el embudo dice de un vistazo"* below the table (where the funnel stalls, in plain words).
b. **§1 diff** — only if there is new evidence: which H cell changes (evidence text · kill · read · N), which gate row changes, cobertura de perfil, and the header date `(al YYYY-MM-DD · N semanas de Fase A)`. If nothing changed: *"§1: sin cambios salvo la fecha."*
c. **The one-line `📊` for the BITACORA** entry, replacing the body of its `**▸ 📊 Scorecard H1–H6**` section (or inserting it before `▸ 🎯` if missing): `**▸ 📊 Scorecard H1–H6** — <delta in one line> · scorecard → \`10-scorecard-fase-a.md\``
d. **Frontmatter bumps** — SCORECARD `last_updated` + patch version (`0.1 → 0.2 → …`); BITACORA `last_updated` only if you touch it.

Then **WAIT for an explicit OK.** Do not apply on silence or on a partial answer.

### Step 5 — Apply (after OK only)

- Edit with exact-string replacement; verify every anchor matches **exactly once** before writing.
- Insert the §2.1 row **below** the last row (chronological, oldest first). Insert the §2.2 row **above the Σ row**, then rewrite Σ.
- Always update the §1 header date, even when nothing else changed.
- Do not touch other sections, earlier retros, or LEARNINGS.
- **Do not commit.** End by listing the files changed and any §4 decision still open.

## Guardrails (from `06-plan` · non-negotiable)

- **Never invent** a number, a name, a date or a semáforo. Missing → ask; still missing → `s/r`.
- **Revelado > declarado.** A *"pagaría"* is never H6 🟢. A *"te mando los docs"* is not H4 🟢 until the docs arrive.
- **Conectores e insiders never count toward N.** They appear in italics in the sessions cell — and in italics in ① of the funnel, without summing.
- **Funnel counts are counts, never percentages** (`12` §6.3). One person, one stage: a *sí* without the price said stays in ④ (never ⑥); a *"va"* is not ⑦ until the transfer is in the account; ⑤ requires the price said **with the point argument**.
- **A 🟢 always carries its N.** With N=1 write `🟢 direccional`.
- **The perfil-3 counter only resets** when a perfil-3 operator session actually happened.
- **If the retro contradicts LEARNINGS, flag it and ask** — never pick silently.
- The workspace rule applies: **propose, the founder disposes.** No autonomous progression.
