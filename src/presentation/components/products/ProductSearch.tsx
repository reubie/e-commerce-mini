'use client';

import { useState } from 'react';
import { TextField, Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { Search, Clear } from '@mui/icons-material';

// Search filters interface
interface SearchFilters {
  search: string;
  category: string;
  minPrice: string;
  maxPrice: string;
}

// Product search props
interface ProductSearchProps {
  onFiltersChange: (filters: SearchFilters) => void;
}

// Product search
export const ProductSearch = ({ onFiltersChange }: ProductSearchProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    search: '',
    category: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleFilterChange = (field: keyof SearchFilters, value: string) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      search: '',
      category: '',
      minPrice: '',
      maxPrice: '',
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <Box sx={{ mb: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          label="Search products"
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          size="small"
          sx={{ minWidth: 200 }}
        />
        
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={filters.category}
            label="Category"
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="clothing">Clothing</MenuItem>
            <MenuItem value="home">Home</MenuItem>
            <MenuItem value="accessories">Accessories</MenuItem>
          </Select>
        </FormControl>
        
        <TextField
          label="Min Price"
          type="number"
          value={filters.minPrice}
          onChange={(e) => handleFilterChange('minPrice', e.target.value)}
          size="small"
          sx={{ width: 100 }}
        />
        
        <TextField
          label="Max Price"
          type="number"
          value={filters.maxPrice}
          onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
          size="small"
          sx={{ width: 100 }}
        />
        
        <Button
          variant="outlined"
          startIcon={<Clear />}
          onClick={handleClearFilters}
          size="small"
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
}; 