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
    firsName: "",
    lastName: "",
    birthDate: "",
    employeeNumber: "",
    salary: "",
    reportingLineManager: "",
    avatar: "",
    noManager: false,
  };
  const [firsName, setFirsName] = React.useState(initialValues.firsName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [birthDate, setBirthDate] = React.useState(initialValues.birthDate);
  const [employeeNumber, setEmployeeNumber] = React.useState(
    initialValues.employeeNumber
  );
  const [salary, setSalary] = React.useState(initialValues.salary);
  const [reportingLineManager, setReportingLineManager] = React.useState(
    initialValues.reportingLineManager
  );
  const [avatar, setAvatar] = React.useState(initialValues.avatar);
  const [noManager, setNoManager] = React.useState(initialValues.noManager);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirsName(initialValues.firsName);
    setLastName(initialValues.lastName);
    setBirthDate(initialValues.birthDate);
    setEmployeeNumber(initialValues.employeeNumber);
    setSalary(initialValues.salary);
    setReportingLineManager(initialValues.reportingLineManager);
    setAvatar(initialValues.avatar);
    setNoManager(initialValues.noManager);
    setErrors({});
  };
  const validations = {
    firsName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    birthDate: [{ type: "Required" }],
    employeeNumber: [{ type: "Required" }],
    salary: [{ type: "Required" }],
    reportingLineManager: [],
    avatar: [],
    noManager: [],
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
          firsName,
          lastName,
          birthDate,
          employeeNumber,
          salary,
          reportingLineManager,
          avatar,
          noManager,
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
        label="Firs name"
        isRequired={true}
        isReadOnly={false}
        value={firsName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firsName: value,
              lastName,
              birthDate,
              employeeNumber,
              salary,
              reportingLineManager,
              avatar,
              noManager,
            };
            const result = onChange(modelFields);
            value = result?.firsName ?? value;
          }
          if (errors.firsName?.hasError) {
            runValidationTasks("firsName", value);
          }
          setFirsName(value);
        }}
        onBlur={() => runValidationTasks("firsName", firsName)}
        errorMessage={errors.firsName?.errorMessage}
        hasError={errors.firsName?.hasError}
        {...getOverrideProps(overrides, "firsName")}
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
              firsName,
              lastName: value,
              birthDate,
              employeeNumber,
              salary,
              reportingLineManager,
              avatar,
              noManager,
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
              firsName,
              lastName,
              birthDate: value,
              employeeNumber,
              salary,
              reportingLineManager,
              avatar,
              noManager,
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
              firsName,
              lastName,
              birthDate,
              employeeNumber: value,
              salary,
              reportingLineManager,
              avatar,
              noManager,
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
              firsName,
              lastName,
              birthDate,
              employeeNumber,
              salary: value,
              reportingLineManager,
              avatar,
              noManager,
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
        label="Reporting line manager"
        isRequired={false}
        isReadOnly={false}
        value={reportingLineManager}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firsName,
              lastName,
              birthDate,
              employeeNumber,
              salary,
              reportingLineManager: value,
              avatar,
              noManager,
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
              firsName,
              lastName,
              birthDate,
              employeeNumber,
              salary,
              reportingLineManager,
              avatar: value,
              noManager,
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
              firsName,
              lastName,
              birthDate,
              employeeNumber,
              salary,
              reportingLineManager,
              avatar,
              noManager: value,
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
