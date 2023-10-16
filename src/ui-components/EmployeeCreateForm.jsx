/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { createEmployee } from "../graphql/mutations";
export default function EmployeeCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstName: "",
    lastName: "",
    birthDate: "",
    employeeNumber: "",
    salary: "",
    role: "",
    reportingLineManager: "",
    avatar: "",
    noManager: false,
    email: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [birthDate, setBirthDate] = React.useState(initialValues.birthDate);
  const [employeeNumber, setEmployeeNumber] = React.useState(
    initialValues.employeeNumber
  );
  const [salary, setSalary] = React.useState(initialValues.salary);
  const [role, setRole] = React.useState(initialValues.role);
  const [reportingLineManager, setReportingLineManager] = React.useState(
    initialValues.reportingLineManager
  );
  const [avatar, setAvatar] = React.useState(initialValues.avatar);
  const [noManager, setNoManager] = React.useState(initialValues.noManager);
  const [email, setEmail] = React.useState(initialValues.email);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setBirthDate(initialValues.birthDate);
    setEmployeeNumber(initialValues.employeeNumber);
    setSalary(initialValues.salary);
    setRole(initialValues.role);
    setReportingLineManager(initialValues.reportingLineManager);
    setAvatar(initialValues.avatar);
    setNoManager(initialValues.noManager);
    setEmail(initialValues.email);
    setErrors({});
  };
  const validations = {
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    birthDate: [{ type: "Required" }],
    employeeNumber: [{ type: "Required" }],
    salary: [{ type: "Required" }],
    role: [{ type: "Required" }],
    reportingLineManager: [],
    avatar: [],
    noManager: [],
    email: [{ type: "Required" }, { type: "Email" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          firstName,
          lastName,
          birthDate,
          employeeNumber,
          salary,
          role,
          reportingLineManager,
          avatar,
          noManager,
          email,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createEmployee,
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EmployeeCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              birthDate,
              employeeNumber,
              salary,
              role,
              reportingLineManager,
              avatar,
              noManager,
              email,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              birthDate,
              employeeNumber,
              salary,
              role,
              reportingLineManager,
              avatar,
              noManager,
              email,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Birth date"
        isRequired={true}
        isReadOnly={false}
        value={birthDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              birthDate: value,
              employeeNumber,
              salary,
              role,
              reportingLineManager,
              avatar,
              noManager,
              email,
            };
            const result = onChange(modelFields);
            value = result?.birthDate ?? value;
          }
          if (errors.birthDate?.hasError) {
            runValidationTasks("birthDate", value);
          }
          setBirthDate(value);
        }}
        onBlur={() => runValidationTasks("birthDate", birthDate)}
        errorMessage={errors.birthDate?.errorMessage}
        hasError={errors.birthDate?.hasError}
        {...getOverrideProps(overrides, "birthDate")}
      ></TextField>
      <TextField
        label="Employee number"
        isRequired={true}
        isReadOnly={false}
        value={employeeNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              birthDate,
              employeeNumber: value,
              salary,
              role,
              reportingLineManager,
              avatar,
              noManager,
              email,
            };
            const result = onChange(modelFields);
            value = result?.employeeNumber ?? value;
          }
          if (errors.employeeNumber?.hasError) {
            runValidationTasks("employeeNumber", value);
          }
          setEmployeeNumber(value);
        }}
        onBlur={() => runValidationTasks("employeeNumber", employeeNumber)}
        errorMessage={errors.employeeNumber?.errorMessage}
        hasError={errors.employeeNumber?.hasError}
        {...getOverrideProps(overrides, "employeeNumber")}
      ></TextField>
      <TextField
        label="Salary"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={salary}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              birthDate,
              employeeNumber,
              salary: value,
              role,
              reportingLineManager,
              avatar,
              noManager,
              email,
            };
            const result = onChange(modelFields);
            value = result?.salary ?? value;
          }
          if (errors.salary?.hasError) {
            runValidationTasks("salary", value);
          }
          setSalary(value);
        }}
        onBlur={() => runValidationTasks("salary", salary)}
        errorMessage={errors.salary?.errorMessage}
        hasError={errors.salary?.hasError}
        {...getOverrideProps(overrides, "salary")}
      ></TextField>
      <TextField
        label="Role"
        isRequired={true}
        isReadOnly={false}
        value={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              birthDate,
              employeeNumber,
              salary,
              role: value,
              reportingLineManager,
              avatar,
              noManager,
              email,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          if (errors.role?.hasError) {
            runValidationTasks("role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("role", role)}
        errorMessage={errors.role?.errorMessage}
        hasError={errors.role?.hasError}
        {...getOverrideProps(overrides, "role")}
      ></TextField>
      <TextField
        label="Reporting line manager"
        isRequired={false}
        isReadOnly={false}
        value={reportingLineManager}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              birthDate,
              employeeNumber,
              salary,
              role,
              reportingLineManager: value,
              avatar,
              noManager,
              email,
            };
            const result = onChange(modelFields);
            value = result?.reportingLineManager ?? value;
          }
          if (errors.reportingLineManager?.hasError) {
            runValidationTasks("reportingLineManager", value);
          }
          setReportingLineManager(value);
        }}
        onBlur={() =>
          runValidationTasks("reportingLineManager", reportingLineManager)
        }
        errorMessage={errors.reportingLineManager?.errorMessage}
        hasError={errors.reportingLineManager?.hasError}
        {...getOverrideProps(overrides, "reportingLineManager")}
      ></TextField>
      <TextField
        label="Avatar"
        isRequired={false}
        isReadOnly={false}
        value={avatar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              birthDate,
              employeeNumber,
              salary,
              role,
              reportingLineManager,
              avatar: value,
              noManager,
              email,
            };
            const result = onChange(modelFields);
            value = result?.avatar ?? value;
          }
          if (errors.avatar?.hasError) {
            runValidationTasks("avatar", value);
          }
          setAvatar(value);
        }}
        onBlur={() => runValidationTasks("avatar", avatar)}
        errorMessage={errors.avatar?.errorMessage}
        hasError={errors.avatar?.hasError}
        {...getOverrideProps(overrides, "avatar")}
      ></TextField>
      <SwitchField
        label="No manager"
        defaultChecked={false}
        isDisabled={false}
        isChecked={noManager}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              birthDate,
              employeeNumber,
              salary,
              role,
              reportingLineManager,
              avatar,
              noManager: value,
              email,
            };
            const result = onChange(modelFields);
            value = result?.noManager ?? value;
          }
          if (errors.noManager?.hasError) {
            runValidationTasks("noManager", value);
          }
          setNoManager(value);
        }}
        onBlur={() => runValidationTasks("noManager", noManager)}
        errorMessage={errors.noManager?.errorMessage}
        hasError={errors.noManager?.hasError}
        {...getOverrideProps(overrides, "noManager")}
      ></SwitchField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              birthDate,
              employeeNumber,
              salary,
              role,
              reportingLineManager,
              avatar,
              noManager,
              email: value,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
