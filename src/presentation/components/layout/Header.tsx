'use client';

import { AppBar, Toolbar, Typography, Badge, IconButton, Box } from '@mui/material';
import { ShoppingCart, Favorite, Menu } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../infrastructure/store';
import { LanguageSelector } from '../ui/LanguageSelector';
import { ThemeToggle } from '../ui/ThemeToggle';
import Link from 'next/link';

// Header component
export const Header = () => {
  const cartItemCount = useSelector((state: RootState) => state.cart.itemCount);
  const favoritesCount = useSelector((state: RootState) => (state.favorites as any).count);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            E-Commerce Mini
          </Link>
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <LanguageSelector />
          <ThemeToggle />
          
          <Link href="/favorites">
            <IconButton color="inherit">
              <Badge badgeContent={favoritesCount} color="error">
                <Favorite />
              </Badge>
            </IconButton>
          </Link>
          
          <Link href="/cart">
            <IconButton color="inherit">
              <Badge badgeContent={cartItemCount} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
          
          <IconButton color="inherit">
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}; 