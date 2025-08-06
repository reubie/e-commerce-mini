'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Error, Refresh } from '@mui/icons-material';

// Error boundary props
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

// Error boundary state
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

// Error boundary component
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Container maxWidth="md">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '50vh',
              textAlign: 'center',
              py: 4,
            }}
          >
            <Error sx={{ fontSize: 64, color: 'error.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Something went wrong
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We encountered an unexpected error. Please try refreshing the page.
            </Typography>
            <Button
              variant="contained"
              startIcon={<Refresh />}
              onClick={this.handleRetry}
              sx={{ mt: 2 }}
            >
              Try Again
            </Button>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
} 