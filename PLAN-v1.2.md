# DClaw Data — v1.2 Feature Roadmap

> 📘 **REVISED PRD v2.3 available:** See `REVISED-PRD.md` for complete gap analysis, current state, and full feature roadmap.


> Based on: Y Combinator vertical SaaS principles, trending GitHub repos (metabase, superset), AI product research (Hex, Deepnote, Mode Analytics, Count)

## Pre-Flight Checklist

- [ ] `frontend/package-lock.json` committed after any `npm install` / dependency change
- [ ] `frontend/next-env.d.ts` exists and is committed
- [ ] `docker-compose.yml` healthchecks correct
- [ ] `frontend/Dockerfile` declares `ARG NEXT_PUBLIC_API_URL` before `RUN npm run build`

## v1.0 Feature Inventory (Current)

- [ ] Data source connections
- [ ] SQL query editor
- [ ] Basic charts
- [ ] Dashboard grid
- [ ] Real backend CRUD (no mocks)
- [ ] Docker + Helm deployment
- [ ] Alembic migrations
- [ ] Backend tests

---

## v1.2 Roadmap

### P0 — Must Have (Ship in v1.0, demo-ready)

#### 1. AI Data Copilot (Analytics Assistant)
**Description:** AI assistant that writes SQL, explains queries, and suggests visualizations. "Show me monthly revenue by region as a line chart."
- **AI Angle:** Text-to-SQL generation. Query explanation. Chart recommendation.
- **Backend:** `/api/v1/ai/data-chat` endpoint. Schema-aware SQL generation.
- **Frontend:** Chat panel with executable SQL preview and chart auto-generation.
- **Files:** `backend/app/services/data_ai.py`, `frontend/src/components/data-copilot.tsx`

#### 2. Visual Query Builder
**Description:** No-code query builder with joins, filters, aggregations, and calculated fields.
- **Backend:** Query builder AST → SQL compiler.
- **Frontend:** Visual builder with live preview and schema browser.
- **Files:** `backend/app/services/query_builder.py`, `frontend/src/app/queries/builder.tsx`

#### 3. Interactive Dashboards
**Description:** Drag-and-drop dashboards with filters, drill-down, and real-time refresh.
- **Backend:** Dashboard persistence. Parameterized query execution.
- **Frontend:** Dashboard canvas with widget library.
- **Files:** `frontend/src/app/dashboards/builder.tsx`

#### 4. Data Source Connectors
**Description:** Connect to PostgreSQL, MySQL, BigQuery, Snowflake, CSV, Google Sheets.
- **Backend:** Connector framework with schema introspection.
- **Frontend:** Connection wizard with test button.
- **Files:** `backend/app/services/connectors.py`

### P1 — Should Have (v1.1–1.2)

#### 5. AI-Generated Insights
**Description:** AI automatically surfaces trends, anomalies, and correlations in data.
- **AI Angle:** Statistical analysis + LLM narrative generation.
- **Backend:** Insight detection engine.
- **Frontend:** Insights feed with "Why is this happening?" drill-down.

#### 6. Data Catalog & Lineage
**Description:** Auto-catalog tables, columns, and metrics. Track data lineage from source to dashboard.
- **Backend:** Schema crawler. Lineage graph builder.
- **Frontend:** Data catalog with search. Lineage visualization.

#### 7. Scheduled Reports & Alerts
**Description:** Schedule dashboard exports. Alert on metric thresholds.
- **Backend:** Report scheduler. Alert evaluation engine.
- **Frontend:** Schedule builder. Alert rule editor.

#### 8. Data Governance & Access Control
**Description:** Row-level security, column masking, and audit logging.
- **Backend:** Policy enforcement engine. Query audit log.
- **Frontend:** Governance dashboard with access matrix.

### P2 — Could Have (v1.3+)

#### 9. Natural Language Reporting
**Description:** Generate full analytical reports from natural language prompts with narratives and charts.

#### 10. Collaborative Data Notebooks
**Description:** SQL + Python + Markdown notebooks for exploratory data analysis.

#### 11. Predictive Analytics
**Description:** Built-in forecasting, anomaly detection, and what-if scenario modeling.

#### 12. Embedded Analytics SDK
**Description:** White-label analytics for external apps with iframe/React SDK.

---

## Implementation Priority

1. **Week 1–2:** AI Data Copilot (P0.1) + Visual Query Builder (P0.2)
2. **Week 3–4:** Interactive Dashboards (P0.3) + Data Connectors (P0.4)
3. **Week 5–6:** AI Insights (P1.5) + Data Catalog (P1.6)
4. **Week 7–8:** Scheduled Reports (P1.7) + Governance (P1.8)
