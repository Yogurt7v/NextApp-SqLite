import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateEventSchema } from '@/shared/api';

type CreateEventFormProps = {
  onSubmit: (data: CreateEventSchema) => void;
};

export const CreateEventForm = ({ onSubmit }: CreateEventFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEventSchema>({
    resolver: zodResolver(CreateEventSchema),
    mode: 'onChange',
  });

  return (
    <div className="card p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold  mb-2">Создание события</h2>
            <p className="text-gray-600">
              Заполните форму для создания нового мероприятия
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-primary-800 mb-2"
              >
                Название события
              </label>
              <input
                type="text"
                id="title"
                placeholder="Введите название мероприятия"
                className="block w-full rounded-lg border-2 border-primary-200 py-3 px-4 text-gray-900 placeholder:text-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                {...register('title')}
              />
              {errors.title && (
                <p className="mt-2 text-sm text-red-600 font-medium">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-primary-800 mb-2"
              >
                Описание
              </label>
              <textarea
                id="description"
                rows={4}
                placeholder="Опишите мероприятие, программу, требования и другую важную информацию"
                className="block w-full rounded-lg border-2 border-primary-200 py-3 px-4 text-gray-900 placeholder:text-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors resize-none"
                {...register('description')}
              />
              {errors.description ? (
                <p className="mt-2 text-sm text-red-600 font-medium">
                  {errors.description.message}
                </p>
              ) : (
                <p className="mt-2 text-sm text-gray-600">
                  Подробное описание поможет привлечь больше участников
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-semibold text-primary-800 mb-2"
              >
                Дата проведения
              </label>
              <input
                id="date"
                type="date"
                className="block rounded-lg border-2 border-primary-200 py-3 px-4 text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                {...register('date')}
              />
              {errors.date && (
                <p className="mt-2 text-sm text-red-600 font-medium">
                  {errors.date.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-end gap-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            Отмена
          </button>
          <button type="submit" className="btn-primary">
            Создать событие
          </button>
        </div>
      </form>
    </div>
  );
};
