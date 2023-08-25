import { LoginPayload } from '@/models';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, CircularProgress, IconButton, InputAdornment, Stack } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { InputField } from '../form';

export interface ILoginFormProps {
    onSubmit: (payload: LoginPayload) => void;
}

export function LoginForm({ onSubmit }: ILoginFormProps) {
    const schema = yup
        .object()
        .shape({
            username: yup.string().required('Please enter username').min(4, 'Username too short'),
            password: yup.string().required('Please enter password').min(6, 'Username too short'),
        })
        .required();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<LoginPayload>({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    async function handleLoginSubmit(payload: LoginPayload) {
        console.log('login form submitted', payload);
        await onSubmit?.(payload);
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
            <Stack spacing={2}>
                <InputField name="username" label="Username" control={control} />
                <InputField
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    label="Password"
                    control={control}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword((show) => !show)} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button disabled={isSubmitting} startIcon={isSubmitting ? <CircularProgress size={20} /> : null} type="submit" variant="contained">
                    Login
                </Button>
            </Stack>
        </Box>
    );
}
