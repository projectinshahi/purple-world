export type Enquiry = {
  fullName: string;
  phone: string;
  travelDate: string;
  destination: string;
  budget: string;
  travelers: number;
  notes: string;
};

// TODO: send to the backend / CRM once the API is available.
export async function submitEnquiry(enquiry: Enquiry): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  console.info("Enquiry (not sent, no backend yet):", enquiry);
}
