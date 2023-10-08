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
export declare type EmployeeUpdateFormInputValues = {
    firsName?: string;
    lastName?: string;
    birthDate?: string;
    employeeNumber?: string;
    salary?: number;
    role?: string;
    reportingLineManager?: string;
    avatar?: string;
    noManager?: boolean;
};
export declare type EmployeeUpdateFormValidationValues = {
    firsName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    birthDate?: ValidationFunction<string>;
    employeeNumber?: ValidationFunction<string>;
    salary?: ValidationFunction<number>;
    role?: ValidationFunction<string>;
    reportingLineManager?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    noManager?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeeUpdateFormOverridesProps = {
    EmployeeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firsName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    birthDate?: PrimitiveOverrideProps<TextFieldProps>;
    employeeNumber?: PrimitiveOverrideProps<TextFieldProps>;
    salary?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<TextFieldProps>;
    reportingLineManager?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    noManager?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EmployeeUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmployeeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    employee?: any;
    onSubmit?: (fields: EmployeeUpdateFormInputValues) => EmployeeUpdateFormInputValues;
    onSuccess?: (fields: EmployeeUpdateFormInputValues) => void;
    onError?: (fields: EmployeeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmployeeUpdateFormInputValues) => EmployeeUpdateFormInputValues;
    onValidate?: EmployeeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmployeeUpdateForm(props: EmployeeUpdateFormProps): React.ReactElement;
