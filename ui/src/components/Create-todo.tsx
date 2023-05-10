import { TodoCategory } from "../types/todo-types";

const optionValues: TodoCategory[] = ['Duty', 'Personal'];

const submitButtonStyle = {
    backgroundColor: '#bada55'
};

const CreateTodo = () => {

    return(
        <>
         {/* Input for category, Input for title date will be auto */}
         <form onSubmit={(e) => {
            e.preventDefault();
         }}>
            <input type="text" />
            <select >
                {optionValues.map((value, idx) => <option key={`select-category-${idx}`} value={value}>{value}</option>)}
            </select>
            <button type="submit" style={submitButtonStyle}>Oluştur</button>
         </form>
        </>
    )
};

export default CreateTodo;