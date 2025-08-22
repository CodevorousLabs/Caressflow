import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

interface Feedback {
  id: number,
  name: string,
  feedback: string,
  PatientImage: string
}


export default function readPatientFeedbacks(): Promise<Feedback[]> {
  return directus.request(readItems('patientFeedbacks'));
}