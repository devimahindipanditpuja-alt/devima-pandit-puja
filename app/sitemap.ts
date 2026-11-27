import { MetadataRoute } from 'next';
import { bengaluruLocations } from '../data/locations';
import { pujaServices } from '../data/pujas';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devimahindipanditpuja.com';
  
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  for (const loc of bengaluruLocations) {
    routes.push({
      url: `${baseUrl}/${loc.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    for (const puja of pujaServices) {
      routes.push({
        url: `${baseUrl}/${loc.slug}/${puja.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  return routes;
}