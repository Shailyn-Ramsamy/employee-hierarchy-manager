/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RoleCreateFormInputValues = {
    name?: string;
    order?: number;
};
export declare type RoleCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    order?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoleCreateFormOverridesProps = {
    RoleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    order?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoleCreateFormProps = React.PropsWithChildren<{
    overrides?: RoleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RoleCreateFormInputValues) => RoleCreateFormInputValues;
    onSuccess?: (fields: RoleCreateFormInputValues) => void;
    onError?: (fields: RoleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoleCreateFormInputValues) => RoleCreateFormInputValues;
    onValidate?: RoleCreateFormValidationValues;
} & React.CSSProperties>;
export default function RoleCreateForm(props: RoleCreateFormProps): React.ReactElement;
