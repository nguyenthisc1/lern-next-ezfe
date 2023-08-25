import { Box, Input, TextField, TextFieldProps } from '@mui/material';
import * as React from 'react';
import { Control, useController } from 'react-hook-form';

export type IInputFieldProps = TextFieldProps & {
    name: string;
    control: Control<any>;
};

export function InputField({ name, control, onChange: externalOnChange, onBlur: externaOnBlur, value: externalValue, ref: externalRef, ...rest }: IInputFieldProps) {
    const {
        field: { onBlur, onChange, value, ref },
        fieldState: { error },
    } = useController({ name, control });

    return <TextField name={name} value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} error={!!error} helperText={error?.message} {...rest} />;
}
