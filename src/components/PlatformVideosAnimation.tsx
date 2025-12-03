import { motion } from "framer-motion";
import { Video } from "lucide-react";
import TikTokLogo from "./platform-logos/TikTokLogo";
import YouTubeLogo from "./platform-logos/YouTubeLogo";
import InstagramLogo from "./platform-logos/InstagramLogo";
import XLogo from "./platform-logos/XLogo";

const PlatformVideosAnimation = () => {
  const platforms = [
    { name: "TikTok", Logo: TikTokLogo, color: "text-foreground" },
    { name: "YouTube", Logo: YouTubeLogo, color: "text-[#FF0000]" },
    { name: "Instagram", Logo: InstagramLogo, color: "text-[#E4405F]" },
    { name: "X", Logo: XLogo, color: "text-foreground" }
  ];

  return (
    <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background rounded-xl">
      {/* YOUR SaaS - Center/Right in Circular Target Design */}
      <motion.div 
        className="absolute right-8 sm:right-16 top-1/2 -translate-y-1/2 z-20"
        initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 -m-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-dashed border-primary/30" />
        </motion.div>
        
        {/* Middle pulsing ring */}
        <motion.div
          className="absolute inset-0 -m-4"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-primary/40 bg-primary/5" />
        </motion.div>

        {/* Inner core circle with text */}
        <motion.div 
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center shadow-2xl border-2 border-primary/60"
          animate={{ 
            boxShadow: [
              "0 0 20px 5px hsl(var(--primary) / 0.4)",
              "0 0 40px 10px hsl(var(--primary) / 0.6)",
              "0 0 20px 5px hsl(var(--primary) / 0.4)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-center">
            <p className="text-[10px] sm:text-xs font-bold text-primary-foreground leading-tight">YOUR</p>
            <p className="text-sm sm:text-base font-bold text-primary-foreground leading-tight">SaaS</p>
          </div>
        </motion.div>

        {/* Radiating pulse rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ 
              scale: [1, 2.5, 2.5],
              opacity: [0.6, 0.3, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 1,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Platform Icons - Left Side */}
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 sm:gap-10 z-20">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -100, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              delay: 0.3 + index * 0.15, 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div
              className="relative"
              animate={{ 
                scale: [1, 1.08, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 3,
                delay: index * 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-card/80 backdrop-blur-sm border-2 border-primary/30 rounded-xl flex items-center justify-center relative shadow-lg hover:shadow-xl transition-shadow">
                <platform.Logo className={`w-8 h-8 sm:w-9 sm:h-9 ${platform.color}`} />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.3,
                    repeat: Infinity
                  }}
                />
              </div>
            </motion.div>
            <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">
              {platform.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Curved Animated Flow from SaaS Circle to Platforms */}
      {platforms.map((_, index) => {
        const startY = 50;
        const endY = 25 + index * 18;
        
        return (
          <svg
            key={`arrow-${index}`}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          >
            <defs>
              <linearGradient id={`arrow-gradient-${index}`} x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="30%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                <stop offset="70%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              </linearGradient>
              <filter id={`glow-${index}`}>
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main path */}
            <motion.path
              d={`M 75% ${startY}% Q 50% ${(startY + endY) / 2}% 20% ${endY}%`}
              stroke={`url(#arrow-gradient-${index})`}
              strokeWidth="3"
              fill="none"
              strokeDasharray="8 6"
              filter={`url(#glow-${index})`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 3,
                delay: 1 + index * 0.3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
            />
            
            {/* Traveling particles along the path */}
            {[0, 1, 2].map((particleIndex) => (
              <motion.circle
                key={particleIndex}
                r="4"
                fill="hsl(var(--primary))"
                filter={`url(#glow-${index})`}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  r: [3, 5, 3]
                }}
                transition={{
                  duration: 3,
                  delay: 1 + index * 0.3 + particleIndex * 0.8,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
              >
                <animateMotion
                  dur="3s"
                  begin={`${1 + index * 0.3 + particleIndex * 0.8}s`}
                  repeatCount="indefinite"
                  path={`M 75% ${startY}% Q 50% ${(startY + endY) / 2}% 20% ${endY}%`}
                />
              </motion.circle>
            ))}
          </svg>
        );
      })}

      {/* Enhanced floating video particles emanating from circle */}
      {[...Array(16)].map((_, i) => {
        const angle = (i / 16) * 360;
        const platformIndex = i % 4;
        
        return (
          <motion.div
            key={i}
            className="absolute z-0"
            style={{
              right: "calc(8% + 2rem)",
              top: "50%",
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: 0,
              y: 0
            }}
            animate={{ 
              opacity: [0, 0.8, 0.6, 0],
              scale: [0, 1.2, 1, 0],
              x: [0, -window.innerWidth * 0.55],
              y: [0, (platformIndex - 1.5) * 80],
              rotate: [0, angle, angle + 180]
            }}
            transition={{
              duration: 4,
              delay: 1 + i * 0.25,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeOut"
            }}
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-primary/40 to-primary/20 rounded backdrop-blur-sm border border-primary/50 flex items-center justify-center shadow-lg">
              <Video className="w-2 h-2 sm:w-3 sm:h-3 text-primary" />
            </div>
          </motion.div>
        );
      })}

      {/* Glow effects */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default PlatformVideosAnimation;
