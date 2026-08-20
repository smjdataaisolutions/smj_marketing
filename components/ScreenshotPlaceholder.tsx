"use client";

import { useState } from "react";

export function ScreenshotPlaceholder({ src, label, priority = false }: { src: string; label: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="screenshot-frame">
      {/* A native img is intentional: onError provides the fallback for optional user-supplied files. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {!failed && <img src={src} alt={`${label} product screenshot`} onError={() => setFailed(true)} loading={priority ? "eager" : "lazy"} />}
      {failed && (
        <div className="screenshot-placeholder" role="img" aria-label={`${label} screenshot placeholder`}>
          <div className="placeholder-top"><i/><i/><i/><span>One Stop Analytics</span></div>
          <div className="placeholder-layout">
            <div className="placeholder-sidebar"><b/><b/><b/><b/></div>
            <div className="placeholder-content">
              <span className="placeholder-label">Screenshot placeholder</span>
              <strong>{label}</strong>
              <small>Add image at {src.replace(/^\//, "public/")}</small>
              <div className="placeholder-blocks"><i/><i/><i/></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
