import { notFound } from "next/navigation";
import { getSkill, SKILLS } from "@/content/skills";
import { SkillArticle } from "@/sections/SkillArticle";
import { PRODUCT_NAME } from "@/theme";

export function generateStaticParams() {
  return SKILLS.map((skill) => ({ id: skill.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const skill = getSkill(id);
  return {
    title: skill
      ? `${skill.title} — ${PRODUCT_NAME}`
      : `Skill — ${PRODUCT_NAME}`,
  };
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const skill = getSkill(id);
  if (!skill) notFound();

  return <SkillArticle skill={skill} />;
}
