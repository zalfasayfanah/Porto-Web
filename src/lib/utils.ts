import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names safely with tailwind-merge and clsx.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Validates if a URL is an active, reachable external link or mailto link.
 * Filters out empty strings, undefined/null, and placeholder markers like "[ISI_URL_...]".
 */
export function isValidUrl(url?: string | null): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  if (!trimmed) return false;

  // Check if it's a template placeholder like "[ISI_URL_CV_PDF]"
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return false;
  }

  // Check for mailto
  if (trimmed.startsWith("mailto:")) {
    const email = trimmed.replace("mailto:", "").trim();
    return email.includes("@") && email.includes(".");
  }

  // Check for valid http or https protocol
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

