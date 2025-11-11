"use client";

import { useState } from "react";
import { LinkIcon, CheckIcon } from "@heroicons/react/24/outline";

interface CopyLinkButtonProps {
  url: string;
  label?: string;
}

export default function CopyLinkButton({ url, label = "Copiază link" }: CopyLinkButtonProps) {
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
      className="group/btn flex items-center gap-1.5 px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-medium rounded-md transition-all shadow-sm hover:shadow-md"
      title={label}
    >
      {copied ? (
        <>
          <CheckIcon className="w-4 h-4" />
          <span className="max-w-0 overflow-hidden group-hover/btn:max-w-xs transition-all duration-300 whitespace-nowrap">
            Copiat!
          </span>
        </>
      ) : (
        <>
          <LinkIcon className="w-4 h-4" />
          <span className="max-w-0 overflow-hidden group-hover/btn:max-w-xs transition-all duration-300 whitespace-nowrap">
            Copiază link
          </span>
        </>
      )}
    </button>
  );
}
