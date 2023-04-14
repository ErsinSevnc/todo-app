import {gql} from '@apollo/client';

const GET_ALL_TODOS = gql`
    query GetTodos {
        todos {
            title
            category
        }
    }
`;

export {GET_ALL_TODOS};