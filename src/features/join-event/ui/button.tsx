import { trpc } from '@/shared/api';

type JoinEventButtonProps = {
  eventId: number;
  onSuccess?: () => void;
};

export const JoinEventButton = ({ eventId, onSuccess }: JoinEventButtonProps) => {
  const { mutate } = trpc.event.join.useMutation({ onSuccess });

  const handleClick = () => {
    mutate({ id: eventId });
  };

  return (
    <button className="btn-success" onClick={handleClick}>
      Присоединиться
    </button>
  );
};
