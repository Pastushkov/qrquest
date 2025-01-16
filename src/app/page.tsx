"use client";

import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClearProgress = () => {
    localStorage.clear();
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-5">
      <Button onClick={() => router.push("/blur")}>Blur</Button>
      <Button onClick={() => router.push("/fragment")}>Fragmet</Button>
      <Button onClick={handleClearProgress}>Clear progress</Button>
    </main>
  );
}
