import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';


export default function readPatientBenefits() {
  return directus.request(readItems('patientBenefits'));
}