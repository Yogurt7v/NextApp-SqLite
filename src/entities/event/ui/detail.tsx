import { RouterOutput } from '@/shared/api';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

type EventDetailProps = NonNullable<RouterOutput['event']['findUnique']>;

export const EventDetail = ({
  title,
  description,
  date,
  participations,
  authorId,
}: EventDetailProps) => {
  const { query } = useRouter();
  const id = Number(query.id);

  const { data: session } = useSession();
  const isAuthor = authorId === session?.user?.id;

  return (
    <div className="card p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold  mb-2">{title}</h1>
          <p className="text-gray-600 text-lg">Информация о мероприятии</p>
        </div>
        {isAuthor && (
          <Link href={`/events/edit/${id}`} className="btn-primary mt-4 lg:mt-0">
            Редактировать событие
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-primary-800 mb-3 flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
              Описание
            </h3>
            <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
              {description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary-800 mb-3 flex items-center">
              <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
              Дата проведения
            </h3>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                📅
              </div>
              <p className="text-gray-700 font-medium">
                {date.toLocaleDateString('ru-RU', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary-800 mb-3 flex items-center">
            <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
            Участники
          </h3>
          {participations.length > 0 ? (
            <div className="space-y-3">
              {participations.map(({ user }) => (
                <div
                  key={user.name}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-gray-700 font-medium">{user.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic bg-gray-50 p-4 rounded-lg">
              Пока нет участников
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
