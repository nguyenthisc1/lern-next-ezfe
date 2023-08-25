import * as React from "react";
import useSWR from "swr";

export interface IStudentDetailProps {
    studentId: string;
}

export function StudentDetail({ studentId }: IStudentDetailProps) {
    const { data, error, mutate, isValidating } = useSWR(
        `/students/${studentId}`,
        {
            revalidateOnFocus: false,
            dedupingInterval: 60 * 60 * 1000,
        }
    );

    function handleMutate() {
        mutate({name: 'thi nguyn'}, true)
    }

    return <div>Name: {data?.name || "--"} <button onClick={handleMutate}>Mutate</button></div>;
}
