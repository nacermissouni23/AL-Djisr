import { appendFile, mkdir } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

export type LeadType = "inquiry" | "registration-request";

export type LeadRecord = {
  type: LeadType;
  submittedAt: string;
  ip: string;
  sourcePage: string;
  data: Record<string, unknown>;
};

type DeliveryChannel = "webhook" | "resend-email" | "local-storage";

const LOCAL_DATA_DIR = path.join(os.tmpdir(), "al-djisr-site");
const LOCAL_LEADS_FILE = path.join(LOCAL_DATA_DIR, "leads.ndjson");

function formatLeadData(data: Record<string, unknown>): string {
  return Object.entries(data)
    .map(([key, value]) => `${key}: ${String(value ?? "")}`)
    .join("\n");
}

async function sendToWebhook(record: LeadRecord): Promise<boolean> {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    return false;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    throw new Error(`Webhook lead delivery failed with status ${response.status}`);
  }

  return true;
}

async function sendToResend(record: LeadRecord): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.LEADS_TO_EMAIL;

  if (!resendApiKey || !recipient) {
    return false;
  }

  const from = process.env.MAIL_FROM ?? "AL Djisr Formation <no-reply@aldjisr-formation.dz>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      subject: `Nouveau lead (${record.type}) - ${record.sourcePage}`,
      text: [
        `Type: ${record.type}`,
        `Date: ${record.submittedAt}`,
        `IP: ${record.ip}`,
        `Source: ${record.sourcePage}`,
        "",
        formatLeadData(record.data),
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend lead delivery failed with status ${response.status}`);
  }

  return true;
}

async function persistLocally(record: LeadRecord): Promise<boolean> {
  await mkdir(LOCAL_DATA_DIR, { recursive: true });
  await appendFile(LOCAL_LEADS_FILE, `${JSON.stringify(record)}\n`, "utf8");
  return true;
}

export async function storeLead(record: LeadRecord): Promise<DeliveryChannel[]> {
  const channels: DeliveryChannel[] = [];

  try {
    if (await sendToWebhook(record)) {
      channels.push("webhook");
    }
  } catch (error) {
    console.error("Lead webhook error", error);
  }

  try {
    if (await sendToResend(record)) {
      channels.push("resend-email");
    }
  } catch (error) {
    console.error("Lead email error", error);
  }

  try {
    if (await persistLocally(record)) {
      channels.push("local-storage");
    }
  } catch (error) {
    console.error("Lead local storage error", error);
  }

  if (channels.length === 0) {
    throw new Error("Lead could not be persisted or delivered");
  }

  return channels;
}
