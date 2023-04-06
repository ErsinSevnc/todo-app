interface ITodo {
    title: String,
    completed: Boolean,
    creationDate: String,
    category: TodoCaregories
};

type TodoCaregories = "personal" | "duty";

export default ITodo;