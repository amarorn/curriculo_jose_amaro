import { cn } from "@/lib/utils";

const layoutOptions = [
  { id: "A", label: "Layout A", href: "/" },
  { id: "B", label: "Layout B", href: "/layout-b" },
  { id: "C", label: "Layout C", href: "/layout-c" },
  { id: "D", label: "Layout D", href: "/layout-d" },
  { id: "E", label: "Layout E", href: "/layout-e" },
  { id: "F", label: "Layout F", href: "/layout-f" },
  { id: "G", label: "Layout G", href: "/layout-g" },
];

interface LayoutSwitcherProps {
  active: "A" | "B" | "C" | "D" | "E" | "F" | "G";
  className?: string;
}

export function LayoutSwitcher({ active, className }: LayoutSwitcherProps) {
  return (
    <div
      className={cn(
        "hidden md:flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.3em]",
        "text-muted-foreground/80",
        className,
      )}
    >
      {layoutOptions.map((option, idx) => (
        <div key={option.id} className="flex items-center gap-4">
          <a
            href={option.href}
            className={cn(
              "transition-colors",
              active === option.id ? "text-primary" : "hover:text-primary",
            )}
            aria-current={active === option.id ? "page" : undefined}
          >
            {option.label}
          </a>
          {idx < layoutOptions.length - 1 && (
            <span className="text-muted-foreground/40">/</span>
          )}
        </div>
      ))}
    </div>
  );
}

