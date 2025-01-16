"use client";

import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ResetButtonStatus = {
  default: "Reset Progress",
  done: "Done",
};

export default function Home() {
  const router = useRouter();
  const [resetButtonText, setResetButtonText] = useState(
    ResetButtonStatus.default
  );

  const handleClearProgress = () => {
    localStorage.clear();
    setResetButtonText(ResetButtonStatus.done);
    setTimeout(() => {
      setResetButtonText(ResetButtonStatus.default);
    }, 2000);
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-5">
      <Button onClick={() => router.push("/blur")}>Blur</Button>
      <Button onClick={() => router.push("/fragment")}>Fragmet</Button>
      <Button
        disabled={resetButtonText === ResetButtonStatus.done}
        onClick={handleClearProgress}
      >
        {resetButtonText}
      </Button>
    </main>
  );
}
