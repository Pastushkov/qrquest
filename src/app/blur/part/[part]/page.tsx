"use client";

import { useBlurVarian } from "@/hooks/useBlurVariant";
import { useRouteParams } from "@/hooks/useRouteParams";

export default function BlurPart() {
  const { part } = useRouteParams();

  const message = useBlurVarian({
    part,
  });

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl">{message}</h1>
    </main>
  );
}
