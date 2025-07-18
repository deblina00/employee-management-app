import { useEffect, useState } from "react";

// Reusable gradient icon wrapper
export function GradientIcon({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    setIsDark(document.documentElement.classList.contains("dark"));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const gradientId = `gradient-${id}-${isDark ? "dark" : "light"}`;

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id={`gradient-${id}-light`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#36D1DC" />
          <stop offset="100%" stopColor="#09245f" />
        </linearGradient>
        <linearGradient id={`gradient-${id}-dark`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F8FF00" />
          <stop offset="100%" stopColor="#3AD59F" />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

// Individual Lucide Icons wrapped with dynamic gradient

export function GradientUsersIcon({ className }: { className?: string }) {
  return (
    <GradientIcon id="users" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </GradientIcon>
  );
}

export function GradientShieldIcon({ className }: { className?: string }) {
  return (
    <GradientIcon id="shield" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </GradientIcon>
  );
}

export function GradientZapIcon({ className }: { className?: string }) {
  return (
    <GradientIcon id="zap" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </GradientIcon>
  );
}

export function GradientPlusIcon({ className }: { className?: string }) {
  return (
    <GradientIcon id="plus" className={className}>
      <path d="M12 5v14M5 12h14" />
    </GradientIcon>
  );
}


export function GradientEditIcon({ className }: { className?: string }) {
  return (
    <GradientIcon id="edit" className={className}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2a2.1 2.1 0 0 1 3 3L12 14l-4 1 1-4Z" />
    </GradientIcon>
  );
}

export function GradientTrashIcon({ className }: { className?: string }) {
  return (
    <GradientIcon id="trash" className={className}>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M15 6V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2" />
    </GradientIcon>
  );
}

export function GradientSearchIcon({ className }: { className?: string }) {
  return (
    <GradientIcon id="search" className={className}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </GradientIcon>
  );
}

export function GradientDownloadIcon({ className }: { className?: string }) {
  return (
    <GradientIcon id="download" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </GradientIcon>
  );
}

export function GradientUploadIcon({ className }: { className?: string }) {
  return (
    <GradientIcon id="upload" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </GradientIcon>
  );
}
export function GradientGithubIcon({ className }: { className?: string }) {
  return (
    <GradientIcon id="github" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.88 1.48a13.38 13.38 0 0 0-7 0C5.35.65 4.17 1 4.17 1A5.07 5.07 0 0 0 4.08 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
    </GradientIcon>
  );
}

export function GradientTwitterIcon({ className }: { className?: string }) {
  return (
    <GradientIcon id="twitter" className={className}>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.5 0c-2.5 0-4.5 2-4.5 4.5a4.36 4.36 0 0 0 .12 1A12.94 12.94 0 0 1 3 1.2a4.48 4.48 0 0 0-.6 2.27c0 1.56.8 2.93 2 3.73a4.5 4.5 0 0 1-2-.55v.05c0 2.18 1.56 4 3.64 4.4a4.52 4.52 0 0 1-2 .07c.56 1.74 2.18 3 4.1 3a9 9 0 0 1-5.58 1.92A8.75 8.75 0 0 1 0 19.54a12.88 12.88 0 0 0 7 2.05c8.4 0 13-7 13-13 0-.2 0-.42-.02-.63A9.18 9.18 0 0 0 23 3z" />
    </GradientIcon>
  );
}

export function GradientLinkedinIcon({ className }: { className?: string }) {
  return (
    <GradientIcon id="linkedin" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </GradientIcon>
  );
}
