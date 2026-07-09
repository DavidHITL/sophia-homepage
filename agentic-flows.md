# Agentic Flow Animations

Each flow shows a step-by-step animation of Sophia processing a real scenario. Steps appear sequentially with a typing/slide-in effect.

---

## Inside Sales

### RFQ & Quotation
**Scenario:** Customer sends an RFQ via email for 5 different cnc component including pdf technical drawings

1. `[READ]` Reading email from mueller@stahlwerk-gmbh.de — RFQ for 5 positions
2. `[EXTRACT]` Extracting article numbers, quantities, and delivery dates from attachment "RFQ-2026-0412.pdf"
3. `[LOOKUP]` Checking ERP for current stock levels for materials (alu and steel) and pricing for all 5 items
4. `[CALCULATE]` Calculate prices based on calculation schema and extracted features from the drawings
5. `[CREATE]` Generating quotation ANG-2026-0587 in ERP
6. `[DRAFT]` Drafting reply email with quotation PDF attached
7. `[DONE]` Quotation sent to mueller@stahlwerk-gmbh.de — total: €14,320.00

### Order Processing
**Scenario:** Customer confirms an order based on a previous quote.

1. `[READ]` Reading email from schmidt@autoparts-ag.de — order confirmation for ANG-2026-0412
2. `[MATCH]` Matching to existing quotation ANG-2026-0412 (3 positions, €8,450)
3. `[VERIFY]` Verifying stock availability for all 3 items — 2 in stock, 1 backordered
4. `[CREATE]` Creating sales order SO-2026-1103 in ERP
5. `[TRIGGER]` Triggering purchase order for backordered item (Sensor Module XR-200, qty: 50)
6. `[DRAFT]` Drafting order confirmation email with delivery dates
7. `[DONE]` Order confirmed — estimated delivery: 2 items Apr 10, 1 item Apr 18

### Customer Support
**Scenario:** Customer asks about delivery status of an open order.

1. `[READ]` Reading email from logistics@brenner-technik.de — "Where is our order SO-2026-0987?"
2. `[LOOKUP]` Checking ERP for order SO-2026-0987 — 4 positions
3. `[TRACK]` Querying shipping provider DHL — tracking #1Z999AA10123456784
4. `[STATUS]` Position 1-3: In transit, arriving Apr 7 | Position 4: Dispatched today
5. `[DRAFT]` Drafting status update email with tracking links
6. `[DONE]` Delivery status sent to logistics@brenner-technik.de

### Sales Initiatives
**Scenario:** Sophia proactively identifies upsell opportunities from customer behavior.

1. `[SCAN]` Scanning 47 customer accounts for reorder patterns
2. `[IDENTIFY]` Brenner Technik orders cutting tools every 8 weeks — next order due in 3 days
3. `[IDENTIFY]` AutoParts AG ordered 200 sensors last quarter but only 50 this quarter — potential drop-off
4. `[ANALYZE]` Checking margin data — Brenner Technik has 18% margin potential on premium tooling line
5. `[DRAFT]` Drafting proactive reorder suggestion email to Brenner Technik with bundle offer
6. `[DRAFT]` Drafting check-in email to AutoParts AG — offering volume discount to recover order volume
7. `[DONE]` 2 sales initiative emails queued for review

---

## Accounting

### Payables Processing
**Scenario:** Supplier invoice arrives via email.

1. `[READ]` Reading email from buchhaltung@lieferant-xyz.de — Invoice INV-2026-3301 attached
2. `[EXTRACT]` Extracting invoice data: €6,780.00, 14 line items, due Apr 20
3. `[MATCH]` Matching invoice to purchase order PO-2026-0445 — all items match
4. `[VERIFY]` Cross-checking delivery receipt — goods received Apr 2, quantities confirmed
5. `[BOOK]` Creating AP entry in ERP, assigning cost centers
6. `[APPROVE]` Routing to department head for approval (amount > €5,000 threshold)
7. `[DONE]` Invoice INV-2026-3301 booked and routed for approval — payment scheduled Apr 20

### Reimbursement
**Scenario:** Employee submits a travel expense report via email.

1. `[READ]` Reading email from m.weber@company.de — expense report for trade fair visit
2. `[EXTRACT]` Extracting 7 receipts from PDF: hotel (€340), train (€189), meals (3x), taxi (2x)
3. `[VALIDATE]` Checking against travel policy — all amounts within limits
4. `[VALIDATE]` Verifying tax rates on receipts — correcting VAT on hotel from 19% to 7%
5. `[BOOK]` Creating expense report EXP-2026-0112, assigning to cost center "Sales"
6. `[APPROVE]` Routing to manager K. Fischer for approval
7. `[DONE]` Expense report €623.40 submitted for approval — reimbursement target: Apr 15

### Preparatory Accounting
**Scenario:** Month-end closing preparation.

1. `[SCAN]` Scanning inbox for unprocessed invoices — found 3 unbooked documents
2. `[PROCESS]` Processing invoice from TechSupply GmbH — €2,100, matched to PO
3. `[PROCESS]` Processing invoice from CleanServ AG — €450, recurring contract
4. `[FLAG]` Invoice from Müller KG — €8,900, no matching PO found — flagged for review
5. `[RECONCILE]` Checking bank statements against open items — 2 payments unmatched
6. `[REPORT]` Generating preliminary closing summary: 142 booked, 3 pending, 2 unmatched payments
7. `[DONE]` Preparatory accounting complete — 3 items require manual review

---

## Operative Procurement

### POs
**Scenario:** Creating purchase orders based on stock levels and demand.

1. `[SCAN]` Checking inventory levels against minimum stock thresholds
2. `[ALERT]` 4 items below reorder point: Sensor XR-200, Bearing M12, Cable Set C4, Filter F8
3. `[COMPARE]` Comparing 3 approved suppliers for Sensor XR-200 — best price: TechParts GmbH (€42/unit)
4. `[CREATE]` Generating PO-2026-0891 to TechParts GmbH — 200x Sensor XR-200, €8,400
5. `[CREATE]` Generating PO-2026-0892 to BearingWorld — 500x Bearing M12, €3,750
6. `[SEND]` Sending POs to suppliers via email
7. `[DONE]` 4 purchase orders created and dispatched — total value: €18,320

### RFQs Processing
**Scenario:** Sending out requests for quotation to multiple suppliers.

1. `[NEED]` New project requires 3 custom components — no existing supplier pricing
2. `[SELECT]` Identifying qualified suppliers from approved vendor list: 4 matches
3. `[CREATE]` Generating RFQ with specifications, quantities, and delivery requirements
4. `[SEND]` Sending RFQ to SupplierA, SupplierB, SupplierC, SupplierD
5. `[TRACK]` Setting follow-up reminder for responses — deadline: Apr 12
6. `[DONE]` RFQ sent to 4 suppliers — awaiting quotes

### Order Confirmation
**Scenario:** Processing incoming order confirmations from suppliers.

1. `[READ]` Reading email from vertrieb@techparts.de — order confirmation for PO-2026-0891
2. `[MATCH]` Matching to PO-2026-0891: 200x Sensor XR-200
3. `[COMPARE]` Checking confirmed vs. ordered: price matches, delivery date 2 days later than requested
4. `[UPDATE]` Updating ERP with confirmed delivery date: Apr 14
5. `[NOTIFY]` Informing warehouse team of expected delivery
6. `[DONE]` Order confirmation processed — delivery Apr 14

### Delay Management
**Scenario:** Supplier reports a delivery delay.

1. `[READ]` Reading email from logistik@bearingworld.de — delay notification for PO-2026-0892
2. `[ASSESS]` Original delivery: Apr 10, new estimate: Apr 17 — 7 day delay
3. `[IMPACT]` Checking dependent orders: SO-2026-1088 and SO-2026-1092 affected
4. `[SEARCH]` Searching alternative suppliers for emergency stock — 1 available (FastParts, +15% premium)
5. `[DRAFT]` Drafting delay notification to affected customers with revised dates
6. `[ESCALATE]` Flagging for procurement manager: approve premium order or accept delay?
7. `[DONE]` Delay impact assessed — 2 options prepared for decision

### On-time Hunting
**Scenario:** Proactively tracking open purchase orders approaching delivery dates.

1. `[SCAN]` Checking 23 open POs with delivery dates within next 5 days
2. `[FLAG]` 3 POs without shipping confirmation: PO-0878, PO-0881, PO-0885
3. `[SEND]` Sending status request to supplier for PO-0878 (TechParts GmbH)
4. `[SEND]` Sending status request to supplier for PO-0881 (MetalWorks AG)
5. `[RECEIVE]` PO-0885 — supplier confirms shipment tomorrow, tracking to follow
6. `[UPDATE]` Updating delivery calendar in ERP
7. `[DONE]` 3 suppliers contacted — 1 confirmed, 2 awaiting response

---

## Controlling

### Custom Report
**Scenario:** CEO requests a weekly margin analysis by product group.

1. `[READ]` Reading email from ceo@company.de — "Need margin overview by product group for Q1"
2. `[QUERY]` Pulling revenue data from ERP: 4 product groups, 847 transactions
3. `[QUERY]` Pulling cost data: material costs, freight, discounts applied
4. `[CALCULATE]` Computing margins: Sensors 34%, Bearings 28%, Cables 41%, Filters 22%
5. `[COMPARE]` Comparing to Q4: Sensors +3%, Bearings -2%, Cables +5%, Filters -4%
6. `[GENERATE]` Creating report with charts and trend analysis
7. `[DONE]` Q1 margin report sent to ceo@company.de — overall margin: 31.2% (+1.5% vs Q4)
