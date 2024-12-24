import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Grid, Box, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const MyForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Form submit handler
    const onSubmit = (data) => {
        console.log('Form Submitted:', data);
        reset(); // Reset form after submission
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, padding: 2 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    {/* Name Field */}
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            {...register('name', { required: 'Name is required' })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                    </Grid>

                    {/* Email Field */}
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Please enter a valid email',
                                },
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    </Grid>

                    {/* Password Field */}
                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined" error={!!errors.password}>
                            <InputLabel>Password</InputLabel>
                            <Input
                                type="password"
                                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                            />
                            <FormHelperText>{errors.password?.message}</FormHelperText>
                        </FormControl>
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default MyForm;
