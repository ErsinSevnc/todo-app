import React, {useEffect, useState} from 'react';
import Todo from '../components/Todo';
import { useQuery, gql } from '@apollo/client';
import {GET_ALL_TODOS, todoQueryCreator} from '../../queries/todoQuery';
import Actions from '../components/Actions';


const todoContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    flex: '2'
};

const layoutStyle = {
    display: 'flex',
};

const actionContainer = {
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

    if(data) {
        return(
            <>
                <div className="layout-container" style={layoutStyle}>
                    <div className='todo-container' style={todoContainerStyle}>
                        {data.todos.map((todo, idx) => <Todo key={`todo-${idx}`} todo={todo}/>)}
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