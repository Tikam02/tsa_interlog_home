import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://tsatradelog.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/error'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
