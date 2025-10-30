import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

type EventCardProps = {
  id: number;
  title: string;
  description: string | null;
  date: Date;
  action: ReactNode;
};

export const EventCard = ({ id, title, description, date, action }: EventCardProps) => {
  return (
    <div className="card group overflow-hidden">
      <div className="flex">
        <div className="flex-none w-56 relative overflow-hidden">
          <Image
            src="/poster.png"
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 group-hover:to-black/10 transition-all duration-300" />
        </div>
        <div className="flex-auto p-8">
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-wrap items-start justify-between mb-4">
              <h1 className="text-2xl font-bold mb-2 leading-tight">{title}</h1>
              <div className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                {date.toLocaleDateString('ru-RU')}
              </div>
            </div>

            <div className="flex-1 mb-6">
              <p className="text-gray-600 leading-relaxed line-clamp-3">{description}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex space-x-3">
                {action}
                <Link href={`/events/${id}`} className="btn-secondary">
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
