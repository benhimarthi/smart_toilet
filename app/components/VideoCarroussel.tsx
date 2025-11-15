import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { Play, X, ChevronLeft, ChevronRight, Maximize, Minimize, Info, Pause } from 'lucide-react';

// Define types
interface Video {
  caption: string;
  poster: string;
  videoSrc: string;
  description?: string;
}

interface VideoCarouselProps {
  videos: Video[];
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 120
    }
  }
};

const PremiumFilmProduction: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  // Screen size tracking
  const [screenSize, setScreenSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  const isMobile = screenSize === 'xs' || screenSize === 'sm';

  // Method to toggle play/pause
  const togglePlay = (): void => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Method to toggle fullscreen
  const toggleFullscreen = (): void => {
    if (!videoRef.current) return;
    
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error('Failed to enter fullscreen mode:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => {
        console.error('Failed to exit fullscreen mode:', err);
      });
    }
  };

  // Method to handle video selection
  const handleVideoSelect = (index: number): void => {
    if (index === activeVideo && videoRef.current) {
      togglePlay();
      return;
    }
    
    setActiveVideo(index);
    setIsPlaying(false);
    scrollToVideoIndex(index);
    
    // Reset video if it's already loaded
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // Method to scroll through videos
  const scrollVideos = (direction: 'left' | 'right'): void => {
    if (!videoContainerRef.current) return;
    
    const container = videoContainerRef.current;
    const thumbnails = container.querySelectorAll('[data-thumbnail="true"]');
    
    if (thumbnails.length === 0) return;

    // Determine new index based on direction
    let newIndex = activeVideo;
    if (direction === 'left') {
      newIndex = Math.max(0, activeVideo - 1);
    } else {
      newIndex = Math.min(videos.length - 1, activeVideo + 1);
    }

    // Only update if index changed
    if (newIndex !== activeVideo) {
      setActiveVideo(newIndex);
      setIsPlaying(false);
      
      // Scroll to the specific thumbnail
      const targetThumbnail = thumbnails[newIndex] as HTMLElement;
      if (targetThumbnail) {
        container.scrollTo({
          left: targetThumbnail.offsetLeft - container.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  // Method to scroll to a specific video index
  const scrollToVideoIndex = (index: number): void => {
    if (!videoContainerRef.current) return;
    
    const container = videoContainerRef.current;
    const thumbnails = container.querySelectorAll('[data-thumbnail="true"]');
    
    if (thumbnails && thumbnails.length > index) {
      const targetThumbnail = thumbnails[index] as HTMLElement;
      container.scrollTo({
        left: targetThumbnail.offsetLeft - container.offsetLeft,
        behavior: 'smooth'
      });
    }
  };

  // Effect for detecting screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('xs');
      else if (width < 768) setScreenSize('sm');
      else if (width < 1024) setScreenSize('md');
      else if (width < 1280) setScreenSize('lg');
      else setScreenSize('xl');
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Effect for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'ArrowLeft') {
        scrollVideos('left');
      } else if (e.key === 'ArrowRight') {
        scrollVideos('right');
      } else if (e.key === ' ' || e.key === 'k') {
        // Space or K key for play/pause (YouTube style)
        togglePlay();
        e.preventDefault();
      } else if (e.key === 'f') {
        // F key for fullscreen
        toggleFullscreen();
      } else if (e.key === 'i') {
        // I key for info toggle
        setShowInfo(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideo]);

  // Effect for updating fullscreen state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Effect for handling video end
  useEffect(() => {
    const handleVideoEnd = () => {
      setIsPlaying(false);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnd);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('ended', handleVideoEnd);
        }
      };
    }
  }, [activeVideo]);

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 
                 w-full min-h-screen flex flex-col items-center justify-center
                 py-10 px-4 overflow-hidden"
    >
      {/* Ambient background effects */}
      <div className="absolute -top-1/4 -right-1/4 w-[150%] h-[150%] 
                      bg-gradient-to-tr from-purple-900/10 via-indigo-900/5 to-blue-900/10 
                      rounded-full opacity-40 blur-3xl -z-10" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[120%] h-[120%] 
                      bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-pink-900/10 
                      rounded-full opacity-20 blur-3xl -z-10" />

      {/* Header Section */}
      <motion.div 
        variants={containerVariants}
        className="text-center mb-8 w-full max-w-5xl mx-auto px-4"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                     mb-4 tracking-tight"
        >
          Our Cinematic Journey
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto 
                     leading-relaxed opacity-80"
        >
          Immerse yourself in our visual narrative – a collection of moments that define our passion, creativity, and vision.
        </motion.p>
      </motion.div>

      {/* Main Video Player - Integrated into the main view */}
      <motion.div 
        variants={containerVariants}
        className="w-full max-w-6xl mx-auto px-2 sm:px-4 mb-8"
      >
        <div className="relative">
          {/* Video border glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 
                         rounded-lg opacity-40 blur-sm" />
          
          <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              src={videos[activeVideo].videoSrc}
              poster={videos[activeVideo].poster}
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controlsList="nodownload"
              playsInline
              aria-label={`Video: ${videos[activeVideo].caption}`}
            >
              Your browser does not support video playback.
            </video>
            
            {/* Custom controls overlay - Always visible when not playing */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30
                         transition-opacity duration-300 flex flex-col justify-between
                         ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
              onClick={(e) => {
                // Prevent click on overlay from triggering video toggle
                e.stopPropagation();
              }}
            >
              {/* Top bar with controls */}
              <div className="flex items-center justify-between p-3 sm:p-4">
                <button
                  onClick={() => setShowInfo(prev => !prev)}
                  className="text-white p-1.5 sm:p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                  title="Video information"
                  aria-label="Show video information"
                >
                  <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleFullscreen}
                    className="text-white p-1.5 sm:p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                    title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                    aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                  >
                    {isFullscreen ? (
                      <Minimize className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </button>
                </div>
              </div>
              
              {/* Center play/pause button - Always show an appropriate button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="bg-white/10 backdrop-blur-md
                            p-3 sm:p-4 md:p-5
                            rounded-full border border-white/20
                            transition-all duration-300 hover:scale-110 hover:bg-white/20"
                  title={isPlaying ? "Pause video" : "Play video"}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                  ) : (
                    <Play className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ml-0.5" />
                  )}
                </button>
              </div>
              
              {/* Bottom bar with title */}
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white">
                  {videos[activeVideo].caption}
                </h3>
              </div>
            </div>
            
            {/* Video info panel */}
            <AnimatePresence>
              {showInfo && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm p-4 sm:p-6 md:p-8
                            flex flex-col justify-center items-center"
                >
                  <button
                    onClick={() => setShowInfo(false)}
                    className="absolute top-3 right-3 text-white p-2 rounded-full bg-white/10 hover:bg-white/20"
                    title="Close information panel"
                    aria-label="Close information panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="max-w-2xl text-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                      {videos[activeVideo].caption}
                    </h3>
                    {videos[activeVideo].description && (
                      <p className="text-gray-200 text-base sm:text-lg md:text-xl">
                        {videos[activeVideo].description}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Video Thumbnails Navigation */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Navigation Buttons */}
        <button 
          onClick={() => scrollVideos('left')}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 
                   bg-white/10 hover:bg-white/20 backdrop-blur-md 
                   p-2 sm:p-3
                   rounded-full shadow-lg 
                   border border-white/10 hover:border-white/30
                   transition-all duration-300"
          title="Previous video"
          aria-label="Previous video"
        >
          <ChevronLeft className="text-white w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button 
          onClick={() => scrollVideos('right')}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 
                   bg-white/10 hover:bg-white/20 backdrop-blur-md 
                   p-2 sm:p-3
                   rounded-full shadow-lg
                   border border-white/10 hover:border-white/30
                   transition-all duration-300"
          title="Next video"
          aria-label="Next video"
        >
          <ChevronRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Thumbnails Container */}
        <motion.div 
          ref={videoContainerRef}
          variants={containerVariants}
          className="flex overflow-x-auto gap-2 sm:gap-3 md:gap-4
                     py-4 no-scrollbar snap-x px-8 sm:px-10 md:px-12"
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              data-thumbnail="true"
              className={`relative 
                        w-32 sm:w-40 md:w-48
                        h-20 sm:h-24 md:h-28
                        rounded-lg overflow-hidden 
                        flex-shrink-0 cursor-pointer transition-all duration-300 snap-center
                        ${index === activeVideo 
                          ? 'ring-2 ring-purple-500 scale-105 z-10' 
                          : 'hover:scale-105 opacity-70 hover:opacity-100'}`}
              onClick={() => handleVideoSelect(index)}
              role="button"
              aria-label={`Select video: ${video.caption}`}
              aria-pressed={index === activeVideo}
            >
              <Image
                src={video.poster}
                alt={`Thumbnail for ${video.caption}`}
                layout="fill"
                objectFit="cover"
              />
              
              {/* Play indicator */}
              {index === activeVideo && isPlaying ? (
                <div className="absolute bottom-1 right-1 
                              bg-red-500 
                              w-2 h-2 sm:w-3 sm:h-3
                              rounded-full animate-pulse"></div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/30 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                    <Play className="text-white w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>
              )}
              
              {/* Thumbnail caption */}
              <div className="absolute bottom-0 left-0 right-0 
                            bg-gradient-to-t from-black/80 to-transparent 
                            p-1 sm:p-2">
                <p className="text-white text-xs sm:text-sm truncate">
                  {video.caption.split(' ').slice(0, 3).join(' ')}
                  {video.caption.split(' ').length > 3 ? '...' : ''}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// Usage Example
const VideoGallery: React.FC = () => {
  const videoData: Video[] = [
    {
      caption: "Introduction ",
      poster: "/videos/presi.png",
      videoSrc: "/videos/video (2).mp4",
      description: "Opening remarks by Mr. FOUAD Challa, President of DREAMAKER PRODUCTIONS."
    }, 
    {
      caption: "Meeting with the DIRTY ANGELS Team",
      poster: "/videos/meeting.png",
      videoSrc: "/videos/video (3).mp4",
      description: "An exclusive behind-the-scenes encounter with the cast and crew of DIRTY ANGELS."
    }, 
    {
      caption: "On-Site Installations",
      poster: "/videos/onsite.png",
      videoSrc: "/videos/video (1).mp4",
      description: "A closer look at the equipment setup and field operations in action."
    }
  ];

  return <PremiumFilmProduction videos={videoData} />;
};

export default VideoGallery;