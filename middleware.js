import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function middleware(req) {
  //token will exits if user exist
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  //If its a req for next -auth session
  // the token exists

  const { pathname } = req.nextUrl;
  if (pathname?.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  if (!token && pathname !== "/login") {
    // And redirect to the new URL
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}
