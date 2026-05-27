# Client CRM Portal (mock)

A small standalone web app that mimics a Salesforce Lightning Experience
list view of customer "Requests". Pure UI mock with hardcoded data &mdash;
no backend integrations, no editing.

Built as a sales demo prop. Each row carries an **External ID**, a
**Description**, and a **Timestamp**, the three fields a typical CRM
exposes when a record was created from (or links to) an external system.

## Run locally

```bash
npm install
npm run dev
open http://localhost:3000/
```

## Routes

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/` | The Salesforce-styled Requests list view |
| `GET` | `/health` | Liveness probe (used by Railway) |
| `GET` | `/api/requests` | JSON: `{ requests: [{ externalId, description, timestamp }, ...] }` |

## Editing the mock data

Edit [`src/data/requests.js`](src/data/requests.js). Timestamps are ISO 8601
strings; the frontend formats them relatively for recent items ("3h ago",
"2d ago") and absolutely for older ones.

## Deploy on Railway

1. Push to a public GitHub repo.
2. Create a Railway project, add a service from the repo.
3. Set `PORT=3000` in the service Variables (so the public domain's
   `targetPort=3000` matches the listening port).
4. Railway builds with Nixpacks and runs `npm start`.

## Project structure

```
src/
  app.js              # Express bootstrap + routes
  data/requests.js    # Mock request records
public/
  index.html          # Salesforce Lightning chrome and list table
  styles.css          # SLDS-inspired styles (no SLDS package dependency)
  app.js              # Fetch + render + timestamp formatting
railway.json
package.json
```

## Out of scope (intentionally)

- Record detail pages, edit forms, search/sort/filter logic.
- Auth.
- Any sync to Zendesk or other systems.
