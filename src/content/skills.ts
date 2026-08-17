export const PLANS = ["Free", "Business", "Enterprise"] as const;
export type Plan = (typeof PLANS)[number];

export const TEAMS = [
  "Sales",
  "Legal",
  "HR",
  "Operations",
  "Finance",
  "RevOps",
  "Compliance",
  "Customer success",
  "All teams",
] as const;
export type Team = (typeof TEAMS)[number];

export type SkillDetail = {
  subtitle: string;
  theJob: string;
  steps: readonly string[];
  needs: readonly string[];
  note: string;
};

export type Skill = {
  id: string;
  title: string;
  team: Team;
  plan: Plan;
  whoRunsIt: string;
  detail?: SkillDetail;
};

export function getSkill(id: string): Skill | undefined {
  return SKILLS.find((skill) => skill.id === id);
}

/** Document workflows this product is built around. */
export const SKILLS: Skill[] = [
  {
    id: "send-an-nda-in-one-motion",
    title: "Send an NDA in one motion",
    team: "Sales",
    plan: "Free",
    whoRunsIt: "Sales rep",
    detail: {
      subtitle: "Get an NDA signed before the call ends.",
      theJob:
        "When I need to protect a deal, I want to send an NDA and have it signed as fast as possible.",
      steps: [
        "Pick the NDA template, or let a CRM stage trigger it",
        "Fill company name, entity, date",
        "Send the signature request to the counterparty",
        "Get notified the moment it is signed",
        "Signed copy filed automatically",
      ],
      needs: ["Templates", "eSign", "audit trail"],
      note: "The highest-volume workflow on the list.",
    },
  },
  {
    id: "build-and-send-a-quote-or-proposal",
    title: "Build and send a quote or proposal",
    team: "Sales",
    plan: "Business",
    whoRunsIt: "Sales rep",
    detail: {
      subtitle:
        "Turn agreed pricing into something the customer can sign and pay, without a second tool.",
      theJob:
        "When pricing is ready, I want to assemble a quote with a pricing table and send it in one motion.",
      steps: [
        "Pick the quote template",
        "Configure line items, discounts, payment schedule",
        "Send to the client for review and signature",
        "Client signs, payment link fires",
      ],
      needs: ["Templates", "quote builder", "eSign", "payments"],
      note: "Two jobs in one: build the numbers, then collect.",
    },
  },
  {
    id: "review-and-respond-to-counterparty-redlines",
    title: "Review and respond to counterparty redlines",
    team: "Legal",
    plan: "Enterprise",
    whoRunsIt: "Legal counsel",
    detail: {
      subtitle:
        "Handle the other side’s edits in one place instead of a chain of Word attachments.",
      theJob:
        "When a client’s legal team sends back changes, I want to review and incorporate them inside one controlled environment.",
      steps: [
        "Send the contract to the client",
        "Client legal sends back redlines",
        "Review each change: accept, reject or escalate",
        "Update the document and re-send",
        "Repeat until agreed, then both parties countersign",
      ],
      needs: [
        "Suggest edits",
        "doc editor",
        "approvals",
        "eSign",
        "audit trail",
      ],
      note: "The redline round trip is where it gets messy. That is the interesting part.",
    },
  },
  {
    id: "stay-ahead-of-upcoming-contract-renewals",
    title: "Stay ahead of upcoming contract renewals",
    team: "Legal",
    plan: "Enterprise",
    whoRunsIt: "RevOps or Legal",
    detail: {
      subtitle: "Get told before the renewal date passes, not after.",
      theJob:
        "When contracts have renewal windows, I want to be notified in time to renegotiate or opt out, not after the window closes.",
      steps: [
        "Renewal date extracted from the signed contract",
        "Stakeholders notified at 90, 60 and 30 days out",
        "Decide: renew, renegotiate, or opt out",
        "If renewing, trigger a new contract or auto-renew",
      ],
      needs: ["Contract repository", "auto-expiration", "workflow builder"],
      note: "Nothing to click until the deadline exists. A skill that watches.",
    },
  },
  {
    id: "track-who-has-viewed-and-signed-your-documents",
    title: "Track who has viewed and signed your documents",
    team: "Sales",
    plan: "Business",
    whoRunsIt: "Sales rep",
    detail: {
      subtitle:
        "Know who read the proposal, which page they lingered on, and when to follow up.",
      theJob:
        "When I have sent a proposal and am waiting, I want to know whether and when the recipient opened it and what they looked at.",
      steps: [
        "Send the proposal to the prospect",
        "Real-time open and view notification",
        "Review time spent per section",
        "Identify who viewed it across multiple stakeholders",
        "Use the engagement signal to time the follow-up",
      ],
      needs: ["eSign", "document analytics"],
      note: "Waiting is the actual experience here. Design for the wait.",
    },
  },
  {
    id: "send-a-policy-for-company-wide-acknowledgment",
    title: "Send a policy for company-wide acknowledgment",
    team: "HR",
    plan: "Business",
    whoRunsIt: "HR, Legal or Compliance",
    detail: {
      subtitle:
        "Publish a policy to everyone and see who has not acknowledged it yet.",
      theJob:
        "When publishing a new company policy, I want to send it to all employees for acknowledgment in one send, and know who has not signed.",
      steps: [
        "Upload or create the policy document",
        "Bulk send to the employee list",
        "Track completion status per employee",
        "Auto-remind whoever has not signed",
      ],
      needs: ["Templates", "bulk send", "auto-reminders", "document analytics"],
      note: "One send, many recipients. The status view is the product.",
    },
  },
  {
    id: "follow-up-on-documents-stuck-waiting-for-signature",
    title: "Follow up on documents stuck waiting for signature",
    team: "Operations",
    plan: "Business",
    whoRunsIt: "Operations",
  },
  {
    id: "collect-signatures-in-a-set-order",
    title: "Collect signatures in a set order",
    team: "Operations",
    plan: "Free",
    whoRunsIt: "Operations",
  },
  {
    id: "route-a-contract-for-approval-before-sending",
    title: "Route a contract for approval before sending",
    team: "Operations",
    plan: "Business",
    whoRunsIt: "Operations",
  },
  {
    id: "countersign-and-return-a-signed-document",
    title: "Countersign and return a signed document",
    team: "Operations",
    plan: "Free",
    whoRunsIt: "Operations",
  },
  {
    id: "pull-key-terms-from-your-signed-contracts",
    title: "Pull key terms from your signed contracts",
    team: "Legal",
    plan: "Enterprise",
    whoRunsIt: "Legal",
  },
  {
    id: "flag-non-standard-terms-before-a-contract-goes-out",
    title: "Flag non-standard terms before a contract goes out",
    team: "Legal",
    plan: "Enterprise",
    whoRunsIt: "Legal",
  },
  {
    id: "archive-and-file-every-signed-contract",
    title: "Archive and file every signed contract",
    team: "Legal",
    plan: "Enterprise",
    whoRunsIt: "Legal",
  },
  {
    id: "turn-a-signed-quote-into-an-invoice",
    title: "Turn a signed quote into an invoice",
    team: "Finance",
    plan: "Enterprise",
    whoRunsIt: "Finance",
  },
  {
    id: "send-an-invoice-and-collect-payment",
    title: "Send an invoice and collect payment",
    team: "Finance",
    plan: "Business",
    whoRunsIt: "Finance",
  },
  {
    id: "create-and-send-an-onboarding-agreement",
    title: "Create and send an onboarding agreement",
    team: "HR",
    plan: "Business",
    whoRunsIt: "HR",
  },
  {
    id: "get-an-offer-letter-approved-before-it-goes-out",
    title: "Get an offer letter approved before it goes out",
    team: "HR",
    plan: "Business",
    whoRunsIt: "HR",
  },
  {
    id: "send-a-contractor-agreement-with-the-right-signing-order",
    title: "Send a contractor agreement with the right signing order",
    team: "HR",
    plan: "Free",
    whoRunsIt: "HR",
  },
  {
    id: "chase-an-unsigned-document-on-a-schedule",
    title: "Chase an unsigned document on a schedule",
    team: "Sales",
    plan: "Business",
    whoRunsIt: "Sales",
  },
  {
    id: "create-a-quote-from-a-crm-deal",
    title: "Create a quote from a CRM deal",
    team: "Sales",
    plan: "Enterprise",
    whoRunsIt: "Sales",
  },
  {
    id: "send-a-document-pack-to-a-new-client",
    title: "Send a document pack to a new client",
    team: "Customer success",
    plan: "Business",
    whoRunsIt: "Customer success",
  },
  {
    id: "bulk-send-a-document-to-a-list",
    title: "Bulk send a document to a list",
    team: "All teams",
    plan: "Business",
    whoRunsIt: "All teams",
  },
];
