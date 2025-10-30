import { trpc } from '@/shared/api';

type LeaveEventButtonProps = {
  eventId: number;
  onSuccess?: () => void;
  children?: React.ReactNode;
};

export const LeaveEventButton = ({
  eventId,
  onSuccess,
  children,
}: LeaveEventButtonProps) => {
  const { mutate } = trpc.event.leave.useMutation({ onSuccess });

  const handleClick = () => {
    mutate({ id: eventId });
  };

  return (
    <button className="btn-danger" onClick={handleClick}>
      {children || 'Покинуть'}
    </button>
  );
};
