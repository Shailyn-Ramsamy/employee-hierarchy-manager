/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
