import directus from '@/lib/directus';
import { readItem } from '@directus/sdk';

interface New {
  slug?: string,
  user_created?: string,
  date_created?: string, //ISO
  user_updated?: string,
  date_updated?: string,
  title?: string,
  Image?: string // File Path
}

export default function readNew(slug: string): Promise<New> {
  return directus.request(readItem('news', slug));
}