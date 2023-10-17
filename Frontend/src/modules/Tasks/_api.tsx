import gql from 'graphql-tag';

// Define your GraphQL query
export const GET_ALL_TASKS = gql`
  query {
    getAllBusinessTasks {
      subject
      description
      deadline
      importance
      assignee
      state
      notes
    }
  }
`;
