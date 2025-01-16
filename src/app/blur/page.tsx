"use client";

import Button from "@/components/Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Blur() {
  const router = useRouter();
  const [blurLevel, setBlurLevel] = useState(20);

  useEffect(() => {
    const unlockedRoutes = JSON.parse(
      localStorage.getItem("unlockedRoutes") || "[]"
    );
    setBlurLevel(Math.max(20 - unlockedRoutes.length * 8, 0));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Button onClick={() => router.replace("/")}>Go to main page</Button>
      <h1 className="text-2xl mb-6">Unlock the Image!</h1>
      <div className="text-center border-4 border-red-500">
        FOR TESTING
        <div className="flex gap-2 m-4">
          <Button onClick={() => router.push("/blur/part/1")}>
            Unlock first part
          </Button>
          <Button onClick={() => router.push("/blur/part/2")}>
            Unlock second part
          </Button>
          <Button onClick={() => router.push("/blur/part/3")}>
            Unlock third part
          </Button>
        </div>
      </div>
      <div className="relative mt-4">
        <Image
          src="/image.jpg"
          alt="Blurred"
          className="rounded-lg shadow-lg"
          style={{
            filter: `blur(${blurLevel}px)`,
            transition: "filter 0.5s ease-in-out",
          }}
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
