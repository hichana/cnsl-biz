"use client";

import { useRef, useState } from "react";

export function YouTubeShort({
  muted = true,
  compact = false,
}: {
  muted?: boolean;
  compact?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(muted !== false);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    if (!next) {
      v.play().catch(() => {});
    }
    setIsMuted(next);
  };

  return (
    <div
      className={`short ${compact ? "short--compact" : ""}`}
      aria-label="Crew video"
    >
      <div className="short-hd">
        <span>{"// FIELD_REPORT"}</span>
        <span className="live">
          <span className="pip"></span> LIVE
        </span>
      </div>
      <button
        type="button"
        className="short-frame short-frame--btn"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        <video
          ref={videoRef}
          src="/assets/vertical1.mp4"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
        />
      </button>
      {!compact && (
        <div className="short-foot">
          <span>9:16 · Autoplay</span>
          <button type="button" className="unmute" onClick={toggleMute}>
            {isMuted ? "MUTED · TAP TO UNMUTE" : "AUDIO ON · TAP TO MUTE"}
          </button>
        </div>
      )}
    </div>
  );
}
