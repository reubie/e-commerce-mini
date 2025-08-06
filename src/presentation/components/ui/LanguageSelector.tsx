'use client';

import { useState } from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Language } from '@mui/icons-material';
import { useLanguage } from '../../providers/LanguageProvider';

// Languages
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

// Language selector
export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchor(null);
  };

  const handleLanguageChange = (langCode: 'en' | 'es' | 'fr') => {
    setLanguage(langCode);
    handleClose();
  };

  const selectedLang = languages.find(lang => lang.code === language);

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
      >
        <Language />
        <Typography variant="caption" sx={{ ml: 0.5 }}>
          {selectedLang?.flag}
        </Typography>
      </IconButton>
      
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
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
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code as 'en' | 'es' | 'fr')}
            selected={lang.code === language}
          >
            <Typography sx={{ mr: 1 }}>{lang.flag}</Typography>
            {lang.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}; 