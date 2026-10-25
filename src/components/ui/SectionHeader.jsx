// Judul + deskripsi singkat di atas setiap section
export default function SectionHeader({ title, subtitle, center = false }) {
  return (
    <div className={`mb-10 animate-fade-up ${center ? "mx-auto max-w-2xl text-center" : ""}`}>
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
    </div>
  );
}
