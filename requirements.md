Project Overview
AI-powered procurement app for SMEs on Firebase to forecast demand, auto-create PRs/POs, negotiate/payment terms, coordinate logistics, track delivery, process payments, and maintain audit trails with mandatory human oversight gates and AI learning.
Firebase Architecture Requirements
Firestore collections: users, suppliers, forwarders, purchase_requisitions, purchase_orders, shipments, invoices, payments, audit_logs, notifications, analytics.
Firebase Auth: roles (authorized_personnel, procurement_staff, finance, admin) via custom claims.
Cloud Functions: HTTP/callable (approvals), triggers (on PR/PO/Invoice updates), schedulers (sync emails, delivery polling, analytics).
Storage: documents (POs, invoices, NOA, airwaybills, GRN).
Realtime updates: Firestore for workflow state; optional RTDB channel for live tracking streams.
Core Functional Requirements (Sequenced)
1) Ingest external data (market prices, industry news, government finance) + SAP historical purchases; feed ML demand forecasting.2) Auto-generate draft PRs from forecast.3) Email suppliers for updated pricing/terms.4) Human reviews/adjusts/cancels PR.5) Human reviews payment term options.6) Decision: terms accepted? If no → human negotiation; capture outcomes for learning.7) Approved PRs follow threshold-based approval routing.8) AI generates PO; emails supplier with disclosure and “request human” prompt.Logistics (parallel to 8):
Determine transport mode (air/sea) from size/weight/qty.
Select 3 forwarders from SAP partners; email for quotes.
Authorized personnel approves quote → trigger forwarder payment via banking API.
Monitor for NOA/AWB; after ETD, request shipper details.Monitoring & Tracking:
Continuous supplier email parsing.
“Human Response Required?” gate to escalate and embed email UI for takeover and learning.
Periodic delivery status sync; follow-up emails; retrieve cargo receipt (SAP).Final Processing:
3-way matching (PO–GRN–Invoice); execute payments per terms; full audit and dashboards.
Firebase Implementation
Functions: email_monitor, forecast_runner, pr_generator, approval_router, po_generator, logistics_quoting, payment_executor, delivery_sync, analytics_builder.
Firestore rules: role-based read/write; document-level ownership; audit write-only via server.
Extensions: SendGrid (email), payment processor (Stripe or bank webhook), Scheduler, BigQuery export (analytics).
Schedules: delivery_sync (15m), email_monitor (5m), forecast_runner (daily).
External Integrations
SAP endpoints (history, partners, GRN); Email API (send/receive with disclosure tag); Banking/payment API; Government, Market pricing, News APIs; ML hosting (Vertex AI/Cloud Run).
Data Models (key fields)
users:{role, claims}
suppliers/forwarders:{sap_id, contacts, terms, performance}
purchase_requisitions:{items[], forecast_ref, status, approvals[], terms, audit_ref}
purchase_orders:{pr_ref, supplier_ref, items[], terms, status, email_thread_id, files[]}
shipments:{po_ref, mode, forwarder_ref, quotes[], etd, eta, noa_ref, awb_ref, status}
invoices:{po_ref, amount, files[], status}
payments:{entity_ref, amount, method, status, txn_id}
audit_logs:{entity, action, actor, timestamp, diff}
notifications:{user_ref, type, payload, read}
analytics:{kpis, snapshots}
Security & Compliance
Enforce Auth + least-privilege rules; encrypt sensitive data at rest/in transit; redact PII in logs; email disclosure tagging; immutable audit_logs (server-only).
AI/ML Components
Forecasting model; email parsing/classification; transport mode scorer; negotiation pattern learner; supplier performance predictor.
Roles & Permissions
Authorized Personnel: approvals, negotiations, forwarder selection.
Procurement Staff: PR creation, supplier mgmt.
Finance: invoice matching, payments.
Admin: role assignment, configs.
Phases
1) PR/PO core + Auth, rules, audit.2) Email integration, approvals, supplier responses.3) Logistics quoting + payments.4) Tracking, 3-way match, dashboards.5) ML forecasting and AI learning modules.

