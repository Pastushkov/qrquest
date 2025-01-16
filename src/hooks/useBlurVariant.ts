import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  part: string;
}

export const useBlurVarian = ({ part }: Props) => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unlockedRoutes = JSON.parse(
      localStorage.getItem("unlockedRoutes") || "[]"
    );

    if (unlockedRoutes.includes(part)) {
      setMessage("Ви вже відкрили цей фрагмент!");
    } else {
      unlockedRoutes.push(part);
      localStorage.setItem("unlockedRoutes", JSON.stringify(unlockedRoutes));
      setMessage(`Фрагмент ${part} відкрито! Повернення на головну...`);
    }
    setTimeout(() => router.push("/blur"), 2000);
  }, [part, router]);

  return message;
};
