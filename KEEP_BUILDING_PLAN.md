# FlyRank AI Fluency — The Plan to Keep Building: Sustaining Your Platform

**Student:** Yousef Mohamed Abdelazem  
**Live Portfolio URL:** [https://yousefmohamed662006-debug.github.io](https://yousefmohamed662006-debug.github.io)  
**GitHub Repository:** [https://github.com/yousefmohamed662006-debug/yousefmohamed662006-debug.github.io](https://github.com/yousefmohamed662006-debug/yousefmohamed662006-debug.github.io)

---

## 1. Executive Summary

A portfolio that never gets a second project goes stale and stops proving active capability. The difference between a static classroom artifact and an evolving career platform is a standardized, frictionless runbook for publishing new engineering milestones.

This document establishes the **5-step runbook** for adding new case studies, specifies the **next named real project**, sets a **concrete calendar reminder**, and preserves the **AI pair-programming context**.

---

## 2. Standardized 5-Step Runbook: How to Add the Next Case Study

To add a new project in under 15 minutes without redesigning layout or breaking styles:

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                      THE 5-STEP CASE STUDY RUNBOOK                      │
├─────────────────────────────────────────────────────────────────────────┤
│ 1. INTAKE & 3-BEAT DRAFT                                                │
│    Draft the core narrative using the 3-beat structure:                 │
│    • Beat 1 (The Problem): What business/technical bottleneck existed?  │
│    • Beat 2 (The Decision): Why this architecture/model over baselines? │
│    • Beat 3 (The Outcome): What measurable metric proved success?       │
├─────────────────────────────────────────────────────────────────────────┤
│ 2. CREATE HTML PAGE                                                     │
│    Duplicate `content-opportunity.html` → `new-project-slug.html`.      │
│    Keep the shared `styles.css` link and verified header/footer.        │
├─────────────────────────────────────────────────────────────────────────┤
│ 3. ADD PROOF CARDS & METRICS                                            │
│    Insert 1–2 real evaluation metrics (e.g. Accuracy %, F1, Precision@K)│
│    and link the public GitHub repository.                               │
├─────────────────────────────────────────────────────────────────────────┤
│ 4. LINK FROM HOMEPAGE GRID                                              │
│    In `index.html`, duplicate one `.project-card` inside `#projects`.   │
│    Update number (e.g. 05), tag list, and href to the new HTML page.    │
├─────────────────────────────────────────────────────────────────────────┤
│ 5. COMMIT & CONTINUOUS DEPLOY                                           │
│    Run: `git add . && git commit -m "Add [Project Name] case study"`    │
│    Run: `git push origin main` (Deploys live in < 30 seconds).          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. The Named Next Real Piece of Work

* **Project Title:** **`Clin-AI` — Evidence-Grounded Medical AI Assistant**
* **Technical Stack:** RAG Pipeline, Qdrant Vector Database, Qwen3 Embeddings, GPT-OSS, Python, FastAPI.
* **The 3-Beat Summary to be Published:**
  - **The Problem:** Standard LLM medical query assistants suffer from hallucinations and ungrounded advice, making them dangerous for clinical decision-support.
  - **The Decision:** Engineered a strict dual-retrieval pipeline with semantic embeddings stored in Qdrant, enforcing mandatory citation constraints and refusal rules whenever evidence confidence falls below threshold.
  - **The Outcome:** Measured an initial zero-hallucination rate on controlled clinical guideline benchmarks, with full citation traceability for every generated response.
* **Target Delivery Date:** **October 15, 2026**

---

## 4. Concrete Calendar Reminder Set

* **Reminder Event:** `Portfolio Refresh: Publish Clin-AI Case Study`
* **Trigger Date:** **October 15, 2026 at 10:00 AM**
* **Cadence:** Quarterly review recurring every 3 months.
* **Checklist Triggered:**
  - [ ] Add `clin-ai.html` to repository.
  - [ ] Add evaluation metric badge to homepage stats.
  - [ ] Check all existing links and update CV PDF if newly revised.

---

## 5. Preserving the AI Build Context

The workspace context (including typography tokens, color palette `#1D4ED8` / `#53d6b4`, accessible 48px touch targets, and voice tone) is preserved within this repository and our AI development environment.

Adding future case studies requires only providing raw experimental logs and numbers to the agent—the design, formatting, and deployment are completely automated and instantaneous.
