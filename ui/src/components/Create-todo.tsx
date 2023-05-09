import { TodoCategory } from "../types/todo-types";

type SelectOptions = React.OptionHTMLAttributes<TodoCategory>

const CreateTodo = () => {

    return(
        <>
         {/* Input for category, Input for title date will be auto */}
         <input type="text" />
         <select >
            <option value="personal">Personal</option>
            <option value="Duty">Duty</option>
         </select>
        </>
    )
};

export default CreateTodo;