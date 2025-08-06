'use client';

import { Box } from '@mui/material';
import { Header } from './Header';
import { Footer } from './Footer';
import { ErrorBoundary } from '../ui/ErrorBoundary';

// Layout props
interface LayoutProps {
  children: React.ReactNode;
}

// Main layout wrapper
export const Layout = ({ children }: LayoutProps) => {
  return (
    <ErrorBoundary>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ErrorBoundary>
  );
}; 