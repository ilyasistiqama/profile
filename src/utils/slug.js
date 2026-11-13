// Ubah teks jadi id/anchor yang aman untuk URL, mis. "CV. Mamorasoft" -> "cv-mamorasoft"
export default function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
