"use client";

import { useState } from "react";
import { LinkIcon, CheckIcon } from "@heroicons/react/24/outline";

interface DocumentCopyButtonProps {
  url: string;
}

export default function DocumentCopyButton({ url }: DocumentCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white rounded-full shadow-lg hover:bg-blue-50 border border-blue-200 z-10"
      title="Copiază link"
    >
      {copied ? (
        <CheckIcon className="w-4 h-4 text-green-600" />
      ) : (
        <LinkIcon className="w-4 h-4 text-blue-700" />
      )}
    </button>
  );
}
