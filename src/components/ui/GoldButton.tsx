import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "solid" | "outline";

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type AsAnchor = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };
type AsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

export function GoldButton(props: AsAnchor | AsButton) {
  const { variant = "solid", className = "", children } = props;
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-sm";
  const styles =
    variant === "solid"
      ? "bg-gradient-gold text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5"
      : "border border-gold text-gold-deep hover:bg-gold hover:text-primary-foreground";

  if (props.as === "a") {
    const { variant: _v, as: _a, className: _c, children: _ch, ...rest } = props;
    return (
      <a className={`${base} ${styles} ${className}`} {...rest}>
        {children}
      </a>
    );
  }
  const { variant: _v, as: _a, className: _c, children: _ch, ...rest } = props as AsButton;
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}
