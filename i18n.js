// =============================================
// SOPHIA i18n System
// =============================================

// Section 1: Language detection and persistence
(function() {
    var params = new URLSearchParams(window.location.search);
    var lang = params.get('lang') || localStorage.getItem('sophia-lang') || 'en';
    if (['de','en'].indexOf(lang) === -1) lang = 'en';
    localStorage.setItem('sophia-lang', lang);
    if (!params.get('lang')) {
        var url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);
    }
    document.documentElement.lang = lang;
    window.SOPHIA_LANG = lang;
})();

// Section 2: Helper functions
window.getI18nData = function(page) {
    var lang = window.SOPHIA_LANG;
    return window.SOPHIA_I18N[page]?.[lang] || window.SOPHIA_I18N[page]?.['en'];
};
window.getUILabel = function(key) {
    var lang = window.SOPHIA_LANG;
    return window.SOPHIA_I18N.ui[lang]?.[key] || window.SOPHIA_I18N.ui['en']?.[key] || key;
};

// Section 3: UI labels
window.SOPHIA_I18N = {
    ui: {
        en: {
            inbox: 'Inbox',
            sophiaAgent: 'Sophia Agent',
            waiting: 'Waiting',
            processing: 'Processing',
            done: 'Done',
            autonomous: 'Autonomous',
            allDone: 'All done',
            sophiaReply: 'Sophia Reply',
            sent: 'Sent',
            prompt: 'What would you like to do...',
            unread: 'unread',
            noTrigger: 'No trigger',
            autonomousMode: 'Autonomous mode',
            noEmailTrigger: 'No email trigger needed',
            sentCount: 'sent'
        },
        de: {
            inbox: 'Inbox',
            sophiaAgent: 'Sophia Agent',
            waiting: 'Warten',
            processing: 'Verarbeitung',
            done: 'Fertig',
            autonomous: 'Autonom',
            allDone: 'Alles erledigt',
            sophiaReply: 'Sophia Antwort',
            sent: 'Gesendet',
            prompt: 'Was möchten Sie tun...',
            unread: 'ungelesen',
            noTrigger: 'Kein Trigger',
            autonomousMode: 'Autonomer Modus',
            noEmailTrigger: 'Kein E-Mail-Trigger erforderlich',
            sentCount: 'gesendet'
        }
    },

    // =============================================
    // Section 4 & 5: Product page data
    // =============================================
    product: {
        en: {
            emailTriggers: {
                'inside-sales': {
                    'RFQ & Quotation': [
                        { from: 'mueller@stahlwerk-gmbh.de', subject: 'Inquiry: 5x CNC Components', attachment: 'RFQ-2026-0412.pdf', time: '09:02',
                          body: 'Dear Sir or Madam,\n\nplease send us a quotation for the following 5 CNC parts (technical drawings attached as PDF):\n\n1. CNC-milled bracket — Aluminum 6082, 50 pieces (drawing CNC-001)\n2. CNC-turned shaft — Steel C45, 80 pieces (drawing CNC-002)\n3. CNC-milled housing — Aluminum 7075, 25 pieces (drawing CNC-003)\n4. CNC-turned spacer — Steel S235, 200 pieces (drawing CNC-004)\n5. CNC-milled adapter plate — Aluminum 6082, 40 pieces (drawing CNC-005)\n\nDelivery date: CW 17\n\nBest regards\nThomas Müller\nStahlwerk GmbH',
                          reply: { to: 'mueller@stahlwerk-gmbh.de', subject: 'Re: Inquiry: 5x CNC Components — Quotation ANG-2026-0587', attachment: 'ANG-2026-0587.pdf',
                            body: 'Dear Mr. Müller,\n\nthank you for your inquiry. Please find attached our quotation ANG-2026-0587 for all 5 CNC parts.\n\nPrices were calculated based on your technical drawings and our calculation schema (material, machining time, finishing).\n\nTotal: €14,320.00 net\nDelivery date: CW 17 confirmed\n\nPlease don\'t hesitate to contact us if you have any questions.\n\nBest regards\nSophia — on behalf of your Inside Sales Team' }
                        }
                    ],
                    'Order Processing': [
                        { from: 'schmidt@autoparts-ag.de', subject: 'Order for ANG-2026-0412', attachment: 'PO-2026-1848.pdf', time: '09:15',
                          body: 'Hello,\n\nhereby we confirm the order as per your quotation ANG-2026-0412.\n\nPlease send order confirmation and expected delivery date.\n\nRegards\nK. Schmidt\nAutoParts AG',
                          reply: { to: 'schmidt@autoparts-ag.de', subject: 'Re: Order for ANG-2026-0412 — Confirmation SO-2026-1103', attachment: 'AB-SO-2026-1103.pdf',
                            body: 'Dear Mr. Schmidt,\n\nyour order has been successfully created (SO-2026-1103).\n\nDelivery dates:\n• Pos. 1-2: April 10, 2026 (from stock)\n• Pos. 3: April 18, 2026 (reorder triggered)\n\nOrder confirmation attached.\n\nBest regards\nSophia — on behalf of your Inside Sales Team' }
                        }
                    ],
                    'Customer Support': [
                        { from: 'logistics@brenner-technik.de', subject: 'Where is our order SO-2026-0987?', attachment: null, time: '09:31',
                          body: 'Good morning,\n\ncould you please provide the current status of our order SO-2026-0987? We are urgently awaiting the delivery.\n\nThank you and regards\nLogistics Team\nBrenner Technik',
                          reply: { to: 'logistics@brenner-technik.de', subject: 'Re: Delivery status SO-2026-0987', attachment: null,
                            body: 'Good morning,\n\nhere is the current status of your order SO-2026-0987:\n\n• Pos. 1-3: In transit, arriving Apr 7 (DHL 1Z999AA10123456784)\n• Pos. 4: Dispatched today\n\nTracking links are attached.\n\nBest regards\nSophia — on behalf of your Support Team' }
                        }
                    ],
                    'Sales Initiatives': []
                },
                'accounting': {
                    'Payables Processing': [
                        { from: 'buchhaltung@lieferant-xyz.de', subject: 'Invoice INV-2026-3301', attachment: 'INV-2026-3301.pdf', time: '08:45',
                          body: 'Dear Sir or Madam,\n\nplease find attached our invoice INV-2026-3301 for €6,780.00.\n\n14 line items, payment due: April 20, 2026\n\nBest regards\nAccounting\nLieferant XYZ GmbH',
                          reply: null }
                    ],
                    'Reimbursement': [
                        { from: 'm.weber@company.de', subject: 'Travel expense report — trade fair', attachment: 'Belege-Messe.pdf', time: '10:12',
                          body: 'Hello,\n\nplease find attached my travel expense report for the trade fair visit last week.\n\n7 receipts: Hotel, train, 3x meals, 2x taxi\n\nPlease process for reimbursement.\n\nThank you\nM. Weber',
                          reply: null }
                    ],
                    'Preparatory Accounting': []
                },
                'procurement': {
                    'POs': [],
                    'RFQs Processing': [],
                    'Order Confirmation': [
                        { from: 'vertrieb@techparts.de', subject: 'Confirmation for PO-2026-0891', attachment: 'AB-TechParts.pdf', time: '11:05',
                          body: 'Dear Sir or Madam,\n\nhereby we confirm your order PO-2026-0891:\n\n200x Sensor XR-200 at €42.00\nDelivery date: April 14, 2026\n\nOrder confirmation attached.\n\nBest regards\nTechParts GmbH',
                          reply: null }
                    ],
                    'Delay Management': [
                        { from: 'logistik@bearingworld.de', subject: 'Delivery delay PO-2026-0892', attachment: null, time: '14:22',
                          body: 'Dear Sir or Madam,\n\nunfortunately we must inform you that the delivery of your order PO-2026-0892 is delayed.\n\nOriginal date: April 10\nNew date: April 17\n\nWe apologize for the inconvenience.\n\nBearingWorld GmbH',
                          reply: { to: 'betroffene-kunden@...', subject: 'Info: Delay on your order', attachment: null,
                            body: 'Dear Sir or Madam,\n\nwe would like to inform you that a partial delivery of your order is delayed by approximately 7 days.\n\nNew estimated date: April 17, 2026\n\nAlternatively, we are currently checking an express delivery via another supplier. We will get back to you shortly.\n\nBest regards\nSophia — on behalf of Procurement' } }
                    ],
                    'On-time Hunting': []
                },
                'controlling': {
                    'Custom Report': [
                        { from: 'ceo@company.de', subject: 'Margin overview by product group Q1', attachment: null, time: '07:30',
                          body: 'Good morning,\n\nplease prepare a margin overview by product group for Q1 2026.\n\nThank you\nCEO',
                          reply: { to: 'ceo@company.de', subject: 'Re: Margin overview Q1 2026', attachment: 'Q1-Margin-Report.pdf',
                            body: 'Good morning,\n\nplease find attached the Q1 Margin Report:\n\n• Sensors: 34% (+3% vs Q4)\n• Bearings: 28% (-2% vs Q4)\n• Cables: 41% (+5% vs Q4)\n• Filters: 22% (-4% vs Q4)\n\nOverall margin: 31.2% (+1.5% vs Q4)\n\nDetails in the attachment.\n\nSophia — on behalf of Controlling' }
                        }
                    ]
                },
                'ceo': {
                    'Overview': [
                        { from: 'ceo@company.de', subject: 'Quick update please', attachment: null, time: '08:00',
                          body: 'Morning,\n\nquick update please — what\'s on the agenda today?\n\nCEO',
                          reply: { to: 'ceo@company.de', subject: 'Re: Daily Briefing — April 5, 2026', attachment: 'Daily-Briefing-2026-04-05.pdf',
                            body: 'Good morning,\n\nhere is your daily briefing:\n\n• 12 quotations created — pipeline: €142,500\n• 8 invoices processed — 3 flagged for approval\n• 1 delivery delay affecting 2 customer orders — escalation in progress\n• Overall margin Q1: +1.5% vs previous quarter\n\n1 open item requires your decision (express delivery vs. accept delay).\n\nDetails in the attachment.\n\nSophia' }
                        }
                    ]
                }
            },
            flows: {
                'inside-sales': {
                    'RFQ & Quotation': {
                        scenario: 'Customer sends an RFQ via email for 5 different CNC components — including PDF technical drawings.',
                        steps: [
                            { tag: 'READ', text: 'Reading email from mueller@stahlwerk-gmbh.de — RFQ for 5 positions' },
                            { tag: 'EXTRACT', text: 'Extracting article numbers, quantities, and delivery dates from attachment "RFQ-2026-0412.pdf"' },
                            { tag: 'LOOKUP', text: 'Checking ERP for current stock levels for materials (aluminum and steel) and pricing for all 5 items' },
                            { tag: 'CALCULATE', text: 'Calculating prices based on calculation schema and features extracted from the technical drawings' },
                            { tag: 'CREATE', text: 'Generating quotation ANG-2026-0587 in ERP' },
                            { tag: 'DRAFT', text: 'Drafting reply email with quotation PDF attached' },
                            { tag: 'DONE', text: 'Quotation sent to mueller@stahlwerk-gmbh.de — total: €14,320.00' }
                        ]
                    },
                    'Order Processing': {
                        scenario: 'Customer confirms an order based on a previous quote.',
                        steps: [
                            { tag: 'READ', text: 'Reading email from schmidt@autoparts-ag.de — order confirmation for ANG-2026-0412' },
                            { tag: 'MATCH', text: 'Matching to existing quotation ANG-2026-0412 (3 positions, €8,450)' },
                            { tag: 'VERIFY', text: 'Verifying stock availability for all 3 items — 2 in stock, 1 backordered' },
                            { tag: 'CREATE', text: 'Creating sales order SO-2026-1103 in ERP' },
                            { tag: 'TRIGGER', text: 'Triggering purchase order for backordered item (Sensor Module XR-200, qty: 50)' },
                            { tag: 'DRAFT', text: 'Drafting order confirmation email with delivery dates' },
                            { tag: 'DONE', text: 'Order confirmed — estimated delivery: 2 items Apr 10, 1 item Apr 18' }
                        ]
                    },
                    'Customer Support': {
                        scenario: 'Customer asks about delivery status of an open order.',
                        steps: [
                            { tag: 'READ', text: 'Reading email from logistics@brenner-technik.de — "Where is our order SO-2026-0987?"' },
                            { tag: 'LOOKUP', text: 'Checking ERP for order SO-2026-0987 — 4 positions' },
                            { tag: 'TRACK', text: 'Querying shipping provider DHL — tracking #1Z999AA10123456784' },
                            { tag: 'STATUS', text: 'Position 1-3: In transit, arriving Apr 7 | Position 4: Dispatched today' },
                            { tag: 'DRAFT', text: 'Drafting status update email with tracking links' },
                            { tag: 'DONE', text: 'Delivery status sent to logistics@brenner-technik.de' }
                        ]
                    },
                    'Sales Initiatives': {
                        scenario: 'Sophia proactively identifies upsell opportunities from customer behavior.',
                        steps: [
                            { tag: 'SCAN', text: 'Scanning 47 customer accounts for reorder patterns' },
                            { tag: 'IDENTIFY', text: 'Brenner Technik orders cutting tools every 8 weeks — next order due in 3 days' },
                            { tag: 'IDENTIFY', text: 'AutoParts AG ordered 200 sensors last quarter but only 50 this quarter — potential drop-off' },
                            { tag: 'ANALYZE', text: 'Checking margin data — Brenner Technik has 18% margin potential on premium tooling line' },
                            { tag: 'DRAFT', text: 'Drafting proactive reorder suggestion email to Brenner Technik with bundle offer',
                              sentEmail: { to: 'einkauf@brenner-technik.de', subject: 'Your regular order cutting tools — bundle offer', body: 'Dear Sir or Madam,\n\nbased on your previous ordering pattern, we would like to present our new bundle offer for the premium tooling line.\n\n18% margin potential by switching to the premium line.\n\nQuotation attached.\n\nSophia — on behalf of Inside Sales' } },
                            { tag: 'DRAFT', text: 'Drafting check-in email to AutoParts AG — offering volume discount to recover order volume',
                              sentEmail: { to: 'schmidt@autoparts-ag.de', subject: 'Volume discount for sensors — your personal offer', body: 'Dear Mr. Schmidt,\n\nwe have noticed that your sensor orders have been declining. We would like to offer you a volume discount:\n\n200+ units: -8%\n500+ units: -15%\n\nWe are happy to discuss details.\n\nSophia — on behalf of Inside Sales' } },
                            { tag: 'DONE', text: '2 sales initiative emails queued for review' }
                        ]
                    }
                },
                'accounting': {
                    'Payables Processing': {
                        scenario: 'Supplier invoice arrives via email.',
                        steps: [
                            { tag: 'READ', text: 'Reading email from buchhaltung@lieferant-xyz.de — Invoice INV-2026-3301 attached' },
                            { tag: 'EXTRACT', text: 'Extracting invoice data: €6,780.00, 14 line items, due Apr 20' },
                            { tag: 'MATCH', text: 'Matching invoice to purchase order PO-2026-0445 — all items match' },
                            { tag: 'VERIFY', text: 'Cross-checking delivery receipt — goods received Apr 2, quantities confirmed' },
                            { tag: 'BOOK', text: 'Creating AP entry in ERP, assigning cost centers' },
                            { tag: 'APPROVE', text: 'Routing to department head for approval (amount > €5,000 threshold)' },
                            { tag: 'DONE', text: 'Invoice INV-2026-3301 booked and routed for approval — payment scheduled Apr 20' }
                        ]
                    },
                    'Reimbursement': {
                        scenario: 'Employee submits a travel expense report via email.',
                        steps: [
                            { tag: 'READ', text: 'Reading email from m.weber@company.de — expense report for trade fair visit' },
                            { tag: 'EXTRACT', text: 'Extracting 7 receipts from PDF: hotel (€340), train (€189), meals (3x), taxi (2x)' },
                            { tag: 'VALIDATE', text: 'Checking against travel policy — all amounts within limits' },
                            { tag: 'VALIDATE', text: 'Verifying tax rates on receipts — correcting VAT on hotel from 19% to 7%' },
                            { tag: 'BOOK', text: 'Creating expense report EXP-2026-0112, assigning to cost center "Sales"' },
                            { tag: 'APPROVE', text: 'Routing to manager K. Fischer for approval' },
                            { tag: 'DONE', text: 'Expense report €623.40 submitted for approval — reimbursement target: Apr 15' }
                        ]
                    },
                    'Preparatory Accounting': {
                        scenario: 'Month-end closing preparation.',
                        steps: [
                            { tag: 'SCAN', text: 'Scanning inbox for unprocessed invoices — found 3 unbooked documents' },
                            { tag: 'PROCESS', text: 'Processing invoice from TechSupply GmbH — €2,100, matched to PO' },
                            { tag: 'PROCESS', text: 'Processing invoice from CleanServ AG — €450, recurring contract' },
                            { tag: 'FLAG', text: 'Invoice from Müller KG — €8,900, no matching PO found — flagged for review' },
                            { tag: 'RECONCILE', text: 'Checking bank statements against open items — 2 payments unmatched' },
                            { tag: 'REPORT', text: 'Generating preliminary closing summary: 142 booked, 3 pending, 2 unmatched payments' },
                            { tag: 'DONE', text: 'Preparatory accounting complete — 3 items require manual review' }
                        ]
                    }
                },
                'procurement': {
                    'POs': {
                        scenario: 'Creating purchase orders based on stock levels and demand.',
                        steps: [
                            { tag: 'SCAN', text: 'Checking inventory levels against minimum stock thresholds' },
                            { tag: 'ALERT', text: '4 items below reorder point: Sensor XR-200, Bearing M12, Cable Set C4, Filter F8' },
                            { tag: 'COMPARE', text: 'Comparing 3 approved suppliers for Sensor XR-200 — best price: TechParts GmbH (€42/unit)' },
                            { tag: 'CREATE', text: 'Generating PO-2026-0891 to TechParts GmbH — 200x Sensor XR-200, €8,400' },
                            { tag: 'CREATE', text: 'Generating PO-2026-0892 to BearingWorld — 500x Bearing M12, €3,750' },
                            { tag: 'SEND', text: 'Sending POs to suppliers via email',
                              sentEmail: { to: 'vertrieb@techparts.de', subject: 'Purchase order PO-2026-0891 — 200x Sensor XR-200', attachment: 'PO-2026-0891.pdf', body: 'Dear Sir or Madam,\n\nhereby we order:\n\n200x Sensor XR-200 at €42.00 = €8,400.00\n\nRequested delivery date: CW 16\n\nPlease confirm the order.\n\nSophia — on behalf of Procurement' } },
                            { tag: 'DONE', text: '4 purchase orders created and dispatched — total value: €18,320' }
                        ]
                    },
                    'RFQs Processing': {
                        scenario: 'Sending out requests for quotation to multiple suppliers.',
                        steps: [
                            { tag: 'NEED', text: 'New project requires 3 custom components — no existing supplier pricing' },
                            { tag: 'SELECT', text: 'Identifying qualified suppliers from approved vendor list: 4 matches' },
                            { tag: 'CREATE', text: 'Generating RFQ with specifications, quantities, and delivery requirements' },
                            { tag: 'SEND', text: 'Sending RFQ to SupplierA, SupplierB, SupplierC, SupplierD',
                              sentEmail: { to: 'supplier-a@..., supplier-b@..., +2', subject: 'Inquiry: 3 custom components', attachment: 'RFQ-Specs.pdf', body: 'Dear Sir or Madam,\n\nwe require quotations for 3 customer-specific components.\n\nSpecifications and quantities are attached.\n\nQuotation deadline: April 12, 2026\n\nSophia — on behalf of Procurement' } },
                            { tag: 'TRACK', text: 'Setting follow-up reminder for responses — deadline: Apr 12' },
                            { tag: 'DONE', text: 'RFQ sent to 4 suppliers — awaiting quotes' }
                        ]
                    },
                    'Order Confirmation': {
                        scenario: 'Processing incoming order confirmations from suppliers.',
                        steps: [
                            { tag: 'READ', text: 'Reading email from vertrieb@techparts.de — order confirmation for PO-2026-0891' },
                            { tag: 'MATCH', text: 'Matching to PO-2026-0891: 200x Sensor XR-200' },
                            { tag: 'COMPARE', text: 'Checking confirmed vs. ordered: price matches, delivery date 2 days later than requested' },
                            { tag: 'UPDATE', text: 'Updating ERP with confirmed delivery date: Apr 14' },
                            { tag: 'NOTIFY', text: 'Informing warehouse team of expected delivery' },
                            { tag: 'DONE', text: 'Order confirmation processed — delivery Apr 14' }
                        ]
                    },
                    'Delay Management': {
                        scenario: 'Supplier reports a delivery delay.',
                        steps: [
                            { tag: 'READ', text: 'Reading email from logistik@bearingworld.de — delay notification for PO-2026-0892' },
                            { tag: 'ASSESS', text: 'Original delivery: Apr 10, new estimate: Apr 17 — 7 day delay' },
                            { tag: 'IMPACT', text: 'Checking dependent orders: SO-2026-1088 and SO-2026-1092 affected' },
                            { tag: 'SEARCH', text: 'Searching alternative suppliers for emergency stock — 1 available (FastParts, +15% premium)' },
                            { tag: 'DRAFT', text: 'Drafting delay notification to affected customers with revised dates' },
                            { tag: 'ESCALATE', text: 'Flagging for procurement manager: approve premium order or accept delay?' },
                            { tag: 'DONE', text: 'Delay impact assessed — 2 options prepared for decision' }
                        ]
                    },
                    'On-time Hunting': {
                        scenario: 'Proactively tracking open purchase orders approaching delivery dates.',
                        steps: [
                            { tag: 'SCAN', text: 'Checking 23 open POs with delivery dates within next 5 days' },
                            { tag: 'FLAG', text: '3 POs without shipping confirmation: PO-0878, PO-0881, PO-0885' },
                            { tag: 'SEND', text: 'Sending status request to supplier for PO-0878 (TechParts GmbH)',
                              sentEmail: { to: 'logistik@techparts.de', subject: 'Delivery status PO-0878?', body: 'Dear Sir or Madam,\n\ncould you please provide the shipping status for PO-0878?\n\nDelivery date: April 8, 2026\n\nThank you\nSophia — on behalf of Procurement' } },
                            { tag: 'SEND', text: 'Sending status request to supplier for PO-0881 (MetalWorks AG)',
                              sentEmail: { to: 'versand@metalworks.de', subject: 'Delivery status PO-0881?', body: 'Dear Sir or Madam,\n\nwe kindly request a status update on PO-0881.\n\nPlanned delivery date: April 9, 2026\n\nSophia — on behalf of Procurement' } },
                            { tag: 'RECEIVE', text: 'PO-0885 — supplier confirms shipment tomorrow, tracking to follow' },
                            { tag: 'UPDATE', text: 'Updating delivery calendar in ERP' },
                            { tag: 'DONE', text: '3 suppliers contacted — 1 confirmed, 2 awaiting response' }
                        ]
                    }
                },
                'controlling': {
                    'Custom Report': {
                        scenario: 'CEO requests a weekly margin analysis by product group.',
                        steps: [
                            { tag: 'READ', text: 'Reading email from ceo@company.de — "Need margin overview by product group for Q1"' },
                            { tag: 'QUERY', text: 'Pulling revenue data from ERP: 4 product groups, 847 transactions' },
                            { tag: 'QUERY', text: 'Pulling cost data: material costs, freight, discounts applied' },
                            { tag: 'CALCULATE', text: 'Computing margins: Sensors 34%, Bearings 28%, Cables 41%, Filters 22%' },
                            { tag: 'COMPARE', text: 'Comparing to Q4: Sensors +3%, Bearings -2%, Cables +5%, Filters -4%' },
                            { tag: 'GENERATE', text: 'Creating report with charts and trend analysis' },
                            { tag: 'DONE', text: 'Q1 margin report sent to ceo@company.de — overall margin: 31.2% (+1.5% vs Q4)' }
                        ]
                    }
                },
                'ceo': {
                    'Overview': {
                        scenario: 'Daily executive briefing across all departments.',
                        steps: [
                            { tag: 'SCAN', text: 'Aggregating activity across Inside Sales, Accounting, Procurement, Controlling' },
                            { tag: 'REPORT', text: '12 quotations created today — total pipeline: €142,500' },
                            { tag: 'REPORT', text: '8 invoices processed — 3 flagged for approval' },
                            { tag: 'ALERT', text: '1 delivery delay affecting 2 customer orders — escalation pending' },
                            { tag: 'STATUS', text: 'Overall margin trend: +1.5% vs last quarter' },
                            { tag: 'DRAFT', text: 'Compiling executive summary email' },
                            { tag: 'DONE', text: 'Daily briefing sent — 1 action item requires your decision' }
                        ]
                    }
                }
            }
        },
        de: {
            emailTriggers: {
                'inside-sales': {
                    'RFQ & Quotation': [
                        { from: 'mueller@stahlwerk-gmbh.de', subject: 'Anfrage: 5x CNC-Komponenten', attachment: 'RFQ-2026-0412.pdf', time: '09:02',
                          body: 'Sehr geehrte Damen und Herren,\n\nbitte senden Sie uns ein Angebot für folgende 5 CNC-Teile (technische Zeichnungen als PDF im Anhang):\n\n1. CNC-Frästeil Halterung — Aluminium 6082, 50 Stück (Zeichnung CNC-001)\n2. CNC-Drehteil Welle — Stahl C45, 80 Stück (Zeichnung CNC-002)\n3. CNC-Frästeil Gehäuse — Aluminium 7075, 25 Stück (Zeichnung CNC-003)\n4. CNC-Drehteil Distanzhülse — Stahl S235, 200 Stück (Zeichnung CNC-004)\n5. CNC-Frästeil Adapterplatte — Aluminium 6082, 40 Stück (Zeichnung CNC-005)\n\nLiefertermin: KW 17\n\nMit freundlichen Grüßen\nThomas Müller\nStahlwerk GmbH',
                          reply: { to: 'mueller@stahlwerk-gmbh.de', subject: 'Re: Anfrage: 5x CNC-Komponenten — Angebot ANG-2026-0587', attachment: 'ANG-2026-0587.pdf',
                            body: 'Sehr geehrter Herr Müller,\n\nvielen Dank für Ihre Anfrage. Anbei unser Angebot ANG-2026-0587 für alle 5 CNC-Teile.\n\nDie Preise wurden anhand Ihrer technischen Zeichnungen und unserem Kalkulations-Schema (Material, Bearbeitungszeit, Nachbearbeitung) ermittelt.\n\nGesamtsumme: €14.320,00 netto\nLiefertermin: KW 17 bestätigt\n\nBei Rückfragen stehen wir gerne zur Verfügung.\n\nMit freundlichen Grüßen\nSophia — im Auftrag Ihres Inside Sales Teams' }
                        }
                    ],
                    'Order Processing': [
                        { from: 'schmidt@autoparts-ag.de', subject: 'Bestellung zu ANG-2026-0412', attachment: 'PO-2026-1848.pdf', time: '09:15',
                          body: 'Hallo,\n\nhiermit bestätigen wir die Bestellung gemäß Ihrem Angebot ANG-2026-0412.\n\nBitte um Auftragsbestätigung und voraussichtlichen Liefertermin.\n\nGruß\nK. Schmidt\nAutoParts AG',
                          reply: { to: 'schmidt@autoparts-ag.de', subject: 'Re: Bestellung zu ANG-2026-0412 — Bestätigung SO-2026-1103', attachment: 'AB-SO-2026-1103.pdf',
                            body: 'Sehr geehrter Herr Schmidt,\n\nIhre Bestellung wurde erfolgreich angelegt (SO-2026-1103).\n\nLiefertermine:\n• Pos. 1-2: 10. April 2026 (ab Lager)\n• Pos. 3: 18. April 2026 (Nachbestellung ausgelöst)\n\nAuftragsbestätigung anbei.\n\nMit freundlichen Grüßen\nSophia — im Auftrag Ihres Inside Sales Teams' }
                        }
                    ],
                    'Customer Support': [
                        { from: 'logistics@brenner-technik.de', subject: 'Wo ist unsere Bestellung SO-2026-0987?', attachment: null, time: '09:31',
                          body: 'Guten Morgen,\n\nkönnen Sie uns bitte den aktuellen Status unserer Bestellung SO-2026-0987 mitteilen? Wir warten dringend auf die Lieferung.\n\nDanke und Gruß\nLogistik-Team\nBrenner Technik',
                          reply: { to: 'logistics@brenner-technik.de', subject: 'Re: Lieferstatus SO-2026-0987', attachment: null,
                            body: 'Guten Morgen,\n\nhier der aktuelle Status Ihrer Bestellung SO-2026-0987:\n\n• Pos. 1-3: In Zustellung, Ankunft 7. April (DHL 1Z999AA10123456784)\n• Pos. 4: Heute versandt\n\nTracking-Links finden Sie im Anhang.\n\nMit freundlichen Grüßen\nSophia — im Auftrag Ihres Support Teams' }
                        }
                    ],
                    'Sales Initiatives': []
                },
                'accounting': {
                    'Payables Processing': [
                        { from: 'buchhaltung@lieferant-xyz.de', subject: 'Rechnung INV-2026-3301', attachment: 'INV-2026-3301.pdf', time: '08:45',
                          body: 'Sehr geehrte Damen und Herren,\n\nanbei erhalten Sie unsere Rechnung INV-2026-3301 über €6.780,00.\n\n14 Positionen, Zahlungsziel: 20. April 2026\n\nMit freundlichen Grüßen\nBuchhaltung\nLieferant XYZ GmbH',
                          reply: null }
                    ],
                    'Reimbursement': [
                        { from: 'm.weber@company.de', subject: 'Reisekostenabrechnung Messe', attachment: 'Belege-Messe.pdf', time: '10:12',
                          body: 'Hallo,\n\nanbei meine Reisekostenabrechnung für den Messebesuch letzte Woche.\n\n7 Belege: Hotel, Bahn, 3x Verpflegung, 2x Taxi\n\nBitte um Erstattung.\n\nDanke\nM. Weber',
                          reply: null }
                    ],
                    'Preparatory Accounting': []
                },
                'procurement': {
                    'POs': [],
                    'RFQs Processing': [],
                    'Order Confirmation': [
                        { from: 'vertrieb@techparts.de', subject: 'AB zu PO-2026-0891', attachment: 'AB-TechParts.pdf', time: '11:05',
                          body: 'Sehr geehrte Damen und Herren,\n\nhiermit bestätigen wir Ihre Bestellung PO-2026-0891:\n\n200x Sensor XR-200 à €42,00\nLiefertermin: 14. April 2026\n\nAuftragsbestätigung anbei.\n\nMit freundlichen Grüßen\nTechParts GmbH',
                          reply: null }
                    ],
                    'Delay Management': [
                        { from: 'logistik@bearingworld.de', subject: 'Lieferverzug PO-2026-0892', attachment: null, time: '14:22',
                          body: 'Sehr geehrte Damen und Herren,\n\nleider müssen wir Ihnen mitteilen, dass sich die Lieferung Ihrer Bestellung PO-2026-0892 verzögert.\n\nUrsprungstermin: 10. April\nNeuer Termin: 17. April\n\nWir bitten um Verständnis.\n\nBearingWorld GmbH',
                          reply: { to: 'betroffene-kunden@...', subject: 'Info: Verzögerung Ihrer Bestellung', attachment: null,
                            body: 'Sehr geehrte Damen und Herren,\n\nwir möchten Sie informieren, dass sich eine Teillieferung Ihrer Bestellung um ca. 7 Tage verzögert.\n\nNeuer voraussichtlicher Termin: 17. April 2026\n\nAlternativ prüfen wir aktuell eine Expresslieferung über einen anderen Lieferanten. Wir melden uns kurzfristig.\n\nMit freundlichen Grüßen\nSophia — im Auftrag Einkauf' } }
                    ],
                    'On-time Hunting': []
                },
                'controlling': {
                    'Custom Report': [
                        { from: 'ceo@company.de', subject: 'Marginübersicht nach Produktgruppe Q1', attachment: null, time: '07:30',
                          body: 'Guten Morgen,\n\nbitte erstellen Sie mir eine Marginübersicht nach Produktgruppe für Q1 2026.\n\nDanke\nGF',
                          reply: { to: 'ceo@company.de', subject: 'Re: Marginübersicht Q1 2026', attachment: 'Q1-Margin-Report.pdf',
                            body: 'Guten Morgen,\n\nanbei der Q1 Margin Report:\n\n• Sensoren: 34% (+3% vs Q4)\n• Lager: 28% (-2% vs Q4)\n• Kabel: 41% (+5% vs Q4)\n• Filter: 22% (-4% vs Q4)\n\nGesamtmarge: 31,2% (+1,5% vs Q4)\n\nDetails im Anhang.\n\nSophia — im Auftrag Controlling' }
                        }
                    ]
                },
                'ceo': {
                    'Overview': [
                        { from: 'ceo@company.de', subject: 'Kurzes Update bitte', attachment: null, time: '08:00',
                          body: 'Morgen,\n\nkurzes Update bitte — was liegt heute an?\n\nGF',
                          reply: { to: 'ceo@company.de', subject: 'Re: Daily Briefing — 5. April 2026', attachment: 'Daily-Briefing-2026-04-05.pdf',
                            body: 'Guten Morgen,\n\nhier Ihr tägliches Briefing:\n\n• 12 Angebote erstellt — Pipeline: €142.500\n• 8 Rechnungen verarbeitet — 3 zur Freigabe\n• 1 Lieferverzögerung bei 2 Kundenaufträgen — Eskalation läuft\n• Gesamtmarge Q1: +1,5% vs Vorquartal\n\n1 offener Punkt benötigt Ihre Entscheidung (Expresslieferung vs. Verzögerung akzeptieren).\n\nDetails im Anhang.\n\nSophia' }
                        }
                    ]
                }
            },
            flows: {
                'inside-sales': {
                    'RFQ & Quotation': {
                        scenario: 'Kunde sendet eine Anfrage per E-Mail für 5 verschiedene CNC-Komponenten — inklusive technischer Zeichnungen als PDF.',
                        steps: [
                            { tag: 'READ', text: 'E-Mail lesen von mueller@stahlwerk-gmbh.de — Anfrage für 5 Positionen' },
                            { tag: 'EXTRACT', text: 'Artikelnummern, Mengen und Liefertermine aus Anhang "RFQ-2026-0412.pdf" extrahieren' },
                            { tag: 'LOOKUP', text: 'ERP auf aktuelle Lagerbestände der Materialien (Aluminium und Stahl) und Preise für alle 5 Artikel prüfen' },
                            { tag: 'CALCULATE', text: 'Preise basierend auf Kalkulations-Schema und aus den Zeichnungen extrahierten Features berechnen' },
                            { tag: 'CREATE', text: 'Angebot ANG-2026-0587 im ERP erstellen' },
                            { tag: 'DRAFT', text: 'Antwort-E-Mail mit Angebots-PDF im Anhang vorbereiten' },
                            { tag: 'DONE', text: 'Angebot an mueller@stahlwerk-gmbh.de gesendet — Gesamt: €14.320,00' }
                        ]
                    },
                    'Order Processing': {
                        scenario: 'Kunde bestätigt eine Bestellung basierend auf einem vorherigen Angebot.',
                        steps: [
                            { tag: 'READ', text: 'E-Mail lesen von schmidt@autoparts-ag.de — Bestellbestätigung für ANG-2026-0412' },
                            { tag: 'MATCH', text: 'Zuordnung zu bestehendem Angebot ANG-2026-0412 (3 Positionen, €8.450)' },
                            { tag: 'VERIFY', text: 'Lagerverfügbarkeit für alle 3 Artikel prüfen — 2 auf Lager, 1 nachbestellt' },
                            { tag: 'CREATE', text: 'Kundenauftrag SO-2026-1103 im ERP anlegen' },
                            { tag: 'TRIGGER', text: 'Bestellung für nachzubestellenden Artikel auslösen (Sensor Module XR-200, Menge: 50)' },
                            { tag: 'DRAFT', text: 'Auftragsbestätigung mit Lieferterminen vorbereiten' },
                            { tag: 'DONE', text: 'Bestellung bestätigt — voraussichtliche Lieferung: 2 Artikel 10. Apr., 1 Artikel 18. Apr.' }
                        ]
                    },
                    'Customer Support': {
                        scenario: 'Kunde fragt nach dem Lieferstatus einer offenen Bestellung.',
                        steps: [
                            { tag: 'READ', text: 'E-Mail lesen von logistics@brenner-technik.de — „Wo ist unsere Bestellung SO-2026-0987?"' },
                            { tag: 'LOOKUP', text: 'ERP-Abfrage für Bestellung SO-2026-0987 — 4 Positionen' },
                            { tag: 'TRACK', text: 'Versanddienstleister DHL abfragen — Sendungsnr. 1Z999AA10123456784' },
                            { tag: 'STATUS', text: 'Position 1-3: In Zustellung, Ankunft 7. Apr. | Position 4: Heute versandt' },
                            { tag: 'DRAFT', text: 'Statusupdate-E-Mail mit Tracking-Links vorbereiten' },
                            { tag: 'DONE', text: 'Lieferstatus an logistics@brenner-technik.de gesendet' }
                        ]
                    },
                    'Sales Initiatives': {
                        scenario: 'Sophia identifiziert proaktiv Upselling-Möglichkeiten aus dem Kundenverhalten.',
                        steps: [
                            { tag: 'SCAN', text: '47 Kundenkonten auf Nachbestellmuster analysieren' },
                            { tag: 'IDENTIFY', text: 'Brenner Technik bestellt alle 8 Wochen Schneidwerkzeuge — nächste Bestellung in 3 Tagen fällig' },
                            { tag: 'IDENTIFY', text: 'AutoParts AG hat letztes Quartal 200 Sensoren bestellt, dieses Quartal nur 50 — möglicher Rückgang' },
                            { tag: 'ANALYZE', text: 'Margendaten prüfen — Brenner Technik hat 18% Margenpotenzial bei Premium-Werkzeuglinie' },
                            { tag: 'DRAFT', text: 'Proaktive Nachbestellungs-E-Mail an Brenner Technik mit Bundle-Angebot vorbereiten',
                              sentEmail: { to: 'einkauf@brenner-technik.de', subject: 'Ihre regelmäßige Bestellung Schneidwerkzeuge — Bundle-Angebot', body: 'Sehr geehrte Damen und Herren,\n\nbasierend auf Ihrem bisherigen Bestellrhythmus möchten wir Ihnen unser neues Bundle-Angebot für die Premium-Werkzeuglinie vorstellen.\n\n18% Margenpotenzial bei Umstieg auf Premium-Linie.\n\nAngebot anbei.\n\nSophia — im Auftrag Inside Sales' } },
                            { tag: 'DRAFT', text: 'Rückgewinnungs-E-Mail an AutoParts AG vorbereiten — Mengenrabatt zur Steigerung des Bestellvolumens',
                              sentEmail: { to: 'schmidt@autoparts-ag.de', subject: 'Mengenrabatt für Sensoren — Ihr persönliches Angebot', body: 'Sehr geehrter Herr Schmidt,\n\nuns ist aufgefallen, dass Ihre Sensorbestellungen rückläufig sind. Wir möchten Ihnen einen Mengenrabatt anbieten:\n\n200+ Stück: -8%\n500+ Stück: -15%\n\nGerne besprechen wir Details.\n\nSophia — im Auftrag Inside Sales' } },
                            { tag: 'DONE', text: '2 Vertriebsinitiative-E-Mails zur Prüfung vorbereitet' }
                        ]
                    }
                },
                'accounting': {
                    'Payables Processing': {
                        scenario: 'Lieferantenrechnung kommt per E-Mail.',
                        steps: [
                            { tag: 'READ', text: 'E-Mail lesen von buchhaltung@lieferant-xyz.de — Rechnung INV-2026-3301 im Anhang' },
                            { tag: 'EXTRACT', text: 'Rechnungsdaten extrahieren: €6.780,00, 14 Positionen, fällig am 20. Apr.' },
                            { tag: 'MATCH', text: 'Rechnung mit Bestellung PO-2026-0445 abgleichen — alle Positionen stimmen überein' },
                            { tag: 'VERIFY', text: 'Wareneingang gegenkontrollieren — Waren am 2. Apr. eingegangen, Mengen bestätigt' },
                            { tag: 'BOOK', text: 'Kreditorenbuchung im ERP erstellen, Kostenstellen zuweisen' },
                            { tag: 'APPROVE', text: 'Zur Freigabe an Abteilungsleiter weiterleiten (Betrag > €5.000 Schwelle)' },
                            { tag: 'DONE', text: 'Rechnung INV-2026-3301 gebucht und zur Freigabe weitergeleitet — Zahlung geplant 20. Apr.' }
                        ]
                    },
                    'Reimbursement': {
                        scenario: 'Mitarbeiter reicht Reisekostenabrechnung per E-Mail ein.',
                        steps: [
                            { tag: 'READ', text: 'E-Mail lesen von m.weber@company.de — Reisekostenabrechnung für Messebesuch' },
                            { tag: 'EXTRACT', text: '7 Belege aus PDF extrahieren: Hotel (€340), Bahn (€189), Verpflegung (3x), Taxi (2x)' },
                            { tag: 'VALIDATE', text: 'Gegen Reiserichtlinie prüfen — alle Beträge innerhalb der Grenzen' },
                            { tag: 'VALIDATE', text: 'Steuersätze auf Belegen prüfen — MwSt. auf Hotel von 19% auf 7% korrigieren' },
                            { tag: 'BOOK', text: 'Reisekostenabrechnung EXP-2026-0112 erstellen, Kostenstelle „Vertrieb" zuweisen' },
                            { tag: 'APPROVE', text: 'Zur Genehmigung an Vorgesetzten K. Fischer weiterleiten' },
                            { tag: 'DONE', text: 'Reisekostenabrechnung €623,40 zur Genehmigung eingereicht — Erstattungsziel: 15. Apr.' }
                        ]
                    },
                    'Preparatory Accounting': {
                        scenario: 'Vorbereitung des Monatsabschlusses.',
                        steps: [
                            { tag: 'SCAN', text: 'Posteingang auf unverarbeitete Rechnungen prüfen — 3 ungebuchte Dokumente gefunden' },
                            { tag: 'PROCESS', text: 'Rechnung von TechSupply GmbH verarbeiten — €2.100, Bestellung zugeordnet' },
                            { tag: 'PROCESS', text: 'Rechnung von CleanServ AG verarbeiten — €450, Dauerauftrag' },
                            { tag: 'FLAG', text: 'Rechnung von Müller KG — €8.900, keine passende Bestellung gefunden — zur Prüfung markiert' },
                            { tag: 'RECONCILE', text: 'Kontoauszüge mit offenen Posten abgleichen — 2 Zahlungen nicht zugeordnet' },
                            { tag: 'REPORT', text: 'Vorläufige Abschlussübersicht erstellen: 142 gebucht, 3 offen, 2 nicht zugeordnete Zahlungen' },
                            { tag: 'DONE', text: 'Vorbereitende Buchhaltung abgeschlossen — 3 Posten erfordern manuelle Prüfung' }
                        ]
                    }
                },
                'procurement': {
                    'POs': {
                        scenario: 'Bestellungen basierend auf Lagerbeständen und Bedarf erstellen.',
                        steps: [
                            { tag: 'SCAN', text: 'Lagerbestände gegen Mindestbestandsgrenzen prüfen' },
                            { tag: 'ALERT', text: '4 Artikel unter Nachbestellpunkt: Sensor XR-200, Lager M12, Kabelsatz C4, Filter F8' },
                            { tag: 'COMPARE', text: '3 zugelassene Lieferanten für Sensor XR-200 vergleichen — bester Preis: TechParts GmbH (€42/Stück)' },
                            { tag: 'CREATE', text: 'Bestellung PO-2026-0891 an TechParts GmbH erstellen — 200x Sensor XR-200, €8.400' },
                            { tag: 'CREATE', text: 'Bestellung PO-2026-0892 an BearingWorld erstellen — 500x Lager M12, €3.750' },
                            { tag: 'SEND', text: 'Bestellungen per E-Mail an Lieferanten senden',
                              sentEmail: { to: 'vertrieb@techparts.de', subject: 'Bestellung PO-2026-0891 — 200x Sensor XR-200', attachment: 'PO-2026-0891.pdf', body: 'Sehr geehrte Damen und Herren,\n\nhiermit bestellen wir:\n\n200x Sensor XR-200 à €42,00 = €8.400,00\n\nGewünschter Liefertermin: KW 16\n\nBitte um Auftragsbestätigung.\n\nSophia — im Auftrag Einkauf' } },
                            { tag: 'DONE', text: '4 Bestellungen erstellt und versandt — Gesamtwert: €18.320' }
                        ]
                    },
                    'RFQs Processing': {
                        scenario: 'Anfragen an mehrere Lieferanten versenden.',
                        steps: [
                            { tag: 'NEED', text: 'Neues Projekt benötigt 3 Sonderkomponenten — keine bestehenden Lieferantenpreise' },
                            { tag: 'SELECT', text: 'Qualifizierte Lieferanten aus zugelassener Lieferantenliste identifizieren: 4 Treffer' },
                            { tag: 'CREATE', text: 'Anfrage mit Spezifikationen, Mengen und Lieferanforderungen erstellen' },
                            { tag: 'SEND', text: 'Anfrage an LieferantA, LieferantB, LieferantC, LieferantD senden',
                              sentEmail: { to: 'supplier-a@..., supplier-b@..., +2', subject: 'Anfrage: 3 Sonderkomponenten', attachment: 'RFQ-Specs.pdf', body: 'Sehr geehrte Damen und Herren,\n\nwir benötigen Angebote für 3 kundenspezifische Komponenten.\n\nSpezifikationen und Mengen im Anhang.\n\nAngebotsfrist: 12. April 2026\n\nSophia — im Auftrag Einkauf' } },
                            { tag: 'TRACK', text: 'Nachfass-Erinnerung für Rückmeldungen setzen — Frist: 12. Apr.' },
                            { tag: 'DONE', text: 'Anfrage an 4 Lieferanten gesendet — warten auf Angebote' }
                        ]
                    },
                    'Order Confirmation': {
                        scenario: 'Eingehende Auftragsbestätigungen von Lieferanten verarbeiten.',
                        steps: [
                            { tag: 'READ', text: 'E-Mail lesen von vertrieb@techparts.de — Auftragsbestätigung für PO-2026-0891' },
                            { tag: 'MATCH', text: 'Zuordnung zu PO-2026-0891: 200x Sensor XR-200' },
                            { tag: 'COMPARE', text: 'Bestätigt vs. bestellt prüfen: Preis stimmt, Liefertermin 2 Tage später als angefragt' },
                            { tag: 'UPDATE', text: 'ERP mit bestätigtem Liefertermin aktualisieren: 14. Apr.' },
                            { tag: 'NOTIFY', text: 'Lagerteam über erwartete Lieferung informieren' },
                            { tag: 'DONE', text: 'Auftragsbestätigung verarbeitet — Lieferung 14. Apr.' }
                        ]
                    },
                    'Delay Management': {
                        scenario: 'Lieferant meldet eine Lieferverzögerung.',
                        steps: [
                            { tag: 'READ', text: 'E-Mail lesen von logistik@bearingworld.de — Verzögerungsmeldung für PO-2026-0892' },
                            { tag: 'ASSESS', text: 'Ursprüngliche Lieferung: 10. Apr., neue Schätzung: 17. Apr. — 7 Tage Verzögerung' },
                            { tag: 'IMPACT', text: 'Abhängige Aufträge prüfen: SO-2026-1088 und SO-2026-1092 betroffen' },
                            { tag: 'SEARCH', text: 'Alternative Lieferanten für Notbestand suchen — 1 verfügbar (FastParts, +15% Aufpreis)' },
                            { tag: 'DRAFT', text: 'Verzögerungsbenachrichtigung an betroffene Kunden mit geänderten Terminen vorbereiten' },
                            { tag: 'ESCALATE', text: 'An Einkaufsleiter eskalieren: Premium-Bestellung genehmigen oder Verzögerung akzeptieren?' },
                            { tag: 'DONE', text: 'Auswirkungen der Verzögerung bewertet — 2 Optionen zur Entscheidung vorbereitet' }
                        ]
                    },
                    'On-time Hunting': {
                        scenario: 'Proaktive Überwachung offener Bestellungen mit nahenden Lieferterminen.',
                        steps: [
                            { tag: 'SCAN', text: '23 offene Bestellungen mit Lieferterminen in den nächsten 5 Tagen prüfen' },
                            { tag: 'FLAG', text: '3 Bestellungen ohne Versandbestätigung: PO-0878, PO-0881, PO-0885' },
                            { tag: 'SEND', text: 'Statusanfrage an Lieferanten für PO-0878 senden (TechParts GmbH)',
                              sentEmail: { to: 'logistik@techparts.de', subject: 'Lieferstatus PO-0878?', body: 'Sehr geehrte Damen und Herren,\n\nkönnen Sie uns bitte den Versandstatus zu PO-0878 mitteilen?\n\nLiefertermin: 8. April 2026\n\nDanke\nSophia — im Auftrag Einkauf' } },
                            { tag: 'SEND', text: 'Statusanfrage an Lieferanten für PO-0881 senden (MetalWorks AG)',
                              sentEmail: { to: 'versand@metalworks.de', subject: 'Lieferstatus PO-0881?', body: 'Sehr geehrte Damen und Herren,\n\nwir bitten um Statusmeldung zu PO-0881.\n\nGeplanter Liefertermin: 9. April 2026\n\nSophia — im Auftrag Einkauf' } },
                            { tag: 'RECEIVE', text: 'PO-0885 — Lieferant bestätigt Versand morgen, Tracking folgt' },
                            { tag: 'UPDATE', text: 'Lieferkalender im ERP aktualisieren' },
                            { tag: 'DONE', text: '3 Lieferanten kontaktiert — 1 bestätigt, 2 warten auf Rückmeldung' }
                        ]
                    }
                },
                'controlling': {
                    'Custom Report': {
                        scenario: 'CEO fordert eine wöchentliche Margenanalyse nach Produktgruppe an.',
                        steps: [
                            { tag: 'READ', text: 'E-Mail lesen von ceo@company.de — „Marginübersicht nach Produktgruppe für Q1 benötigt"' },
                            { tag: 'QUERY', text: 'Umsatzdaten aus ERP abrufen: 4 Produktgruppen, 847 Transaktionen' },
                            { tag: 'QUERY', text: 'Kostendaten abrufen: Materialkosten, Fracht, angewandte Rabatte' },
                            { tag: 'CALCULATE', text: 'Margen berechnen: Sensoren 34%, Lager 28%, Kabel 41%, Filter 22%' },
                            { tag: 'COMPARE', text: 'Vergleich mit Q4: Sensoren +3%, Lager -2%, Kabel +5%, Filter -4%' },
                            { tag: 'GENERATE', text: 'Bericht mit Diagrammen und Trendanalyse erstellen' },
                            { tag: 'DONE', text: 'Q1-Margenbericht an ceo@company.de gesendet — Gesamtmarge: 31,2% (+1,5% vs Q4)' }
                        ]
                    }
                },
                'ceo': {
                    'Overview': {
                        scenario: 'Tägliches Executive-Briefing über alle Abteilungen.',
                        steps: [
                            { tag: 'SCAN', text: 'Aktivitäten aus Inside Sales, Buchhaltung, Einkauf, Controlling zusammenfassen' },
                            { tag: 'REPORT', text: '12 Angebote heute erstellt — Gesamtpipeline: €142.500' },
                            { tag: 'REPORT', text: '8 Rechnungen verarbeitet — 3 zur Freigabe markiert' },
                            { tag: 'ALERT', text: '1 Lieferverzögerung betrifft 2 Kundenaufträge — Eskalation läuft' },
                            { tag: 'STATUS', text: 'Margentrend gesamt: +1,5% gegenüber Vorquartal' },
                            { tag: 'DRAFT', text: 'Executive-Zusammenfassung per E-Mail vorbereiten' },
                            { tag: 'DONE', text: 'Tägliches Briefing gesendet — 1 Punkt erfordert Ihre Entscheidung' }
                        ]
                    }
                }
            }
        }
    },

    // =============================================
    // Section 6 & 7: Direction2 page data
    // =============================================
    direction2: {
        en: {
            emails: [
                { from: 'mueller@technik-gmbh.de', subject: 'Order: 500x Sensor Module XR-200', attachment: 'Bestellung-TG-2026.pdf', time: '09:02' },
                { from: 'schmidt@autoparts-ag.de', subject: 'Inquiry: Price List Hydraulic Valves', attachment: null, time: '09:15' },
                { from: 'weber@logistik-express.com', subject: 'Complaint: Delivery #4821', attachment: 'Fotos-Schaden.zip', time: '09:31' },
                { from: 'bauer@pharma-solutions.de', subject: 'Reorder: Cleanroom Filter RF-12', attachment: 'PO-2026-1848.pdf', time: '09:44' }
            ],
            actions: [
                [
                    { text: 'Extracting order data from Bestellung-TG-2026.pdf', type: 'extract', file: 'Bestellung-TG-2026.pdf' },
                    { text: 'Customer identified: Technik GmbH (A-Kunde, 12 orders)', type: 'identify', tags: ['Technik GmbH', 'A-Kunde'] },
                    { text: 'Creating order ORD-2026-1847 — €42.500,00', type: 'create', ref: '#ORD-2026-1847' },
                    { text: 'Confirmation sent to mueller@technik-gmbh.de', type: 'done' }
                ],
                [
                    { text: 'Analyzing inquiry for Hydraulikventile HV-400', type: 'extract', file: null },
                    { text: 'New customer: AutoParts AG', type: 'identify', tags: ['AutoParts AG', 'Neukunde'] },
                    { text: 'Generating quote ANG-2026-0312 — €18.750,00', type: 'create', ref: '#ANG-2026-0312' },
                    { text: 'Quote sent to schmidt@autoparts-ag.de', type: 'done' }
                ],
                [
                    { text: 'Analyzing claim for Lieferung #4821', type: 'extract', file: 'Fotos-Schaden.zip' },
                    { text: 'Customer: Logistik Express (B-Kunde)', type: 'identify', tags: ['Logistik Express', 'B-Kunde'] },
                    { text: 'RMA created RMA-2026-0089 — €3.200,00 credit', type: 'create', ref: '#RMA-2026-0089' },
                    { text: 'Replacement confirmed to weber@logistik-express.com', type: 'done' }
                ],
                [
                    { text: 'Extracting reorder from PO-2026-1848.pdf', type: 'extract', file: 'PO-2026-1848.pdf' },
                    { text: 'Customer: Pharma Solutions (A-Kunde, 34 orders)', type: 'identify', tags: ['Pharma Solutions', 'A-Kunde'] },
                    { text: 'Creating order ORD-2026-1848 — €67.800,00', type: 'create', ref: '#ORD-2026-1848' },
                    { text: 'Confirmation sent to bauer@pharma-solutions.de', type: 'done' }
                ]
            ],
            followUps: [
                { text: 'Scanning 12 open quotes without response...', type: 'extract' },
                { text: 'Sending follow-up to AutoParts AG — quote ANG-2026-0312 pending for 5 days', type: 'create', ref: '#ANG-2026-0312' },
                { text: 'Follow-up sent to schmidt@autoparts-ag.de', type: 'done' },
                { text: 'Analyzing supplier pricing for Sensor Module XR-200...', type: 'extract', file: 'Lieferanten-Preise.xlsx' },
                { text: 'Found 3 alternative suppliers with 12-18% lower pricing', type: 'identify', tags: ['BestParts GmbH', 'SensorTech AG', 'MicroComp Ltd'] },
                { text: 'Drafting negotiation email to current supplier with competing quotes', type: 'create', ref: '#NEG-2026-0041' },
                { text: 'Price negotiation sent to supplier@components-direct.de', type: 'done' }
            ]
        },
        de: {
            emails: [
                { from: 'mueller@technik-gmbh.de', subject: 'Bestellung: 500x Sensor Module XR-200', attachment: 'Bestellung-TG-2026.pdf', time: '09:02' },
                { from: 'schmidt@autoparts-ag.de', subject: 'Anfrage: Preisliste Hydraulikventile', attachment: null, time: '09:15' },
                { from: 'weber@logistik-express.com', subject: 'Reklamation: Lieferung #4821', attachment: 'Fotos-Schaden.zip', time: '09:31' },
                { from: 'bauer@pharma-solutions.de', subject: 'Nachbestellung: Reinraumfilter RF-12', attachment: 'PO-2026-1848.pdf', time: '09:44' }
            ],
            actions: [
                [
                    { text: 'Bestelldaten aus Bestellung-TG-2026.pdf extrahieren', type: 'extract', file: 'Bestellung-TG-2026.pdf' },
                    { text: 'Kunde identifiziert: Technik GmbH (A-Kunde, 12 Bestellungen)', type: 'identify', tags: ['Technik GmbH', 'A-Kunde'] },
                    { text: 'Bestellung ORD-2026-1847 erstellen — €42.500,00', type: 'create', ref: '#ORD-2026-1847' },
                    { text: 'Bestätigung an mueller@technik-gmbh.de gesendet', type: 'done' }
                ],
                [
                    { text: 'Anfrage für Hydraulikventile HV-400 analysieren', type: 'extract', file: null },
                    { text: 'Neukunde: AutoParts AG', type: 'identify', tags: ['AutoParts AG', 'Neukunde'] },
                    { text: 'Angebot ANG-2026-0312 erstellen — €18.750,00', type: 'create', ref: '#ANG-2026-0312' },
                    { text: 'Angebot an schmidt@autoparts-ag.de gesendet', type: 'done' }
                ],
                [
                    { text: 'Reklamation für Lieferung #4821 analysieren', type: 'extract', file: 'Fotos-Schaden.zip' },
                    { text: 'Kunde: Logistik Express (B-Kunde)', type: 'identify', tags: ['Logistik Express', 'B-Kunde'] },
                    { text: 'RMA erstellt RMA-2026-0089 — €3.200,00 Gutschrift', type: 'create', ref: '#RMA-2026-0089' },
                    { text: 'Ersatzlieferung an weber@logistik-express.com bestätigt', type: 'done' }
                ],
                [
                    { text: 'Nachbestellung aus PO-2026-1848.pdf extrahieren', type: 'extract', file: 'PO-2026-1848.pdf' },
                    { text: 'Kunde: Pharma Solutions (A-Kunde, 34 Bestellungen)', type: 'identify', tags: ['Pharma Solutions', 'A-Kunde'] },
                    { text: 'Bestellung ORD-2026-1848 erstellen — €67.800,00', type: 'create', ref: '#ORD-2026-1848' },
                    { text: 'Bestätigung an bauer@pharma-solutions.de gesendet', type: 'done' }
                ]
            ],
            followUps: [
                { text: '12 offene Angebote ohne Rückmeldung prüfen...', type: 'extract' },
                { text: 'Nachfass-E-Mail an AutoParts AG senden — Angebot ANG-2026-0312 seit 5 Tagen offen', type: 'create', ref: '#ANG-2026-0312' },
                { text: 'Nachfass an schmidt@autoparts-ag.de gesendet', type: 'done' },
                { text: 'Lieferantenpreise für Sensor Module XR-200 analysieren...', type: 'extract', file: 'Lieferanten-Preise.xlsx' },
                { text: '3 alternative Lieferanten mit 12-18% günstigeren Preisen gefunden', type: 'identify', tags: ['BestParts GmbH', 'SensorTech AG', 'MicroComp Ltd'] },
                { text: 'Verhandlungs-E-Mail an aktuellen Lieferanten mit Vergleichsangeboten vorbereiten', type: 'create', ref: '#NEG-2026-0041' },
                { text: 'Preisverhandlung an supplier@components-direct.de gesendet', type: 'done' }
            ]
        }
    }
};

// =============================================
// Section 8: Language toggle injection
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    var lang = window.SOPHIA_LANG;

    function attachHandler(btn) {
        btn.addEventListener('click', function() {
            var newLang = this.dataset.lang;
            localStorage.setItem('sophia-lang', newLang);
            var url = new URL(window.location);
            url.searchParams.set('lang', newLang);
            window.location.href = url.toString();
        });
    }

    // Desktop toggle (in the hidden md:flex nav)
    var desktopNav = document.querySelector('header nav.hidden');
    if (desktopNav) {
        var toggle = document.createElement('div');
        toggle.className = 'flex items-center gap-1 ml-4';
        var isDarkNav = desktopNav.querySelector('a.text-black');
        if (isDarkNav) {
            toggle.innerHTML =
                '<button class="lang-btn text-sm px-2 py-0.5 rounded transition-all ' + (lang === 'de' ? 'bg-black/10 text-black font-bold' : 'text-black/40 hover:text-black/60') + '" data-lang="de">DE</button>' +
                '<span class="text-black/20 text-xs">|</span>' +
                '<button class="lang-btn text-sm px-2 py-0.5 rounded transition-all ' + (lang === 'en' ? 'bg-black/10 text-black font-bold' : 'text-black/40 hover:text-black/60') + '" data-lang="en">EN</button>';
        } else {
            toggle.innerHTML =
                '<button class="lang-btn text-sm px-2 py-0.5 rounded transition-all ' + (lang === 'de' ? 'bg-white/20 text-white font-bold' : 'text-white/60 hover:text-white/80') + '" data-lang="de">DE</button>' +
                '<span class="text-white/30 text-xs">|</span>' +
                '<button class="lang-btn text-sm px-2 py-0.5 rounded transition-all ' + (lang === 'en' ? 'bg-white/20 text-white font-bold' : 'text-white/60 hover:text-white/80') + '" data-lang="en">EN</button>';
        }
        desktopNav.appendChild(toggle);
        toggle.querySelectorAll('.lang-btn').forEach(attachHandler);
    }

    // Mobile toggle (inside the #mobile-menu panel, which is white-on-blur on all pages)
    var mobileMenuInner = document.querySelector('#mobile-menu > div');
    if (mobileMenuInner) {
        var mToggle = document.createElement('div');
        mToggle.className = 'flex items-center gap-1 py-3 mt-1 border-t border-white/15';
        mToggle.innerHTML =
            '<button class="lang-btn text-sm px-2 py-1 rounded transition-all ' + (lang === 'de' ? 'bg-white/20 text-white font-bold' : 'text-white/60 hover:text-white') + '" data-lang="de">DE</button>' +
            '<span class="text-white/30 text-xs">|</span>' +
            '<button class="lang-btn text-sm px-2 py-1 rounded transition-all ' + (lang === 'en' ? 'bg-white/20 text-white font-bold' : 'text-white/60 hover:text-white') + '" data-lang="en">EN</button>';
        mobileMenuInner.appendChild(mToggle);
        mToggle.querySelectorAll('.lang-btn').forEach(attachHandler);
    }
});
