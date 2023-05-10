import React, {useEffect, useState} from 'react';
import Todo from '../components/Todo';
import { useQuery, gql } from '@apollo/client';
import {GET_ALL_TODOS, todoQueryCreator} from '../../queries/todoQuery';
import Actions from '../components/Actions';
import CreateTodo from '../components/Create-todo';
import {TodoType} from '../types/todo-types';

const todoContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    flex: '2'
};

const actionContainer: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    flex: 1
};

const getQuery = todoQueryCreator(['title, category, creationDate']);

const Root = () => {
    const {loading, error, data} = useQuery(getQuery);

    if(loading) {
        return(
            <>
                <h1>Loading!!</h1>
            </>
        )
    };

    if(error) {
        return(
            <>
                <h1>Error!!</h1>
            </>
        )
    };

    const testChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked);  
    };

    if(data) {
        return(
            <>
                <div className="layout-container">
                    <CreateTodo />
                    <div className='todo-container' style={todoContainerStyle}>
                        {data.todos.map((todo: TodoType, idx: number) => <Todo key={`todo-${idx}`} todo={todo} onChange={testChange}/>)}
                    </div>
                    <div className="action-container" style={actionContainer}>
                        <Actions />
                    </div>
                </div>
            </>
        )
    }
}

export default Root;