// Data from purple-backend (managed in the admin panel). Server-only: these
// run in Server Components, and responses are cached for 30 seconds so admin
// changes show up on the site shortly after saving.

const API_URL = (process.env.API_URL ?? "http://localhost:4000").replace(/\/$/, "");
const REVALIDATE_SECONDS = 30;

export type Destination = {
  _id: string;
  title: string;
  text: string;
  image: string;
  link: string;
};

export type TourPackage = {
  _id: string;
  title: string;
  slug: string;
  destination: string;
  nights: number;
  days: number;
  summary: string;
  description: string;
  route: { place: string; nights: number }[];
  itinerary: { title: string; text: string }[];
  inclusions: string[];
  exclusions: string[];
  price: number;
  coverImage: string;
  gallery: string[];
  featured: boolean;
};

/** Returns null when the backend is unreachable or errors, so pages can fall back. */
async function get<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}/api${path}`, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    console.warn(`[api] ${path}: backend unreachable at ${API_URL}`);
    return null;
  }
}

export const getDestinations = () => get<Destination[]>("/destinations");

export const getPackages = (destination?: string) =>
  get<TourPackage[]>(
    destination ? `/packages?destination=${encodeURIComponent(destination)}` : "/packages",
  );

export const getPackage = (slug: string) => get<TourPackage>(`/packages/${encodeURIComponent(slug)}`);

/** Uploaded images are stored as "/uploads/…" paths on the backend. */
export function mediaUrl(path: string): string {
  return path.startsWith("/uploads/") ? `${API_URL}${path}` : path;
}

export function formatDuration(pkg: Pick<TourPackage, "nights" | "days">): string {
  return `${pkg.nights} Night${pkg.nights === 1 ? "" : "s"} / ${pkg.days} Day${pkg.days === 1 ? "" : "s"}`;
}

export function formatPrice(price: number): string {
  return price > 0 ? `From ₹${price.toLocaleString("en-IN")}` : "Price on request";
}
