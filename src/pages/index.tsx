import { EventCard } from '@/entities/event';
import { JoinEventButton } from '@/features/join-event';
import { LeaveEventButton } from '@/features/leave-event/ui/button';
import { trpc } from '@/shared/api';
import Link from 'next/link';

export default function Home() {
  const { data, refetch } = trpc.event.findMany.useQuery();

  if (!data) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="loading-spinner mr-3"></div>
        <span className="text-primary-700 font-medium">Загрузка мероприятий...</span>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
          📅
        </div>
        <h2 className="text-2xl font-bold  mb-4">Мероприятия не найдены</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Пока нет опубликованных мероприятий. Создайте первое мероприятие и пригласите
          участников!
        </p>
        <Link href="/events/create" className="btn-primary">
          Создать мероприятие
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold  mb-2">Предстоящие мероприятия</h1>
        <p className="text-gray-600">Присоединяйтесь к интересным событиям</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {data.map((event) => (
          <EventCard
            key={event.id}
            {...event}
            action={
              !event.isJoined ? (
                <JoinEventButton eventId={event.id} onSuccess={refetch} />
              ) : (
                <LeaveEventButton eventId={event.id} onSuccess={refetch}>
                  Покинуть
                </LeaveEventButton>
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
