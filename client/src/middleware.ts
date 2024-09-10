import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ru', 'uk'],
  defaultLocale: 'uk',
});

export const config = {
  matcher: ['/', '/(ru|uk)/:path*'],
};
