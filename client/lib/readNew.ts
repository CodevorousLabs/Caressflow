import directus from '@/lib/directus';
import { readItem } from '@directus/sdk';

interface New {
  slug?: string,
  user_created?: string,
  date_created?: string, //ISO
  user_updated?: string,
  date_updated?: string,
  title?: string,
  body: {
    time: number,
    blocks: {
      id: string,
      type: string,
      data: {
        text: string,
        level: number,
        items: { text: string, checked: boolean }[]
      }
    }[],
    version: string
  },
  Image?: { // File Path
    id: string,
    height: number,
    width: number
  }
}


export default function readNew(slug: string): Promise<New> {
  return directus.request(readItem('news', slug, {
    fields: [
      'slug',
      'user_created',
      'date_created',
      'title',
      'body',
      'Image.height',
      'Image.id',
      'Image.width'
    ]
  }));
}