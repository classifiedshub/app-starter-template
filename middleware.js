import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|[\\w-]+\\.\\w+).*)"],
};

export default async function middleware(req) {
  const url = req.nextUrl;
  const pathname = url.pathname;
  const searchParams = url.searchParams.toString();

  // Non- Authenticated Paths
  const nonAuthRequiredPaths = [
    "/login",
    "/forgot-password",
    "/register",
    "/verify",
    "/onboard",
  ];

  //   Checks if a path matches path in the nonAuthPaths
  const isNonAuthRequiredPath = (path) => {
    return nonAuthRequiredPaths.some((noAuthPath) => {
      const regex = new RegExp(
        `^${noAuthPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(/.*)?$`
      );
      return regex.test(path);
    });
  };

// Get the hostname(subdomain) of the request 
let hostname = req.headers.get("host").replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
const pathWithParams = `${pathname}${searchParams ? `?${searchParams}` : ""}`;

// Rewrites for app pages
if (hostname === `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    const session = await getToken({ req });
    if (!session && !isNonAuthRequiredPath(pathname)) {
      return NextResponse.redirect(new URL("/login", req.url));
    } else if (session && pathname === "/login") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.rewrite(
      new URL(`/app${pathname === "/" ? "" : pathWithParams}`, req.url)
    );
  }
// Rewrite root application to `/home` folder
if (
    hostname === "localhost:3000" ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    return NextResponse.rewrite(
      new URL(`/home${pathname === "/" ? "" : pathWithParams}`, req.url)
    );
  }

  // Rewrite everything else to `/[domain]/[slug] dynamic route
  return NextResponse.rewrite(
    new URL(`/${hostname}${pathWithParams}`, req.url)
  );

}
