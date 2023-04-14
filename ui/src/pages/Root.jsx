import React, {useEffect, useState} from 'react';
import Todo from '../components/Todo';
import { useQuery, gql } from '@apollo/client';
import {GET_ALL_TODOS} from '../../queries/todoQuery';

const Root = () => {
    const {loading, error, data} = useQuery(GET_ALL_TODOS);

    return(
        <>
            {
                data.hasOwnProperty('todos') && data.todos.length 
                ?
                    data.todos.map(i => {
                        return(
                            <p>{i.title}</p>
                        )
                    })
                : null
            }
        </>
    )
}

export default Root;