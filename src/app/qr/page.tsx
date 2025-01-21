"use client";

import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import Button from "@/components/Button/Button";

export default function QRcodePage() {
  const [inputValue, setInputValue] = useState<string>("");
  const [qrValue, setQrValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const generateQRCode = () => {
    setQrValue(inputValue);
  };

  const downloadQRCode = () => {
    const svgElement = document.querySelector("svg");
    if (svgElement) {
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgElement);
      const blob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `qrcode_${Date.now()}.svg`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>QR Code Generator</h1>
      <div className="flex gap-5 justify-center mt-5">
        <input
          type="text"
          placeholder="Enter a URL"
          value={inputValue}
          onChange={handleInputChange}
          className="p-2 w-96 text-black rounded-lg"
        />
        <Button onClick={generateQRCode}>Generate QR Code</Button>
      </div>
      <div className="flex justify-center mt-6">
        {qrValue && (
          <div>
            <QRCodeSVG value={qrValue} size={256} />
            <Button className="mt-10" onClick={downloadQRCode}>
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
