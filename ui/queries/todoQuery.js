import {gql} from '@apollo/client';

const GET_ALL_TODOS = gql`
    query GetTodos {
        todos {
            title
        }
    }
`;

export default GET_ALL_TODOS;