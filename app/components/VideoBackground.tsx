'use client';
import { memo, useState, useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  onLoad?: () => void;
}

const VideoBackground = memo(({ onLoad }: VideoBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  // Intersection Observer pour lazy loading
  useEffect(() => {
    if (!videoRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        });
      },
      { 
        rootMargin: '100px',
        threshold: 0.1 
      }
    );

    observerRef.current.observe(videoRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <>
      {/* Placeholder optimisé */}
      {!isLoaded && (
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, #0f172a 0%, #000000 100%),
              radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.08) 0%, transparent 60%),
              radial-gradient(circle at 70% 80%, rgba(14, 165, 233, 0.04) 0%, transparent 60%)
            `,
            backgroundBlendMode: 'normal, overlay, overlay'
          }}
        />
      )}
      
      {/* Vidéo avec chargement conditionnel */}
      {isInView && (
        <iframe
          ref={videoRef}
          src="https://player.vimeo.com/video/1081126635?background=1&autoplay=1&muted=1&loop=1&autopause=0&controls=0&title=0&byline=0&portrait=0&quality=auto&dnt=1&app_id=122963"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Cinematic Background Video"
          onLoad={handleLoad}
          style={{ 
            pointerEvents: 'none',
            objectFit: 'cover',
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            filter: 'brightness(0.9) contrast(1.1)',
          }}
        />
      )}
    </>
  );
});

VideoBackground.displayName = 'VideoBackground';

export default VideoBackground;