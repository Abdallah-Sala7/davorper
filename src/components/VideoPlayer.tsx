"use client";

import { useEffect, useRef } from "react";

interface Props {
  width?: number;
  height?: number;
  type?: string;
  poster: string;
  src: string;
}

const VideoPlayer: React.FC<Props> = ({
  width = 320,
  height = 240,
  type = "video/mp4",
  poster,
  src,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.25;
    }

    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };

    let handlePlay = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);

  return (
    <video
      width={width}
      height={height}
      controls
      preload="none"
      className="w-full aspect-video"
      ref={videoRef}
      poster={poster}
      loop
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
