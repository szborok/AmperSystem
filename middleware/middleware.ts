import { NextRequest, NextResponse } from "next/server";

// Define supported locales
const SUPPORTED_LANGUAGES = ["en", "hu"];
const DEFAULT_LANGUAGE = "en";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // If the user is already visiting a language-specific page, do nothing
  if (SUPPORTED_LANGUAGES.some((lang) => pathname.startsWith(`/${lang}`))) {
    return NextResponse.next();
  }

  // Get the user's preferred language from the browser
  const acceptLanguage = req.headers.get("accept-language") || "";
  const preferredLanguage = acceptLanguage.split(",")[0].split("-")[0];

  // Choose a language (fallback to default if unsupported)
  const selectedLanguage = SUPPORTED_LANGUAGES.includes(preferredLanguage)
    ? preferredLanguage
    : DEFAULT_LANGUAGE;

  // Redirect to the appropriate language page
  const url = req.nextUrl.clone();
  url.pathname = `/${selectedLanguage}`;

  return NextResponse.redirect(url);
}

// Enable middleware for all routes
export const config = {
  matcher: "/", // Apply only to the root URL
};
