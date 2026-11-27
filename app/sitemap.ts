import { MetadataRoute } from 'next';
import { bengaluruLocations } from '../data/locations';
import { pujaServices } from '../data/pujas';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devimahindipanditpuja.com';
  const lastModified = new Date('2026-11-27');

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  for (const loc of bengaluruLocations) {
    routes.push({
      url: `${baseUrl}/${loc.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    for (const puja of pujaServices) {
      routes.push({
        url: `${baseUrl}/${loc.slug}/${puja.id}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  return routes;
}