export const experience = [
  {
    range: "2024–2026",
    title: "Graduate Research Assistant",
    org: "Arkansas State University",
    place: "Jonesboro, AR",
    bullets: [
      "Extracted, compiled, and validated research data for faculty at the Griffin Graduate Program using statistical tools.",
      "Supported Graduate Business Fundamentals and Corporate Finance courses — proctoring, grading, and academic performance reporting.",
    ],
  },
  {
    range: "2022–2024",
    title: "Accounts Payable Analyst",
    org: "TotalEnergies",
    place: "Dar es Salaam, Tanzania",
    bullets: [
      "Processed supplier payments totaling $1.6M+ per month, reconciling vendor accounts to corporate audit standards.",
      "Built automated Power BI/VBA dashboards consolidating multiple operational platforms, cutting monthly reporting time 40%.",
      "Ran daily validation checks on fuel-card and digital-payment reconciliation across 100+ locations, cutting quarter-end reporting lead time 20%.",
    ],
  },
  {
    range: "2021–2022",
    title: "Audit Assistant",
    org: "Shrewd (T) Associates",
    place: "Dar es Salaam, Tanzania",
    bullets: [
      "Set up cloud-based record management for hospitality, mining, and construction clients, replacing legacy bookkeeping.",
      "Ran tax health checks and prepared final accounts across a diverse client portfolio.",
    ],
  },
  {
    range: "2020–2021",
    title: "Business Development Officer",
    org: "CRDB Bank Plc",
    place: "Dar es Salaam, Tanzania",
    bullets: [
      "Delivered data-informed marketing campaigns for underbanked rural communities.",
      "Contributed to a 70% expansion of the bank's agent network.",
    ],
  },
  {
    range: "2018–2020",
    title: "Audit Intern",
    org: "Shrewd (T) Associates",
    place: "Dar es Salaam / Mbeya, Tanzania",
  },
] as const;

export const links = {
  email: "briankileo@gmail.com",
  linkedin: "https://www.linkedin.com/in/briankileo",
};

export type ProjectStatus = "VERIFIED" | "AUDITED" | "IN PROGRESS";

export type StoryBeat = { label: string; text: string };

export type Project = {
  code: string;
  title: string;
  status: ProjectStatus;
  summary: string;
  stats: { label: string; value: string }[];
  detail?: string;
  tech: string[];
  link?: { label: string; href: string; note?: string };
  story?: StoryBeat[];
};

export const projects: Project[] = [
  {
    code: "ENTRY-BRMK",
    title: "BRMK Ops Platform",
    status: "AUDITED",
    summary:
      "Financial operations system for a family-owned microfinance lender: a React front end — PKCE auth with role-based routing — over a governed Postgres/Supabase backend where postings are double-entry and must balance, approvals go through a maker-checker flow, and access is enforced by row-level security.",
    stats: [
      { label: "GL engine", value: "double-entry, balance-asserted" },
      { label: "Front end", value: "React + Vite" },
      { label: "Schema", value: "23 tables, 6 domains" },
      { label: "Loan classification", value: "BOT 5-bucket" },
      { label: "Access control", value: "RLS by role" },
    ],
    detail:
      "This repo covers only the schema, migration, and reporting layer — synthetic data, no production code. The live webapp (Dashboard and Borrower-register screens shipped; loan origination and repayments in progress) stays private.",
    tech: ["React", "TypeScript", "Supabase / PostgreSQL", "PL/pgSQL", "Claude Code"],
    link: {
      label: "View sanitized schema on GitHub",
      href: "https://github.com/bkcodes255/microfinance-data-migration-demo",
    },
    story: [
      {
        label: "The problem",
        text: "A family-owned microfinance lender was running its general ledger the way a lot of small lenders do — spreadsheets, manual reconciliation, and trust that nobody would push a posting through without a second set of eyes. That trust doesn't hold at scale, and it doesn't survive an audit.",
      },
      {
        label: "Why it mattered",
        text: "It's family. The people depending on this ledger being right are people I know, and my own background in accounts payable and audit (TotalEnergies, Shrewd & Associates) meant I could see exactly where the risk lived: unreconciled accounts, approvals with no trail, access that wasn't actually scoped to role.",
      },
      {
        label: "The approach",
        text: "Rebuild the ledger around invariants instead of discipline: postings must be double-entry and must balance, full stop. Every approval routes through a maker-checker flow so no single person can move money unchecked. Loan classification follows BOT's 5-bucket standard in the schema itself, not a spreadsheet someone forgets to update.",
      },
      {
        label: "Building it",
        text: "A 23-table schema across 6 domains, PL/pgSQL enforcing the balance and classification rules at the database layer, row-level security scoping access by role, and a React/Vite front end with PKCE auth. I built the schema, migrations, and reporting layer with Claude Code — this repo is the sanitized version; the live webapp (Dashboard and Borrower-register screens shipped, loan origination and repayments in progress) stays private because it's a real institution's data.",
      },
    ],
  },
  {
    code: "ENTRY-SAP",
    title: "S/4HANA FI Configuration",
    status: "IN PROGRESS",
    summary:
      "Structured configuration notes across SAP's FI customizing path — company codes, master data governance, document control, posting control, and clearing — built while working through S4F10 (Business Processes in Financial Accounting) and S4F12 (Customizing FI: General Ledger, Accounts Payable, Accounts Receivable) toward the SAP Certified Associate exam (C_TS4FI).",
    stats: [
      { label: "S4F10", value: "complete" },
      { label: "S4F12", value: "in progress, 6 units / 28 exercises" },
      { label: "S4F13", value: "next" },
      { label: "Goal", value: "C_TS4FI certification" },
    ],
    tech: ["SAP S/4HANA 2023", "FI Customizing (IMG)"],
    link: {
      label: "View configuration log",
      href: "/work/sap-fi-configuration",
    },
  },
  {
    code: "ENTRY-FPL",
    title: "Fergie's Regression",
    status: "VERIFIED",
    summary:
      "A full decision pipeline for Fantasy Premier League: ingests live data, predicts player points, optimizes transfers and squad selection under FPL's actual constraints, then backtests every decision against a real season.",
    stats: [
      { label: "Transfer engine vs. static squad", value: "+346 pts/season" },
      { label: "Model R²", value: "0.320" },
      { label: "Squad optimizer", value: "<1s (MILP)" },
      { label: "Monte Carlo runs", value: "10,000" },
    ],
    detail:
      "Backtested on the full 2025-26 season: the decision engine beat a static squad by 346 points — more than perfect weekly captaincy alone would have gained.",
    tech: ["Python", "PostgreSQL", "XGBoost", "PuLP", "Streamlit", "Claude Code"],
    link: {
      label: "View on GitHub",
      href: "https://github.com/bkcodes255/fergies-regression",
    },
    story: [
      {
        label: "The problem",
        text: "Every Fantasy Premier League decision — who to captain, who to transfer, when to take a hit — was getting made on vibes. A few seasons of finishing mid-table made it obvious gut instinct wasn't beating the noise.",
      },
      {
        label: "Why it mattered",
        text: "I've followed the Premier League since I was a kid, and FPL turned that into a weekly competition against friends. I wanted to know, for real, whether a disciplined model-driven process could beat instinct over a full season — not on a holdout set, against the actual 2025-26 fixtures.",
      },
      {
        label: "The approach",
        text: "Treat it as a decision pipeline, not a prediction contest: ingest live data, forecast points with a model that admits its own uncertainty, then hand those forecasts to an optimizer that respects FPL's real constraints — budget, squad composition, one captain, limited free transfers. Backtest every decision against what actually happened.",
      },
      {
        label: "Building it",
        text: "An XGBoost model predicts player points (R² 0.320); a Monte Carlo layer runs 10,000 simulations per gameweek to price in variance; a MILP solver (PuLP) picks the optimal squad and transfers in under a second. Injury and fixture-congestion signal is engineered as a volatility feature, but it isn't folded into the quantile models yet. I built this with Claude Code end to end, including chasing down a real static-artifact-path bug that was quietly breaking the deployed dashboard.",
      },
      {
        label: "The result",
        text: "Backtested on the full 2025-26 season, the decision engine beat a static squad by 346 points — more than perfect weekly captaincy alone would have gained.",
      },
    ],
  },
];

export const sapCourses = [
  { code: "S4F10", name: "Business Processes in Financial Accounting", status: "complete" },
  {
    code: "S4F12",
    name: "Customizing FI: General Ledger, Accounts Payable, Accounts Receivable",
    status: "in progress",
  },
  { code: "S4F13", name: "Additional FI Configuration", status: "next" },
  {
    code: "C_TS4FI",
    name: "SAP Certified Associate — SAP S/4HANA for Financial Accounting Associates",
    status: "goal",
  },
] as const;

export const sapConfigLog = [
  {
    unit: "Unit 1 — SAP S/4HANA Overview",
    weeks: "Week 1 · Exercise 1",
    entries: [
      { ex: 1, tcode: "—", config: "Navigated the Fiori Launchpad (tiles, spaces, pages, fact sheets)" },
    ],
  },
  {
    unit: "Unit 2 — Core FI Configuration",
    weeks: "Week 2 · Exercises 2–6",
    entries: [
      {
        ex: 2,
        tcode: "OX02",
        config: "Created company codes GR98 and BK98 by copying template TA00",
        screenshots: [
          { src: "/work/sap-proof/ex2-1-create-cc.webp", caption: "Copying TA00 to create the company code" },
          { src: "/work/sap-proof/ex2-2-define-cc.webp", caption: "Defining the new company code's parameters" },
        ],
      },
      {
        ex: 3,
        tcode: "OBY6",
        config: "Assigned Company IDs (GE98, 1998) and displayed global parameters",
        screenshots: [
          { src: "/work/sap-proof/ex3-1-company-id.webp", caption: "Creating Company IDs GE98 / 1998" },
          { src: "/work/sap-proof/ex3-2-assign-company-id.webp", caption: "Assigning Company IDs to GR98 / BK98" },
        ],
      },
      {
        ex: 4,
        tcode: "—",
        config: "Assigned company codes GR98/BK98 to controlling area A000",
        screenshots: [
          { src: "/work/sap-proof/ex4-1-cc-to-ca.webp", caption: "Confirming GR98 & BK98 under controlling area A000" },
        ],
      },
      {
        ex: 5,
        tcode: "—",
        config: "Checked leading-ledger settings and per-company-code ledger activation",
        screenshots: [
          { src: "/work/sap-proof/ex5-1-ll-id.webp", caption: "Finding the leading ledger's ID in customizing" },
          { src: "/work/sap-proof/ex5-2-cc-settings-ledger.webp", caption: "Checking company-code settings for ledger 2L" },
          { src: "/work/sap-proof/ex5-3-ledger-posting-allowed.webp", caption: "Verifying ledger 2L is allowed for posting" },
        ],
      },
      {
        ex: 6,
        tcode: "OB29",
        config: "Created a calendar fiscal year variant (12+4 periods) and a non-calendar variant (4+1 periods, Apr–Mar)",
        screenshots: [
          { src: "/work/sap-proof/ex6-1-fyv-create.webp", caption: "Creating a calendar FYV, 12+4 periods" },
          { src: "/work/sap-proof/ex6-2-fyv-assign.webp", caption: "Assigning the new FYV to company code GR98" },
          { src: "/work/sap-proof/ex6-3-fyv-plus60.webp", caption: "Building FYV +60 — 4+1 periods, Apr–Mar fiscal year" },
        ],
      },
    ],
  },
  {
    unit: "Unit 3 — Master Data",
    weeks: "Week 3 · Exercises 7–11",
    entries: [
      {
        ex: 7,
        tcode: "OBD4",
        config: "Created G/L account groups (AE98, CD98) and G/L accounts with company-code segments",
        screenshots: [
          { src: "/work/sap-proof/ex7-1-account-groups.webp", caption: "Creating G/L account groups AE98 / CD98" },
          { src: "/work/sap-proof/ex7-2-gl-accounts-fiori.webp", caption: "Creating G/L accounts and CC segments (Fiori)" },
          { src: "/work/sap-proof/ex7-3-display-gls-coa.webp", caption: "Displaying the chart of accounts by F.S structure" },
        ],
      },
      {
        ex: 8,
        tcode: "KS01",
        config: "Created a segment (SE98), profit center (PR98), and cost center (COCE98)",
        screenshots: [
          { src: "/work/sap-proof/ex8-1-segment.webp", caption: "Creating segment SE98" },
          { src: "/work/sap-proof/ex8-2-profit-center.webp", caption: "Creating profit center PR98" },
          { src: "/work/sap-proof/ex8-3-cost-center.webp", caption: "Creating cost center COCE98" },
          { src: "/work/sap-proof/ex8-4-cost-center-usage.webp", caption: "Checking where the cost center is used" },
        ],
      },
      {
        ex: 9,
        tcode: "BP",
        config: "Set up Business Partner groupings, customer account groups, and CVI sync (heaviest exercise)",
        screenshots: [
          { src: "/work/sap-proof/ex9-1-bp-number-range.webp", caption: "Setting up the Business Partner number range" },
          { src: "/work/sap-proof/ex9-2-bp-group.webp", caption: "Creating the Business Partner grouping" },
          { src: "/work/sap-proof/ex9-3-customer-acc-group.webp", caption: "Creating the customer account group + number range" },
        ],
      },
      { ex: 10, tcode: "—", config: "Created customer/vendor Business Partners and configured field status" },
      { ex: 11, tcode: "—", config: "Configured sensitive-field dual control on Business Partner records" },
    ],
  },
  {
    unit: "Unit 4 — Document Control",
    weeks: "Week 4 · Exercises 12–17",
    entries: [
      { ex: 12, tcode: "FBN1", config: "Defined number ranges and a document type" },
      { ex: 13, tcode: "—", config: "Classified the document type for document splitting" },
      { ex: 14, tcode: "—", config: "Created a field status group and assigned it to a G/L account" },
      { ex: 15, tcode: "OB52", config: "Maintained posting period variants" },
      { ex: 16, tcode: "—", config: "Created a tolerance group and assigned it to a user" },
      { ex: 17, tcode: "—", config: "Posted simple FI documents" },
    ],
  },
  {
    unit: "Unit 5 — Posting Control",
    weeks: "Week 5 · Exercises 18–25 (heaviest unit)",
    entries: [
      { ex: 18, tcode: "—", config: "Posted a document with document splitting active" },
      { ex: 19, tcode: "—", config: "Maintained default values for document entry" },
      { ex: 20, tcode: "—", config: "Set change control on a field" },
      { ex: 21, tcode: "FB08", config: "Reversed a posted document" },
      { ex: 22, tcode: "—", config: "Configured payment terms" },
      { ex: 23, tcode: "FTXP", config: "Created a tax code and posted a customer invoice with tax" },
      { ex: 24, tcode: "—", config: "Configured cross-company-code transaction settings" },
      { ex: 25, tcode: "—", config: "Posted and displayed a cross-company-code document" },
    ],
  },
  {
    unit: "Unit 6 — Financial Document Clearing",
    weeks: "Week 6 · Exercises 26–28",
    entries: [
      { ex: 26, tcode: "F-03", config: "Cleared an account" },
      { ex: 27, tcode: "F-04", config: "Posted a document with clearing" },
      { ex: 28, tcode: "—", config: "Managed payment differences" },
    ],
  },
] as const;

export const backtest = {
  title: "Decision engine vs. baselines — 2025-26 season backtest",
  unit: "points",
  rows: [
    { label: "Static squad, no transfers", value: 1445, highlight: false },
    { label: "Static squad, oracle picks", value: 1637, highlight: false },
    { label: "Full decision engine", value: 1791, highlight: true },
  ],
};
