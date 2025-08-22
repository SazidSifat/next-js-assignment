import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req });
  const isEmail = Boolean(token?.email);
  const isProtectPath = req.nextUrl.pathname.startsWith("/dashboard");

  if (isProtectPath && !isEmail) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*"],
};
