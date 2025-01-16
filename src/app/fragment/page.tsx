/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Button from "@/components/Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const layers = ["/layer1.jpg", "/layer2.jpg", "/layer3.jpg"];

export default function Fragment() {
  const router = useRouter();
  const [unlockedLayers, setUnlockedLayers] = useState<string[]>([]);
  const [widths, setWidths] = useState<number[]>([]);

  useEffect(() => {
    const savedLayers = JSON.parse(
      localStorage.getItem("unlockedLayers") || "[]"
    );
    setUnlockedLayers(savedLayers);

    const layerElements = document.querySelectorAll(".layer");
    const newWidths = Array.from(layerElements).map(
      (el: any) => el.offsetWidth
    );
    setWidths(newWidths);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Button onClick={() => router.replace("/")}>Go to main page</Button>
      <h1 className="text-2xl mb-6">Unlock the Image Layers!</h1>
      <div className="text-center border-4 border-red-500">
        FOR TESTING
        <div className="flex gap-2 m-4">
          <Button onClick={() => router.push("/fragment/part/1")}>
            Unlock first part
          </Button>
          <Button onClick={() => router.push("/fragment/part/2")}>
            Unlock second part
          </Button>
          <Button onClick={() => router.push("/fragment/part/3")}>
            Unlock third part
          </Button>
        </div>
      </div>
      <div className="relative w-[90%] max-w-[600px] aspect-[4/3] flex items-start mt-4">
        {layers.map((layer, index) => (
          <Image
            key={index}
            src={layer}
            alt={`Layer ${index + 1}`}
            className={`layer absolute top-0 rounded-lg shadow-lg transition-opacity duration-500`}
            style={{
              opacity: unlockedLayers.includes(`layer${index + 1}`) ? 1 : 0,
              left: `${widths
                .slice(0, index)
                .reduce((acc, width) => acc + width, 0)}px`,
            }}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
}
