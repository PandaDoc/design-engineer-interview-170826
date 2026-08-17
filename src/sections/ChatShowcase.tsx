"use client";

import styled from "styled-components";
import {
  ArrowRightIcon,
  PersonIcon,
  ProductMark,
  SendIcon,
  SparkMark,
} from "@/components/icons";
import { PRODUCT_NAME } from "@/theme";

const AGENT = PRODUCT_NAME.toLowerCase();

/** One frozen exchange — the window is a still, not a demo. */
const EXCHANGE = {
  email: "maria@acme.com",
  user: "Send an NDA for signature to jane@acme.com",
  tool: `${AGENT} · send_document · NDA Template`,
  reply:
    "Done — the NDA went out to jane@acme.com from your standard template. I’ll let you know the moment it’s signed.",
};

/** Token color at reduced alpha — the dark band reuses brand colors this way. */
const tint = (color: string, pct: number) =>
  `color-mix(in srgb, ${color} ${pct}%, transparent)`;

const Band = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 520px;
  padding: 48px 24px;
  overflow: hidden;
  background: ${({ theme }) => theme.color.dark};

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    padding-inline: 16px;
  }
`;

const Glow = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
`;

const GlowGreen = styled(Glow)`
  top: 10%;
  left: -20%;
  width: 70%;
  height: 160%;
  background: radial-gradient(
    closest-side,
    ${({ theme }) => tint(theme.color.brandBright, 55)},
    ${({ theme }) => tint(theme.color.brandBright, 25)} 55%,
    transparent
  );
  filter: blur(90px);
`;

const GlowPurple = styled(Glow)`
  top: -70%;
  right: -15%;
  width: 75%;
  height: 180%;
  background: radial-gradient(
    closest-side,
    ${({ theme }) => tint(theme.color.purple, 60)},
    ${({ theme }) => tint(theme.color.purple, 28)} 55%,
    transparent
  );
  filter: blur(100px);
`;

const Window = styled.div`
  position: relative; /* paints above the absolutely-positioned glows */
  width: 100%;
  max-width: 720px;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.color.darkPanel};
  box-shadow:
    0 32px 64px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.08);
  overflow: hidden;
`;

const ChromeBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.03);
`;

const Dot = styled.span<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ $color }) => $color};
`;

const TitleSlot = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const TitlePill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: rgba(255, 255, 255, 0.06);
  font-size: 12px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);
`;

const McpBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px;
  border: 1px solid ${({ theme }) => tint(theme.color.brandBright, 35)};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => tint(theme.color.brandBright, 18)};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.brandFoam};
  white-space: nowrap;
`;

const Thread = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 20px;
`;

const UserTurn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

const EmailChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(255, 255, 255, 0.06);
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.45);
`;

const Bubble = styled.p`
  max-width: 80%;
  padding: 11px 16px;
  /* the tight corner points at the sender */
  border-radius: ${({ theme }) =>
    `${theme.radius.xl} ${theme.radius.xl} 4px ${theme.radius.xl}`};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.color.bubbleFrom},
    ${({ theme }) => theme.color.bubbleTo}
  );
  box-shadow: 0 2px 8px ${({ theme }) => tint(theme.color.bubbleFrom, 30)};
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;

const ToolCall = styled.div`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  border: 1px solid ${({ theme }) => tint(theme.color.brandBright, 25)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => tint(theme.color.brandBright, 12)};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.brandFoam};
`;

const AssistantTurn = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  margin-top: 2px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.85);
`;

const Reply = styled.p`
  flex: 1;
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.85);
`;

const InputBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.02);
`;

const InputField = styled.div`
  flex: 1;
  padding: 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.radius.lg};
  background: rgba(255, 255, 255, 0.06);
  font-size: 13px;
  color: rgba(255, 255, 255, 0.25);
`;

const SendButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.brandBright};
  color: #ffffff;
`;

/** Dark banner: the assistant window showing one frozen MCP exchange. */
export function ChatShowcase() {
  return (
    <Band>
      <GlowGreen />
      <GlowPurple />
      <Window>
        <ChromeBar>
          {/* macOS traffic lights — OS colors, not theme tokens */}
          <Dot $color="#ff5f57" />
          <Dot $color="#febc2e" />
          <Dot $color="#28c840" />
          <TitleSlot>
            <TitlePill>
              <SparkMark size={14} />
              Assistant
            </TitlePill>
          </TitleSlot>
          <McpBadge>
            <ProductMark size={12} />
            {AGENT} MCP
          </McpBadge>
        </ChromeBar>
        <Thread>
          <UserTurn>
            <EmailChip>
              <PersonIcon size={12} />
              {EXCHANGE.email}
            </EmailChip>
            <Bubble>{EXCHANGE.user}</Bubble>
          </UserTurn>
          <ToolCall>
            <ArrowRightIcon size={13} />
            {EXCHANGE.tool}
          </ToolCall>
          <AssistantTurn>
            <Avatar>
              <SparkMark size={14} />
            </Avatar>
            <Reply>{EXCHANGE.reply}</Reply>
          </AssistantTurn>
        </Thread>
        <InputBar>
          <InputField>Ask anything about your documents…</InputField>
          <SendButton>
            <SendIcon size={16} />
          </SendButton>
        </InputBar>
      </Window>
    </Band>
  );
}
