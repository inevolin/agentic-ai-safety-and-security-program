import { AttackRef } from "@/components/AttackRef";

interface DefeatsProps {
  ids: string;
}

export function Defeats({ ids }: DefeatsProps) {
  const items = ids
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <>
      {items.map((item, i) => (
        <span key={item}>
          <AttackRef id={item} />
          {i < items.length - 1 && <span className="mr-1">,</span>}
        </span>
      ))}
    </>
  );
}
