type IconProps = {
  className?: string;
};

/** Inline icons with suppressHydrationWarning — Dark Reader mutates SVG attrs before hydrate. */
export function ArrowDownRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M17 7v10H7" suppressHydrationWarning />
      <path d="M7 7l10 10" suppressHydrationWarning />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M7 17V7h10" suppressHydrationWarning />
      <path d="M7 17l10-10" suppressHydrationWarning />
    </svg>
  );
}
