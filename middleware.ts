import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const response = createMiddleware(routing)(request);
  
  // Add the pathname to the response headers
  const pathname = request.nextUrl.pathname;
  response.headers.set('x-pathname', pathname);
  
  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
