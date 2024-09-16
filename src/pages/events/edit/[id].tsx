import { useRouter } from "next/router";

export const EditFormComponent = () => {

    const { query } = useRouter();
    const id = Number(query.id);

    return <div>забабахать здесь форму с данными по этому {id}. и по кночке "Сохранить", чтобы обновить</div>;
}

export default EditFormComponent
