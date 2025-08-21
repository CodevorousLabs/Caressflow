import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

export default function readPublics() {
  return directus.request(readItems('global'));
}