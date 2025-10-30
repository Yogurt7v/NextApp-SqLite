import { EventDetail } from '@/entities/event';
import { trpc } from '@/shared/api';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function Event() {
  const router = useRouter();
  const session = useSession();

  const { data, isLoading } = trpc.event.findUnique.useQuery({
    id: Number(router.query.id),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="loading-spinner mr-3"></div>
        <span className="text-primary-700 font-medium">Загрузка мероприятия...</span>
      </div>
    );
  }

  if (session.status === 'unauthenticated') {
    return 'Forbidden';
  }

  if (!data) {
    return 'No data';
  }

  return <EventDetail {...data} />;
}
