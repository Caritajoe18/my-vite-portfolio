import { motion } from "framer-motion";
import TikTokLogo from "./platform-logos/TikTokLogo";
import InstagramLogo from "./platform-logos/InstagramLogo";
import YouTubeLogo from "./platform-logos/YouTubeLogo";

export default function FloatingPlatformLogos() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* TikTok Logo */}
      <motion.div
        className="absolute top-20 right-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-24 h-24 flex items-center justify-center bg-white rounded-2xl shadow-lg">
          <TikTokLogo className="w-16 h-16" />
        </div>
      </motion.div>

      {/* Instagram Logo */}
      <motion.div
        className="absolute bottom-32 right-32"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <div className="w-28 h-28 flex items-center justify-center bg-white rounded-2xl shadow-lg">
          <InstagramLogo className="w-20 h-20" />
        </div>
      </motion.div>

      {/* YouTube Shorts Logo */}
      <motion.div
        className="absolute top-40 left-20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="w-32 h-32 flex items-center justify-center bg-white rounded-2xl shadow-lg">
          <YouTubeLogo className="w-20 h-20" />
        </div>
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.line
          x1="30%"
          y1="35%"
          x2="70%"
          y2="25%"
          stroke="#d1d5db"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{
            strokeDashoffset: [0, -10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.line
          x1="30%"
          y1="35%"
          x2="70%"
          y2="65%"
          stroke="#d1d5db"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{
            strokeDashoffset: [0, -10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }}
        />
        <motion.line
          x1="70%"
          y1="25%"
          x2="70%"
          y2="65%"
          stroke="#d1d5db"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{
            strokeDashoffset: [0, -10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />
      </svg>
    </div>
  );
}
