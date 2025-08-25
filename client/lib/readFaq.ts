import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

interface Question {
  id: number,
  user_created: string,
  date_created: string,
  user_updated: string,
  date_updated: string,
  q: string,
  a: string
}

export default function readFaq(): Promise<Question[]> {
  return directus.request(readItems('faq'));
}