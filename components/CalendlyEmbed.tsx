"use client";

import { useEffect } from "react";
import { CALENDLY_URL } from "@/lib/config";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-2xl overflow-hidden"
      data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=fdfbf8&text_color=3a2f25&primary_color=8b6f47`}
      style={{ minWidth: "320px", height: "700px", width: "100%" }}
    />
  );
}
