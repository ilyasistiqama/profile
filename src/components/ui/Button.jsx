import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors";

const variants = {
  primary: "border-accent bg-accent text-on-accent hover:border-accent-hover hover:bg-accent-hover",
  outline: "border-line bg-surface text-fg hover:border-fg/30",
  // Untuk di atas foto/latar gelap
  light: "border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
};

/**
 * Satu komponen untuk semua tombol:
 * - <Button to="/contact">   -> link antar halaman
 * - <Button href="https://"> -> link keluar (tab baru)
 * - <Button onClick={...}>   -> tombol biasa
 */
export default function Button({ to, href, variant = "primary", className = "", children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return <button type="button" className={classes} {...props}>{children}</button>;
}
