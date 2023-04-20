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

export {GET_ALL_TODOS};