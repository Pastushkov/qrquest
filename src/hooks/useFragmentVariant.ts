import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  part: string;
}

export const useFragmentVarian = ({ part }: Props) => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unlockedLayers = JSON.parse(
      localStorage.getItem("unlockedLayers") || "[]"
    );

    if (unlockedLayers.includes(`layer${part}`)) {
      setMessage("Ви вже відкрили цей фрагмент!");
    } else {
      unlockedLayers.push(`layer${part}`);
      localStorage.setItem("unlockedLayers", JSON.stringify(unlockedLayers));
      setMessage(`Фрагмент ${part} відкрито! Повернення на головну...`);
    }
    setTimeout(() => router.push("/fragment"), 2000);
  }, [router, part]);

  return message;
};
