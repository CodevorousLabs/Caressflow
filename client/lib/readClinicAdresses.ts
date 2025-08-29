import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

export default function clinicAdresses() {
  return directus.request(readItems('clinicAdresses'));
}