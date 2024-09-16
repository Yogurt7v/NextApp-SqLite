import { CreateEventForm } from "@/features/create-event";
import { trpc } from "@/shared/api";
import { useRouter } from "next/router";
import { EditEventSchema } from "@/shared/api";

export default function EditEvent() {
    const router = useRouter();

    const { mutate } = trpc.event.edit.useMutation({
        onSuccess: (data) => {
            router.push(`/events/edit/${data.id}`);
        },
    });

    const handleSubmit = (data: any) => {
        mutate(data);
    };

    return <CreateEventForm onSubmit={handleSubmit} />;
}
