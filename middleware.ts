import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

export const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;

  // Проверка авторизации пользователя
  const isAuthenticated = !!req.auth;

  // Если пользователь авторизован и пытается зайти на любую страницу в папке /auth
  if (isAuthenticated && pathname.startsWith("/auth")) {
    const dashboardUrl = new URL("/dashboard", req.nextUrl.origin);
    return NextResponse.redirect(dashboardUrl);
  }

  // Если пользователь не авторизован и пытается зайти на защищенную страницу
  if (!isAuthenticated && pathname.startsWith("/dashboard")) {
    const loginUrl = new URL("/auth/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }

  // Пропускаем остальные запросы
  return NextResponse.next();
});

export const config = {
  // Защищаем маршруты, которые начинаются с /dashboard и /auth
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
