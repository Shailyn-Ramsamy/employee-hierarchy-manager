/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole($filter: ModelSubscriptionRoleFilterInput) {
    onCreateRole(filter: $filter) {
      id
      name
      order
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole($filter: ModelSubscriptionRoleFilterInput) {
    onUpdateRole(filter: $filter) {
      id
      name
      order
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole($filter: ModelSubscriptionRoleFilterInput) {
    onDeleteRole(filter: $filter) {
      id
      name
      order
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onCreateEmployee(filter: $filter) {
      id
      firstName
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onUpdateEmployee(filter: $filter) {
      id
      firstName
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onDeleteEmployee(filter: $filter) {
      id
      firstName
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
