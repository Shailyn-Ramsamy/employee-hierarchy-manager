/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      firsName
      lastName
      birthDate
      employeeNumber
      salary
      role
      reportingLineManager
      avatar
      noManager
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firsName
        lastName
        birthDate
        employeeNumber
        salary
        role
        reportingLineManager
        avatar
        noManager
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
