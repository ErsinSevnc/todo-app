export type TodoCategory = 'Personal' | 'Duty';
export type TodoType = {
    title: string;
    completed: boolean;
    creationDate: string;
    category: TodoCategory
};