import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

export const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;

  // Если пользователь не авторизован и пытается зайти на защищенную страницу
  if (!req.auth && pathname.startsWith("/dashboard")) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }

  // Если пользователь авторизован или идет запрос к другим страницам, пропускаем дальше
  return NextResponse.next();
});

export const config = {
  // Защищаем маршруты, которые начинаются с /dashboard и не трогаем другие
  matcher: ["/dashboard/:path*"],
};
