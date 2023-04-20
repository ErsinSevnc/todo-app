import React from 'react';


const todoWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '1px 1px 5px 3px rgba(0, 0, 0, 0.05)',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '64px'
};

const todoTopStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '32px',
    lineHeight: '24px',
    fontSize: '16px'
};

const categoryStyle = {
    fontWeight: 'bold',
    textTransform: 'capitalize'
};

const titleStyle = {
    fontWeight: 'bold'
};


const Todo = ({todo}) => {

    return(
        <>
            <div className='todo-wrapper' style={todoWrapperStyle}>
                <div className="todo-top" style={todoTopStyle}>
                    <div className="title" style={titleStyle}>{todo.title}</div>
                    <div className="todo-category" style={categoryStyle}>{todo.category}</div>
                </div>
                <div className="todo-bottom">
                    <div className="todo-time">{new Date(Number(todo.creationDate)).toDateString()}</div>
                </div>
            </div>
        </>
    )
}

export default Todo;
