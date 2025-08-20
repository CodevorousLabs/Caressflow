import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
export default function readPosts() {
  return directus.request(readItems('global'));
}