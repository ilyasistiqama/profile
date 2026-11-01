// Judul + deskripsi singkat di atas setiap section
export default function SectionHeader({ title, subtitle, center = false, as: Heading = "h2" }) {
  return (
    <div className={`mb-10 max-w-2xl animate-fade-up ${center ? "mx-auto text-center" : ""}`}>
      <Heading className="text-3xl font-semibold md:text-4xl">{title}</Heading>
      {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
    </div>
  );
}
