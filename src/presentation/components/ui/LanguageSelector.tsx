'use client';

import { useState } from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Language } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../../infrastructure/store/slices/userPreferencesSlice';
import { RootState } from '../../../infrastructure/store';

// Language options
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

// Language selector component
export const LanguageSelector = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => (state.userPreferences as any).language);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageCode: 'en' | 'es' | 'fr') => {
    dispatch(setLanguage(languageCode));
    handleClose();
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
      >
        <Language />
        <Typography variant="caption" sx={{ ml: 0.5 }}>
          {currentLang?.flag}
        </Typography>
      </IconButton>
      
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code as 'en' | 'es' | 'fr')}
            selected={language.code === currentLanguage}
          >
            <Typography sx={{ mr: 1 }}>{language.flag}</Typography>
            {language.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}; 