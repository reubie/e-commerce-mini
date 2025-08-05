'use client';

import { Box, CircularProgress, Typography } from '@mui/material';

// Loading spinner props
interface LoadingSpinnerProps {
  message?: string;
  size?: number;
}

// Loading spinner
export const LoadingSpinner = ({ message = 'Loading...', size = 40 }: LoadingSpinnerProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <CircularProgress size={size} />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        {message}
      </Typography>
    </Box>
  );
}; 