// Hardcoded mock data for the CRM Requests list view and record pages.
//
// Theme: retail/SME banking BPO contact center. Descriptions are written
// to match each record's `skill` (Card Information / Direct Debit /
// Transfer).
//
// Enum fields:
//   callChannel    : 'Call' | 'Email'
//   skill          : 'Card Information' | 'Direct Debit' | 'Transfer'
//   contactDriver  : 'New' | 'Existing'
//   closingReason  : 'Solved' | 'On Hold' | 'On Pause' | 'Transferred'
//
// The list is sorted newest-first by `timestamp` (rendered relatively for
// items under a week old, and as an absolute date for older items).
module.exports = [
  {
    externalId: 'REQ-1042',
    description:
      'New retail customer requesting setup for first international wire transfer to family in Manila; KYC documents pending verification',
    timestamp: '2026-05-27T16:25:00Z',
    callChannel: 'Email',
    skill: 'Transfer',
    contactDriver: 'New',
    closingReason: 'On Hold'
  },
  {
    externalId: 'REQ-1041',
    description:
      'Customer reported duplicate direct debit collection of GBP 89.99 on 26-May for utility provider EnergyOne; refund processed under DD Guarantee',
    timestamp: '2026-05-27T16:09:00Z',
    callChannel: 'Email',
    skill: 'Direct Debit',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1040',
    description:
      'Cardholder reporting lost debit card ending 4421 during recent travel; awaiting confirmation of last authorized transaction before blocking and reissuing',
    timestamp: '2026-05-27T15:40:00Z',
    callChannel: 'Call',
    skill: 'Card Information',
    contactDriver: 'Existing',
    closingReason: 'On Pause'
  },
  {
    externalId: 'REQ-1039',
    description:
      'New corporate client requesting SWIFT transfer limit of USD 250,000 per day for cross-border supplier payments; onboarding compliance review in progress',
    timestamp: '2026-05-27T14:30:00Z',
    callChannel: 'Email',
    skill: 'Transfer',
    contactDriver: 'New',
    closingReason: 'On Hold'
  },
  {
    externalId: 'REQ-1038',
    description:
      'Customer transfer of GBP 12,400 to beneficiary at HSBC UK not received after 3 business days; SWIFT trace MT103 initiated with correspondent bank',
    timestamp: '2026-05-27T11:15:00Z',
    callChannel: 'Call',
    skill: 'Transfer',
    contactDriver: 'Existing',
    closingReason: 'On Pause'
  },
  {
    externalId: 'REQ-1037',
    description:
      'New business banking customer requesting bulk salary payment file (BACS) for first payroll run of 47 employees; escalated to Business Onboarding team',
    timestamp: '2026-05-27T07:42:00Z',
    callChannel: 'Email',
    skill: 'Transfer',
    contactDriver: 'New',
    closingReason: 'Transferred'
  },
  {
    externalId: 'REQ-1036',
    description:
      'Customer requested cancellation of direct debit mandate to GymPlus Memberships effective immediately; mandate revoked and confirmation sent',
    timestamp: '2026-05-26T13:18:00Z',
    callChannel: 'Email',
    skill: 'Direct Debit',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1035',
    description:
      'Customer requested change of direct debit payment date from 1st to 28th of month to align with payday; mandate amended for next collection cycle',
    timestamp: '2026-05-25T20:05:00Z',
    callChannel: 'Email',
    skill: 'Direct Debit',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1034',
    description:
      'Customer disputing GBP 45 incoming wire fee on EUR 8,200 transfer from Spain; awaiting correspondent bank statement for fee breakdown review',
    timestamp: '2026-05-24T18:32:00Z',
    callChannel: 'Call',
    skill: 'Transfer',
    contactDriver: 'Existing',
    closingReason: 'On Pause'
  },
  {
    externalId: 'REQ-1033',
    description:
      'Cardholder requesting activation of replacement chip-and-PIN card delivered 22-May; activation completed and PIN reset link sent to mobile',
    timestamp: '2026-05-23T11:08:00Z',
    callChannel: 'Call',
    skill: 'Card Information',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1032',
    description:
      'Customer reported failed direct debit to council tax (insufficient funds); customer added funds and re-presentment scheduled for next collection cycle',
    timestamp: '2026-05-22T15:55:00Z',
    callChannel: 'Email',
    skill: 'Direct Debit',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1031',
    description:
      'Customer requesting recall of GBP 3,750 Faster Payment sent to incorrect sort code 20-32-19; case escalated to Fraud and Recovery team',
    timestamp: '2026-05-21T09:24:00Z',
    callChannel: 'Email',
    skill: 'Transfer',
    contactDriver: 'Existing',
    closingReason: 'Transferred'
  },
  {
    externalId: 'REQ-1030',
    description:
      'Standing order amendment: customer increased monthly transfer to savings account from GBP 200 to GBP 350 effective 1-June',
    timestamp: '2026-05-19T17:12:00Z',
    callChannel: 'Email',
    skill: 'Transfer',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1029',
    description:
      'Cardholder requested travel notification for upcoming trip to Japan (12-25 June) to prevent transactions being declined; notice added to card profile',
    timestamp: '2026-05-17T14:48:00Z',
    callChannel: 'Email',
    skill: 'Card Information',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1028',
    description:
      'Customer requesting indemnity claim refund of GBP 1,247.30 for direct debit taken in error by insurance provider AllianceInsure; refund credited under DD Guarantee',
    timestamp: '2026-05-15T10:33:00Z',
    callChannel: 'Call',
    skill: 'Direct Debit',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1027',
    description:
      'New customer onboarding query: confirmed IBAN format and SWIFT/BIC code required for incoming international transfer from Australian employer',
    timestamp: '2026-05-13T22:01:00Z',
    callChannel: 'Call',
    skill: 'Transfer',
    contactDriver: 'New',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1026',
    description:
      'New SME customer requesting setup of multi-currency wallet for EUR/USD/GBP transfers; routed to FX & Treasury team for tier-1 pricing review',
    timestamp: '2026-05-10T16:44:00Z',
    callChannel: 'Email',
    skill: 'Transfer',
    contactDriver: 'New',
    closingReason: 'Transferred'
  },
  {
    externalId: 'REQ-1025',
    description:
      'Customer reactivated previously paused direct debit to mortgage provider Halifax effective 1-June; confirmation email sent',
    timestamp: '2026-05-06T08:19:00Z',
    callChannel: 'Email',
    skill: 'Direct Debit',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  }
];
