const InstagramLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FD5949"/>
        <stop offset="50%" stopColor="#D6249F"/>
        <stop offset="100%" stopColor="#285AEB"/>
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="36" height="36" rx="8" fill="url(#instagram-gradient)"/>
    <circle cx="24" cy="24" r="7" stroke="white" strokeWidth="2.5" fill="none"/>
    <circle cx="34" cy="14" r="2" fill="white"/>
    <rect x="10" y="10" width="28" height="28" rx="6" stroke="white" strokeWidth="2.5" fill="none"/>
  </svg>
);

export default InstagramLogo;
