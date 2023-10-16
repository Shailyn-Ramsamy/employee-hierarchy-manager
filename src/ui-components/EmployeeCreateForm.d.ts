/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmployeeCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    employeeNumber?: string;
    salary?: number;
    role?: string;
    reportingLineManager?: string;
    avatar?: string;
    noManager?: boolean;
    email?: string;
};
export declare type EmployeeCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    birthDate?: ValidationFunction<string>;
    employeeNumber?: ValidationFunction<string>;
    salary?: ValidationFunction<number>;
    role?: ValidationFunction<string>;
    reportingLineManager?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    noManager?: ValidationFunction<boolean>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeeCreateFormOverridesProps = {
    EmployeeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    birthDate?: PrimitiveOverrideProps<TextFieldProps>;
    employeeNumber?: PrimitiveOverrideProps<TextFieldProps>;
    salary?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<TextFieldProps>;
    reportingLineManager?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    noManager?: PrimitiveOverrideProps<SwitchFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmployeeCreateFormProps = React.PropsWithChildren<{
    overrides?: EmployeeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmployeeCreateFormInputValues) => EmployeeCreateFormInputValues;
    onSuccess?: (fields: EmployeeCreateFormInputValues) => void;
    onError?: (fields: EmployeeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmployeeCreateFormInputValues) => EmployeeCreateFormInputValues;
    onValidate?: EmployeeCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmployeeCreateForm(props: EmployeeCreateFormProps): React.ReactElement;
