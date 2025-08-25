import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';


export default function readDoctorBenefits() {
  return directus.request(readItems('doctorBenefits'));
}