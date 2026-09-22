import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "invert" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-strong shadow-[0_1px_0_rgba(255,255,255,0.12)_inset]",
  secondary:
    "bg-surface text-ink border border-border-strong hover:border-ink/30 hover:bg-white",
  ghost: "bg-transparent text-ink hover:bg-black/5",
  invert:
    "bg-white text-ink hover:bg-white/90 shadow-sm",
  outline:
    "bg-transparent text-white border border-white/25 hover:bg-white/10",
};

const sizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
    variants[variant],
    sizes[size],
    className,
  );

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        target={external || href.startsWith("http") ? "_blank" : undefined}
        rel={
          external || href.startsWith("http")
            ? "noopener noreferrer"
            : undefined
        }
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
