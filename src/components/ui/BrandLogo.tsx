import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  priority,
  href = "/",
}: {
  className?: string;
  priority?: boolean;
  href?: string | null;
}) {
  const image = (
    <Image
      src={siteConfig.logo.src}
      alt={siteConfig.logo.alt}
      width={siteConfig.logo.width}
      height={siteConfig.logo.height}
      priority={priority}
      className={cn("h-10 w-auto object-contain sm:h-11", className)}
    />
  );

  if (href === null) return image;

  return (
    <Link href={href} className="inline-flex shrink-0 items-center" aria-label={siteConfig.name}>
      {image}
    </Link>
  );
}
