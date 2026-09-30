import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>`;

  return new Response(content, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
