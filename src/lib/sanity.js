import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "yc6cdmk1",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-05-01",
  useCdn: true,
  perspective: "published",
});
