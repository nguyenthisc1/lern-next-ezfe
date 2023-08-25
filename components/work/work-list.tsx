import { Work } from '@/models';
import { Stack } from '@mui/system';
import { WorkCard } from './word-card';
export interface WorkListProps {
    workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
    if (workList.length === 0) return null;
    return (
        <Stack direction="column" spacing={4}>
            {workList.map((work) => (
                <WorkCard work={work} key={work.id} />
            ))}
        </Stack>
    );
}
