import { RouterOutput } from "@/shared/api";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

type EventDetailProps = NonNullable<RouterOutput["event"]["findUnique"]>;

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
  const isAuthor = authorId === session?.user?.id



  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between ">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Информация о событии
          </h3>
        </div>
        {isAuthor && <Link href={`/events/edit/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-medium  py-2 px-4 rounded">Редактировать событие</Link>}
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Название
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {title}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Описание
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {description}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Дата проведения
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {date.toLocaleDateString()}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Участники
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {participations.map(({ user }) => user.name).join(", ")}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
