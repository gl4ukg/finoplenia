import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/de');
  return null;
}
