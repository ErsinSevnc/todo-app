import { TodoCategory } from "../types/todo-types";

const todoWrapperStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '1px 1px 5px 3px rgba(0, 0, 0, 0.05)',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '64px'
};

const todoTopStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '32px',
    lineHeight: '24px',
    fontSize: '16px'
};

const todoBottomStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between'
};

const categoryStyle: React.CSSProperties = {
    fontWeight: 'bold',
    textTransform: 'capitalize'
};

const titleStyle: React.CSSProperties = {
    fontWeight: 'bold'
};

interface Todo {
    todo: {
        title: string;
        completed: boolean;
        creationDate: string;
        category: TodoCategory
    },
    onChange?: React.ChangeEventHandler
};

const Todo = ({todo} : Todo) => {

    return(
        <>
            <div className='todo-wrapper' style={todoWrapperStyle}>
                <div className="todo-top" style={todoTopStyle}>
                    <div className="title" style={titleStyle}>{todo.title}</div>
                    <div className="todo-category" style={categoryStyle}>{todo.category}</div>
                </div>
                <div className="todo-bottom" style={todoBottomStyle}>
                    <div className="todo-time">{new Date(Number(todo.creationDate)).toDateString()}</div>
                    <input type="checkbox"/>
                </div>
            </div>
        </>
    )
}

export default Todo;
