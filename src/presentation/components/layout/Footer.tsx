'use client';

import { Box, Typography, Container } from '@mui/material';

// Footer component
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 E-Commerce Mini. Built with Next.js and MUI.
        </Typography>
      </Container>
    </Box>
  );
}; 