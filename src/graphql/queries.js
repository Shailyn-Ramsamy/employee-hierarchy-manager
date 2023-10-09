/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
      id
      name
      order
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        order
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      firsName
      lastName
      birthDate
      employeeNumber
      salary
      role {
        id
        name
        order
        createdAt
        updatedAt
        __typename
      }
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
