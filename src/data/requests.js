// Hardcoded mock data for the CRM Requests list view and record pages.
//
// Enum fields:
//   callChannel    : 'Call' | 'Email'
//   skill          : 'Card Information' | 'Direct Debit' | 'Transfer'
//   contactDriver  : 'New' | 'Existing'
//   closingReason  : 'Solved' | 'On Hold' | 'On Pause' | 'Transferred'
//
// Edit this file to change what shows up; the list is sorted newest-first
// by `timestamp` (rendered relatively for items under a week old, and as
// an absolute date for older items).
module.exports = [
  {
    externalId: 'REQ-1042',
    description:
      'New hire equipment request: laptop and dual monitor setup for incoming marketing analyst starting Monday',
    timestamp: '2026-05-27T16:25:00Z',
    callChannel: 'Email',
    skill: 'Transfer',
    contactDriver: 'New',
    closingReason: 'On Hold'
  },
  {
    externalId: 'REQ-1041',
    description:
      'Customer requested refund for duplicate subscription charge on invoice INV-88421',
    timestamp: '2026-05-27T16:09:00Z',
    callChannel: 'Email',
    skill: 'Direct Debit',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1040',
    description:
      'Account access escalation: locked out of admin portal after password rotation',
    timestamp: '2026-05-27T15:40:00Z',
    callChannel: 'Call',
    skill: 'Card Information',
    contactDriver: 'Existing',
    closingReason: 'On Pause'
  },
  {
    externalId: 'REQ-1039',
    description:
      'Procurement quote needed for 50 standing desks for the Austin office expansion',
    timestamp: '2026-05-27T14:30:00Z',
    callChannel: 'Email',
    skill: 'Transfer',
    contactDriver: 'New',
    closingReason: 'On Hold'
  },
  {
    externalId: 'REQ-1038',
    description:
      'VPN connectivity dropping intermittently for remote sales team in EMEA region',
    timestamp: '2026-05-27T11:15:00Z',
    callChannel: 'Call',
    skill: 'Transfer',
    contactDriver: 'Existing',
    closingReason: 'On Pause'
  },
  {
    externalId: 'REQ-1037',
    description:
      'Reseller onboarding paperwork submission for new Latin America distribution partner',
    timestamp: '2026-05-27T07:42:00Z',
    callChannel: 'Email',
    skill: 'Transfer',
    contactDriver: 'New',
    closingReason: 'Transferred'
  },
  {
    externalId: 'REQ-1036',
    description:
      'Add new billing contact to renewal contract; update purchase order before EOQ',
    timestamp: '2026-05-26T13:18:00Z',
    callChannel: 'Email',
    skill: 'Direct Debit',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1035',
    description:
      'Software license renewal: 25 additional seats requested for design team',
    timestamp: '2026-05-25T20:05:00Z',
    callChannel: 'Email',
    skill: 'Direct Debit',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1034',
    description:
      'Customer training session requested for new compliance dashboard release',
    timestamp: '2026-05-24T18:32:00Z',
    callChannel: 'Call',
    skill: 'Transfer',
    contactDriver: 'Existing',
    closingReason: 'On Pause'
  },
  {
    externalId: 'REQ-1033',
    description:
      'Returns processing: damaged shipment received at Phoenix warehouse, request RMA',
    timestamp: '2026-05-23T11:08:00Z',
    callChannel: 'Call',
    skill: 'Card Information',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1032',
    description:
      'Update tax exemption certificate on file; new W-9 attached',
    timestamp: '2026-05-22T15:55:00Z',
    callChannel: 'Email',
    skill: 'Direct Debit',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1031',
    description:
      'Conference room scheduling integration not syncing with Outlook calendars',
    timestamp: '2026-05-21T09:24:00Z',
    callChannel: 'Email',
    skill: 'Transfer',
    contactDriver: 'Existing',
    closingReason: 'Transferred'
  },
  {
    externalId: 'REQ-1030',
    description:
      'Quarterly business review: pull custom usage report for healthcare vertical accounts',
    timestamp: '2026-05-19T17:12:00Z',
    callChannel: 'Email',
    skill: 'Transfer',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1029',
    description:
      'Address change on account record after Singapore office relocation',
    timestamp: '2026-05-17T14:48:00Z',
    callChannel: 'Email',
    skill: 'Card Information',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1028',
    description:
      'Discount approval requested for 3-year prepay deal with Northwind Pharma',
    timestamp: '2026-05-15T10:33:00Z',
    callChannel: 'Call',
    skill: 'Direct Debit',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1027',
    description:
      'Single sign-on configuration question: Okta vs Azure AD for new tenant',
    timestamp: '2026-05-13T22:01:00Z',
    callChannel: 'Call',
    skill: 'Transfer',
    contactDriver: 'New',
    closingReason: 'Solved'
  },
  {
    externalId: 'REQ-1026',
    description:
      'Data migration support request: legacy CRM export from Pipedrive to new platform',
    timestamp: '2026-05-10T16:44:00Z',
    callChannel: 'Email',
    skill: 'Transfer',
    contactDriver: 'New',
    closingReason: 'Transferred'
  },
  {
    externalId: 'REQ-1025',
    description:
      'Subscription downgrade processed; confirm proration credit on next invoice',
    timestamp: '2026-05-06T08:19:00Z',
    callChannel: 'Email',
    skill: 'Direct Debit',
    contactDriver: 'Existing',
    closingReason: 'Solved'
  }
];
