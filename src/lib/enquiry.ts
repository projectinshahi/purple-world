export type Enquiry = {
  fullName: string;
  phone: string;
  travelDate: string;
  destination: string;
  budget: string;
  travelers: number;
  notes: string;
  /** Honeypot: a hidden field real visitors leave empty */
  website?: string;
};

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000").replace(/\/$/, "");

/** Sends the form to purple-backend, where it appears under Enquiries in the admin panel. */
export async function submitEnquiry(enquiry: Enquiry): Promise<void> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}/api/enquiries`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(enquiry),
    });
  } catch {
    throw new Error("We couldn't send your request. Please check your connection and try again.");
  }
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    const firstField = data.fields ? Object.values(data.fields)[0] : undefined;
    throw new Error(
      (typeof firstField === "string" && firstField) ||
        data.error ||
        "Something went wrong. Please try again, or call us.",
    );
  }
}
