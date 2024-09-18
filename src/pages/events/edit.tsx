import { EditEventSchema, trpc } from "@/shared/api";
import { useRouter } from "next/router";
import EditFormComponent from "./edit/[id]";


export default function EditEvent() {
    const router = useRouter();

    const { mutate } = trpc.event.edit.useMutation({
        onSuccess: (data) => {
            router.push(`/events/${data.id}`);
        },
    });

    const handleSubmit = (data: EditEventSchema) => {
        console.log(data);

        // mutate(data);
    };

    return <EditFormComponent onSubmit={handleSubmit} />;

}
