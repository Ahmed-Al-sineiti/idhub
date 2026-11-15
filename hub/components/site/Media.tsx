"use client";

import { useEffect, useRef } from "react";
import styles from "./Media.module.css";

function isVideo(src: string) {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(src);
}

// صورة أو فيديو لو المسار موجود، ولو null بيظهر مكان مؤقت مبني بالكود بنفس المقاس.
export default function Media({
  src,
  alt,
  className,
  label,
}: {
  src: string | null;
  alt: string;
  className?: string;
  label?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!src || !isVideo(src) || !video) return;

    const play = () => video.play().catch(() => {});

    // نشغّل الفيديو لما يظهر في الشاشة ونوقفه لما يختفي، علشان ما نستهلكش موارد على الفاضي.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
        else video.pause();
      },
      { threshold: 0.05 },
    );
    io.observe(video);
    play();

    return () => {
      io.disconnect();
      video.pause();
    };
  }, [src]);

  if (src) {
    if (isVideo(src)) {
      return (
        <video
          ref={videoRef}
          src={src}
          className={`${styles.img} ${className ?? ""}`}
          autoPlay
          muted
          loop
          playsInline
          aria-label={alt}
        />
      );
    }
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`${styles.img} ${className ?? ""}`} loading="lazy" />;
  }
  return (
    <div className={`${styles.placeholder} ${className ?? ""}`} role="img" aria-label={alt}>
      {label ? <span className={styles.label}>{label}</span> : null}
    </div>
  );
}
