// Product data structure
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  stock: number;
  brand: string;
  features: string[];
}

// Cart item with quantity
export interface CartItem extends Product {
  quantity: number;
}

// User settings
export interface UserPreferences {
  language: 'en' | 'es' | 'fr';
  currency: 'USD' | 'EUR' | 'GBP';
  theme: 'light' | 'dark';
}

// API response
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Product filters
export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  search?: string;
}

// Pagination
export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
} 