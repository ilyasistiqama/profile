import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg border-2 px-6 py-2.5 font-semibold transition-colors";

const variants = {
  primary: "border-accent bg-accent text-on-accent hover:border-accent-hover hover:bg-accent-hover",
  outline: "border-line text-fg hover:border-accent hover:text-accent",
  // Untuk di atas foto/latar gelap
  light: "border-white/60 text-white hover:border-white hover:bg-white/10",
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
