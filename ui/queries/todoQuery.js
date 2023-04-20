import {gql} from '@apollo/client';

const GET_ALL_TODOS = gql`
    query GetTodos {
        todos {
            title
            category
            creationDate
        }
    }
`;
/**
 * 
 * @param {Array} queries
 * @returns GraphQL Query 
 * 
 */
const todoQueryCreator = (queries) => {
    const query = gql`
        query GetTodos {
            todos {
                ${queries.map(query => `${query}\n`)}
            }
        }
    `;
    
    return query;
};

export {GET_ALL_TODOS, todoQueryCreator};