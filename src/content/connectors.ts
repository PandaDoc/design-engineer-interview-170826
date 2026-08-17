import type { ComponentType } from "react";
import { PRODUCT_NAME } from "@/theme";
import {
  ToolMarkAsterisk,
  ToolMarkOrbit,
  ToolMarkPrism,
} from "@/components/icons";

export type Connector = {
  id: string;
  name: string;
  category: string;
  desc: string;
  Mark: ComponentType<{ size?: number; color?: string }>;
  /** Evocative of the tool's brand — deliberately not theme tokens. */
  accent: string;
};

/** The AI tools this product ships an MCP connector for. */
export const CONNECTORS: Connector[] = [
  {
    id: "claude",
    name: "Claude",
    category: "AI assistant",
    Mark: ToolMarkAsterisk,
    accent: "#d97757",
    desc: `Give Claude the ability to draft, send, and track ${PRODUCT_NAME} documents directly from your agent.`,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "AI assistant",
    Mark: ToolMarkOrbit,
    accent: "#10a37f",
    desc: `Let ChatGPT trigger document creation and delivery without any manual steps in ${PRODUCT_NAME}.`,
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "AI coding",
    Mark: ToolMarkPrism,
    accent: "#7c9cf5",
    desc: `Let Cursor generate and send real ${PRODUCT_NAME} documents as part of your coding workflow.`,
  },
];
