"use client";

import { useRouteParams } from "@/hooks/useRouteParams";
import { useFragmentVarian } from "@/hooks/useFragmentVariant";

export default function FragmentPart() {
  const { part } = useRouteParams();

  const message = useFragmentVarian({ part });

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl">{message}</h1>
    </main>
  );
}
