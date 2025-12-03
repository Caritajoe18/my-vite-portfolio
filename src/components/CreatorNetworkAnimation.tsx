import { motion } from "framer-motion";
import { Video, Eye, UserPlus, TrendingUp, Target, Zap } from "lucide-react";
import TikTokLogo from "./platform-logos/TikTokLogo";
import YouTubeLogo from "./platform-logos/YouTubeLogo";
import InstagramLogo from "./platform-logos/InstagramLogo";
import XLogo from "./platform-logos/XLogo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import AnimatedCounter from "./AnimatedCounter";
import avatar1 from "@/assets/creator-avatars/avatar-1.jpg";
import avatar2 from "@/assets/creator-avatars/avatar-2.jpg";
import avatar3 from "@/assets/creator-avatars/avatar-3.jpg";
import avatar4 from "@/assets/creator-avatars/avatar-4.jpg";
import avatar5 from "@/assets/creator-avatars/avatar-5.jpg";
import avatar6 from "@/assets/creator-avatars/avatar-6.jpg";
import avatar7 from "@/assets/creator-avatars/avatar-7.jpg";
import avatar8 from "@/assets/creator-avatars/avatar-8.jpg";
import avatar9 from "@/assets/creator-avatars/avatar-9.jpg";
import avatar10 from "@/assets/creator-avatars/avatar-10.jpg";
import avatar11 from "@/assets/creator-avatars/avatar-11.jpg";
import avatar12 from "@/assets/creator-avatars/avatar-12.jpg";
import avatar13 from "@/assets/creator-avatars/avatar-13.jpg";
import avatar14 from "@/assets/creator-avatars/avatar-14.jpg";
import avatar15 from "@/assets/creator-avatars/avatar-15.jpg";
import avatar16 from "@/assets/creator-avatars/avatar-16.jpg";
import avatar17 from "@/assets/creator-avatars/avatar-17.jpg";
import avatar18 from "@/assets/creator-avatars/avatar-18.jpg";
import avatar19 from "@/assets/creator-avatars/avatar-19.jpg";
import avatar20 from "@/assets/creator-avatars/avatar-20.jpg";
import avatar21 from "@/assets/creator-avatars/avatar-21.jpg";
import avatar22 from "@/assets/creator-avatars/avatar-22.jpg";
import avatar23 from "@/assets/creator-avatars/avatar-23.jpg";
import avatar24 from "@/assets/creator-avatars/avatar-24.jpg";

const CreatorNetworkAnimation = () => {
  // Generate varied avatar images - 24 unique avatars
  const avatarVariants = [
    { image: avatar1, initials: "JD" },
    { image: avatar2, initials: "SK" },
    { image: avatar3, initials: "AL" },
    { image: avatar4, initials: "MR" },
    { image: avatar5, initials: "TC" },
    { image: avatar6, initials: "LW" },
    { image: avatar7, initials: "BH" },
    { image: avatar8, initials: "NG" },
    { image: avatar9, initials: "PK" },
    { image: avatar10, initials: "RJ" },
    { image: avatar11, initials: "DS" },
    { image: avatar12, initials: "CF" },
    { image: avatar13, initials: "EM" },
    { image: avatar14, initials: "KL" },
    { image: avatar15, initials: "YT" },
    { image: avatar16, initials: "ZM" },
    { image: avatar17, initials: "HS" },
    { image: avatar18, initials: "FN" },
    { image: avatar19, initials: "GP" },
    { image: avatar20, initials: "QR" },
    { image: avatar21, initials: "VW" },
    { image: avatar22, initials: "XY" },
    { image: avatar23, initials: "IJ" },
    { image: avatar24, initials: "UV" },
  ];

  // Generate 20 creator positions in a grid on the left side - each with unique avatar
  const creators = Array.from({ length: 20 }, (_, i) => {
    const row = Math.floor(i / 5);
    const col = i % 5;
    return {
      id: i,
      x: col * 45 - 95,
      y: row * 45 - 70,
      delay: i * 0.05,
      avatar: avatarVariants[i], // Each creator gets a unique avatar
    };
  });

  const platforms = [
    { name: "TikTok", Logo: TikTokLogo, color: "text-foreground", position: { x: "48%", y: "20%" } },
    { name: "YouTube", Logo: YouTubeLogo, color: "text-[#FF0000]", position: { x: "48%", y: "37%" } },
    { name: "Instagram", Logo: InstagramLogo, color: "text-[#E4405F]", position: { x: "48%", y: "54%" } },
    { name: "X", Logo: XLogo, color: "text-foreground", position: { x: "48%", y: "71%" } },
  ];

  return (
    <div className="relative h-[250px] w-full overflow-hidden bg-gradient-to-br from-background via-background to-background">
      
      {/* Subtle ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-60" />
      
      {/* Vertical separators between sections - More elegant */}
      <motion.div
        className="absolute left-[33%] top-[5%] bottom-[5%] w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: [0, 0.6], scaleY: [0, 1] }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10"
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scaleX: [1, 2, 1]
          }}
          transition={{
            duration: 3,
            delay: 2,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1]
          }}
        />
      </motion.div>
      
      <motion.div
        className="absolute left-[63%] top-[5%] bottom-[5%] w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: [0, 0.6], scaleY: [0, 1] }}
        transition={{ duration: 1.2, delay: 3.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10"
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scaleX: [1, 2, 1]
          }}
          transition={{
            duration: 3,
            delay: 4,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1]
          }}
        />
      </motion.div>
      
      {/* 50+ Creators Recording Videos */}
      {creators.map((creator) => (
        <motion.div
          key={creator.id}
          className="absolute left-[20%] top-1/2 z-10"
          style={{
            x: creator.x,
            y: creator.y,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1],
            opacity: [0, 1]
          }}
          transition={{
            duration: 0.3,
            delay: creator.delay,
            ease: "backOut"
          }}
        >
          {/* Creator avatar with recording indicator */}
          <div className="relative">
            {/* Recording pulse - More subtle */}
            <motion.div
              className="absolute inset-0 -m-2 rounded-full bg-primary/30"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ 
                scale: [1, 1.6],
                opacity: [0.5, 0]
              }}
              transition={{
                duration: 2,
                delay: creator.delay + 0.2,
                repeat: 2,
                ease: [0.4, 0, 0.6, 1]
              }}
            />
            
            <Avatar className="w-5 h-5 border border-background shadow-md">
              <AvatarImage src={creator.avatar.image} alt={creator.avatar.initials} />
              <AvatarFallback className="text-[7px] font-bold">
                {creator.avatar.initials}
              </AvatarFallback>
            </Avatar>
            
            {/* Recording red dot */}
            <motion.div
              className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-background z-10"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: creator.delay + 0.3,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-red-500"
                animate={{ 
                  scale: [1, 1.5],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 1,
                  delay: creator.delay + 0.3,
                  repeat: 2,
                  ease: "easeOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* STAGE 1: Creators generate videos flowing to Platforms */}
      {platforms.map((platform, platformIndex) => {
        return creators
          .filter((_, i) => i % 4 === platformIndex)
          .slice(0, 6)
          .map((creator, videoIndex) => {
            const videoDelay = 2 + (platformIndex * 0.1) + (videoIndex * 0.1);
            const platformX = (parseFloat(platform.position.x) / 100) * window.innerWidth;
            const platformY = (parseFloat(platform.position.y) / 100) * window.innerHeight;
            
            return (
              <motion.div
                key={`video-creator-to-platform-${platformIndex}-${videoIndex}`}
                className="absolute left-[20%] top-1/2 z-20"
                style={{
                  x: creator.x,
                  y: creator.y,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  x: [
                    creator.x,
                    platformX - (window.innerWidth * 0.2),
                  ],
                  y: [
                    creator.y,
                    platformY - (window.innerHeight * 0.5),
                  ],
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1.2, 1, 0.3],
                  rotate: [0, (Math.random() - 0.5) * 360]
                }}
                transition={{
                  duration: 1.2,
                  delay: videoDelay,
                  ease: "easeInOut"
                }}
              >
                <div className="w-3 h-3 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded border border-accent/60 flex items-center justify-center shadow-md">
                  <Video className="w-1.5 h-1.5 text-accent-foreground" />
                </div>
              </motion.div>
            );
          });
      })}

      {/* STAGE 2: Platforms distribute to Statistics (clean funnel effect) */}
      {platforms.map((platform, platformIndex) => {
        return Array.from({ length: 3 }).map((_, videoIndex) => {
          const videoDelay = 4.5 + (platformIndex * 0.2) + (videoIndex * 0.15);
          const platformX = (parseFloat(platform.position.x) / 100) * window.innerWidth;
          const platformY = (parseFloat(platform.position.y) / 100) * window.innerHeight;
          const statsX = window.innerWidth * 0.83;
          const statsY = window.innerHeight * 0.5;
          
          return (
            <motion.div
              key={`video-platform-to-stats-${platformIndex}-${videoIndex}`}
              className="absolute z-20"
              style={{
                left: platformX,
                top: platformY,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                x: [
                  0,
                  statsX - platformX,
                ],
                y: [
                  0,
                  statsY - platformY + (videoIndex * 30 - 30),
                ],
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 0.8, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 1.2,
                delay: videoDelay,
                ease: "easeInOut"
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded border border-primary/60 flex items-center justify-center shadow-md">
                <Video className="w-1.5 h-1.5 text-primary-foreground" />
              </div>
            </motion.div>
          );
        });
      })}

      {/* Platform Logos with stacking videos */}
      {platforms.map((platform, index) => (
        <div key={platform.name}>
          {/* Platform Logo */}
          <motion.div
            className="absolute z-30"
            style={{
              left: platform.position.x,
              top: platform.position.y,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.4, 1],
              opacity: [0, 1, 1]
            }}
            transition={{
              duration: 0.6,
              delay: 1.5 + (index * 0.15),
              ease: "backOut"
            }}
          >
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.08, 1]
              }}
              transition={{
                duration: 2,
                delay: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Absorption pulse when videos arrive */}
              <motion.div
                className="absolute inset-0 -m-4 rounded-xl bg-accent/40 blur-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 0.6,
                  delay: 3.2 + (index * 0.15),
                  repeat: 6,
                  repeatDelay: 0.3,
                  ease: "easeOut"
                }}
              />
              {/* Glowing ring */}
              <motion.div
                className="absolute inset-0 -m-3 rounded-xl border-2 border-primary/40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.2, 0.6]
                }}
                transition={{
                  duration: 2,
                  delay: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="w-10 h-10 bg-card/95 backdrop-blur-sm border border-primary/40 rounded-lg flex items-center justify-center shadow-xl">
                <platform.Logo className={`w-6 h-6 ${platform.color}`} />
              </div>
            </motion.div>
          </motion.div>

          {/* Stacking videos on platform - absorbed cleanly */}
          {Array.from({ length: 6 }).map((_, stackIndex) => {
            const stackDelay = 2.8 + (index * 0.15) + (stackIndex * 0.15);
            const offsetX = (Math.random() - 0.5) * 35;
            const offsetY = (Math.random() - 0.5) * 35;
            
            return (
              <motion.div
                key={`stack-${index}-${stackIndex}`}
                className="absolute z-25"
                style={{
                  left: platform.position.x,
                  top: platform.position.y,
                }}
                initial={{ 
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%"
                }}
                animate={{ 
                  opacity: [0, 1, 0.8],
                  scale: [0, 1, 0.9],
                  x: [`-50%`, `calc(-50% + ${offsetX}px)`],
                  y: [`-50%`, `calc(-50% + ${offsetY}px)`],
                  rotate: [(Math.random() - 0.5) * 30]
                }}
                transition={{
                  duration: 0.6,
                  delay: stackDelay,
                  ease: "backOut"
                }}
              >
                <div className="w-3 h-3 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded border border-accent/60 flex items-center justify-center shadow-sm">
                  <Video className="w-1.5 h-1.5 text-accent-foreground" />
                </div>
              </motion.div>
            );
          })}

          {/* Video count indicator */}
          <motion.div
            className="absolute z-35 pointer-events-none"
            style={{
              left: platform.position.x,
              top: platform.position.y,
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: "20px",
              y: "-50%"
            }}
            animate={{ 
              opacity: [0, 1],
              scale: [0, 1],
            }}
            transition={{
              duration: 0.5,
              delay: 5 + (index * 0.15),
              ease: "backOut"
            }}
          >
            <div className="bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 text-[10px] font-bold shadow-md border border-primary/60">
              6+
            </div>
          </motion.div>
        </div>
      ))}

      {/* Connection lines from platforms to statistics */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-15">
        {platforms.map((platform, index) => (
          <g key={`connection-${platform.name}`}>
            {/* Animated line from platform to stats */}
            <motion.path
              d={`M ${platform.position.x} ${platform.position.y} Q 65% 45%, 80% 45%`}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeOpacity="0.3"
              strokeDasharray="8 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1],
                opacity: [0, 0.5, 0.3]
              }}
              transition={{
                duration: 1.2,
                delay: 5.5 + (index * 0.15),
                ease: "easeOut"
              }}
            />
            
            {/* Animated particles flowing to stats */}
            {[0, 1, 2].map((particleIndex) => (
              <motion.circle
                key={`particle-${platform.name}-${particleIndex}`}
                r="3"
                fill="hsl(var(--accent))"
                initial={{ 
                  offsetDistance: "0%",
                  opacity: 0
                }}
                animate={{ 
                  offsetDistance: ["0%", "100%"],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  delay: 6 + (index * 0.15) + (particleIndex * 0.4),
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
                style={{
                  offsetPath: `path("M ${platform.position.x} ${platform.position.y} Q 65% 45%, 80% 45%")`,
                }}
              />
            ))}
          </g>
        ))}
      </svg>

      {/* STAGE 3: Statistics Results - Perfectly Aligned Vertical Stack */}
      <motion.div
        className="absolute right-[8%] inset-y-0 my-auto z-40 flex flex-col gap-1 w-[100px] h-fit"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: [0, 1], x: [40, 0] }}
        transition={{
          duration: 0.8,
          delay: 5.5,
          ease: "easeOut"
        }}
      >
        {/* Total Views */}
        <motion.div
          className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-primary/20 rounded-lg px-2.5 py-2 shadow-lg w-full overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: [0.9, 1.02, 1],
            opacity: [0, 1]
          }}
          transition={{
            duration: 0.8,
            delay: 5.8,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          {/* Subtle glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center gap-1.5 relative z-10">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg flex items-center justify-center shrink-0 shadow-inner">
              <Eye className="w-3 h-3 text-blue-500" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-foreground leading-tight tabular-nums tracking-tight">
                <AnimatedCounter from={0} to={500000} duration={2} delay={6} />
              </div>
              <div className="text-[7px] text-muted-foreground/80 font-semibold uppercase tracking-wider mt-0.5">Total Views</div>
            </div>
          </div>
        </motion.div>

        {/* New Users */}
        <motion.div
          className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-primary/20 rounded-lg px-2.5 py-2 shadow-lg w-full overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: [0.9, 1.02, 1],
            opacity: [0, 1]
          }}
          transition={{
            duration: 0.8,
            delay: 6,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center gap-1.5 relative z-10">
            <div className="w-6 h-6 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-lg flex items-center justify-center shrink-0 shadow-inner">
              <UserPlus className="w-3 h-3 text-green-500" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-foreground leading-tight tabular-nums">
                <AnimatedCounter from={0} to={525} duration={2} delay={6.2} />
              </div>
              <div className="text-[7px] text-muted-foreground font-medium uppercase tracking-wide">New Users</div>
            </div>
          </div>
        </motion.div>

        {/* Trial Signups */}
        <motion.div
          className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-primary/20 rounded-lg px-2.5 py-2 shadow-lg w-full overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: [0.9, 1.02, 1],
            opacity: [0, 1]
          }}
          transition={{
            duration: 0.8,
            delay: 6.2,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center gap-1.5 relative z-10">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-lg flex items-center justify-center shrink-0 shadow-inner">
              <Zap className="w-3 h-3 text-purple-500" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-foreground leading-tight tabular-nums tracking-tight">
                <AnimatedCounter from={0} to={3500} duration={2} delay={6.4} />
              </div>
              <div className="text-[7px] text-muted-foreground/80 font-semibold uppercase tracking-wider mt-0.5">Trial Signups</div>
            </div>
          </div>
        </motion.div>

        {/* Conversion Rate */}
        <motion.div
          className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-primary/20 rounded-lg px-2.5 py-2 shadow-lg w-full overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: [0.9, 1.02, 1],
            opacity: [0, 1]
          }}
          transition={{
            duration: 0.8,
            delay: 6.4,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center gap-1.5 relative z-10">
            <div className="w-6 h-6 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-lg flex items-center justify-center shrink-0 shadow-inner">
              <Target className="w-3 h-3 text-orange-500" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-foreground leading-tight tabular-nums tracking-tight">
                <AnimatedCounter from={0} to={15} duration={2} delay={6.6} decimals={0} />%
              </div>
              <div className="text-[7px] text-muted-foreground/80 font-semibold uppercase tracking-wider mt-0.5">Conversion</div>
            </div>
          </div>
        </motion.div>

        {/* Engagement Rate */}
        <motion.div
          className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-primary/20 rounded-lg px-2.5 py-2 shadow-lg w-full overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: [0.9, 1.02, 1],
            opacity: [0, 1]
          }}
          transition={{
            duration: 0.8,
            delay: 6.6,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center gap-1.5 relative z-10">
            <div className="w-6 h-6 bg-gradient-to-br from-pink-500/20 to-pink-600/10 rounded-lg flex items-center justify-center shrink-0 shadow-inner">
              <TrendingUp className="w-3 h-3 text-pink-500" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-foreground leading-tight tabular-nums tracking-tight">
                <AnimatedCounter from={0} to={7.8} duration={2} delay={6.8} decimals={1} />%
              </div>
              <div className="text-[7px] text-muted-foreground/80 font-semibold uppercase tracking-wider mt-0.5">Engagement</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 right-[75%] w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full blur-3xl pointer-events-none"
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
    </div>
  );
};

export default CreatorNetworkAnimation;
