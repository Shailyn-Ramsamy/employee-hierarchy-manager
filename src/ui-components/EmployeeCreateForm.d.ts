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
    firsName?: string;
    lastName?: string;
    birthDate?: string;
    employeeNumber?: string;
    salary?: number;
    reportingLineManager?: string;
    avatar?: string;
    noManager?: boolean;
};
export declare type EmployeeCreateFormValidationValues = {
    firsName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    birthDate?: ValidationFunction<string>;
    employeeNumber?: ValidationFunction<string>;
    salary?: ValidationFunction<number>;
    reportingLineManager?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    noManager?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeeCreateFormOverridesProps = {
    EmployeeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firsName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    birthDate?: PrimitiveOverrideProps<TextFieldProps>;
    employeeNumber?: PrimitiveOverrideProps<TextFieldProps>;
    salary?: PrimitiveOverrideProps<TextFieldProps>;
    reportingLineManager?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    noManager?: PrimitiveOverrideProps<SwitchFieldProps>;
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
