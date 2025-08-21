import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

interface News {
  title: string
}

export default function readNews() {
  return directus.request(readItems('news'));
}