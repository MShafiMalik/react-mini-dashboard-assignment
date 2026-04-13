# React Mini Dashboard Assignment

A single-page application that fulfills a front-end hiring assignment: an **API-driven product listing** (mini dashboard) and a **validated user input form**, delivered in one cohesive React app with a clear architecture and production-minded tooling.

## What this project does

### Task 1 — API-based listing (mini dashboard)

- Fetches products from a public REST API (Fake Store API by default).
- Renders a responsive **card grid** with **title**, **image**, and **price**.
- **Search** by product name (debounced) and **sort** by name or price.
- Handles **loading** (skeletons), **error** (retry), and **empty** results.
- **Client-side pagination** after filter/sort (API does not support offset-based pagination).
- **Redux Toolkit** for filter/sort/page state; **RTK Query** for the products request.

### Task 2 — Form and validation

- Fields: **full name**, **email**, **phone number**, **password** (required markers on labels).
- **Zod** schema + **React Hook Form** with inline errors; invalid submits are blocked.
- Successful submit calls a **fake POST** endpoint (JSONPlaceholder by default) via **RTK Query** (`formApi`).
- **Sonner** toast on successful submit; API errors surface with an inline alert and retry.

### Tooling and quality

- **TypeScript**, **Vite**, **Tailwind CSS**, **shadcn/ui** (Base UI primitives where applicable).
- **Light/dark** theme via `next-themes`.
- **ESLint**, **Prettier**, **Husky**, **lint-staged**, **Commitlint** (conventional commits).

---

## Tech stack (summary)

| Area         | Choice                                      |
| ------------ | ------------------------------------------- |
| UI           | React 19, TypeScript, Vite                  |
| Styling      | Tailwind CSS, shadcn/ui                     |
| Theme        | `next-themes` + CSS variables               |
| Global state | Redux Toolkit, React Redux                  |
| Server state | RTK Query (`listingApi`, `formApi`)         |
| Routing      | React Router DOM                            |
| Forms        | React Hook Form, Zod, `@hookform/resolvers` |
| Feedback     | Sonner (`Toaster` in `App.tsx`)             |

For rationale and diagrams, see **[ARCHITECTURE.md](./ARCHITECTURE.md)**.

---

## Architecture (overview)

### Layers

```text
┌─────────────────────────────────────────────────────────────┐
│  Presentation: pages/*, page components, layout, components/ui │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  State & logic: app/store, slices, Zod schema, RTK Query    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  External: Fake Store (products), JSONPlaceholder (form POST) │
└─────────────────────────────────────────────────────────────┘
```

### Source layout (current)

```text
src/
├── app/
│   ├── store.ts              # Redux store (listingFilters, listingApi, formApi)
│   └── hooks.ts              # Typed dispatch / selector hooks
├── features/
│   ├── listing/
│   │   ├── listingApi.ts     # RTK Query: getProducts
│   │   ├── listingFiltersSlice.ts   # search, sort, pagination page
│   │   ├── listingSlice.ts   # filterAndSortProducts helper
│   │   └── types.ts
│   └── form/
│       ├── formApi.ts        # RTK Query: submitUserRegistration (POST)
│       └── schema.ts         # Zod form schema + FormValues type
├── pages/
│   ├── ListingPage/
│   │   ├── index.tsx
│   │   └── components/       # ItemCard, filters, skeletons, pagination, etc.
│   └── FormPage/
│       ├── index.tsx
│       └── components/       # FormInputField, ErrorAlert
├── components/
│   ├── layout/AppShell.tsx   # Shell, nav, theme toggle
│   ├── theme-*.tsx
│   └── ui/                   # shadcn-style primitives
├── App.tsx                   # Routes + Toaster
└── main.tsx                  # Providers (Redux, Router, Theme)
```

High-level routing: **`/` → `/listing`**, routes **`/listing`** and **`/form`** nested under `AppShell`.

Detailed system diagrams, sequence sketches, and UI guidelines live in **[ARCHITECTURE.md](./ARCHITECTURE.md)**.

---

## Environment variables

Copy **`.env.example`** to **`.env`** (`.env` is gitignored).

| Variable                    | Purpose                                                        |
| --------------------------- | -------------------------------------------------------------- |
| `VITE_LISTING_API_BASE_URL` | Base URL for product listing (default: Fake Store)             |
| `VITE_FORM_SUBMIT_URL`      | URL for the fake form POST (default: JSONPlaceholder `/posts`) |

Restart the dev server after changing `.env`.

---

## Scripts

```bash
npm install          # Dependencies
npm run dev          # Local dev server
npm run build        # Typecheck + production build
npm run lint         # ESLint
npm run format       # Prettier write
npm run format:check # Prettier check
```

---

## Implementation stages

Step-by-step setup, optional commit messages, acceptance checks, and a manual QA list are maintained in **[IMPLEMENTATION-STAGES.md](./IMPLEMENTATION-STAGES.md)**. Use it to trace how the stack was introduced (ESLint → Prettier → Husky → Tailwind → shadcn → theme → routing/Redux → listing → form → notifications → polish).

---

## Documentation index

| Document                                               | Contents                                                                       |
| ------------------------------------------------------ | ------------------------------------------------------------------------------ |
| [ARCHITECTURE.md](./ARCHITECTURE.md)                   | Tech stack detail, mermaid diagrams, listing/form flows, UI and error strategy |
| [IMPLEMENTATION-STAGES.md](./IMPLEMENTATION-STAGES.md) | Staged checklist, stack matrix, verification commands                          |

---

## Assignment alignment (quick checklist)

- Listing: fetch API, grid cards, title/image/price, search, sort, loading/error states, responsive layout, Redux + RTK Query, debounced search, pagination (client-side).
- Form: required fields, email format, strong password rules, inline errors, block invalid submit, success feedback (toast + reset), optional API-style submit.
