'use client';
import { useParams } from 'next/navigation';

export default function ProjectDetails() {
  const { id } = useParams();
  return (
    <div>
      <div>{id}</div>
    </div>
  );
}
