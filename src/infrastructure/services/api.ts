import { Product, ApiResponse, ProductFilters } from '../../domain/types';

// API base URL
const API_BASE_URL = 'http://localhost:3001';

// Generic API request helper
async function apiRequest<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      data,
      success: true,
    };
  } catch (error) {
    console.error('API request failed:', error);
    return {
      data: null as T,
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

// Product API methods
export const productApi = {
  // Get all products with optional filtering
  async getProducts(filters?: ProductFilters): Promise<ApiResponse<Product[]>> {
    let endpoint = '/products';
    const params = new URLSearchParams();
    
    if (filters) {
      if (filters.category) params.append('category', filters.category);
      if (filters.minPrice) params.append('price_gte', filters.minPrice.toString());
      if (filters.maxPrice) params.append('price_lte', filters.maxPrice.toString());
      if (filters.rating) params.append('rating_gte', filters.rating.toString());
      if (filters.search) params.append('q', filters.search);
    }
    
    if (params.toString()) {
      endpoint += `?${params.toString()}`;
    }
    
    return apiRequest<Product[]>(endpoint);
  },

  // Get single product by ID
  async getProduct(id: number): Promise<ApiResponse<Product>> {
    return apiRequest<Product>(`/products/${id}`);
  },

  // Get products by category
  async getProductsByCategory(category: string): Promise<ApiResponse<Product[]>> {
    return apiRequest<Product[]>(`/products?category=${category}`);
  },

  // Search products
  async searchProducts(query: string): Promise<ApiResponse<Product[]>> {
    return apiRequest<Product[]>(`/products?q=${encodeURIComponent(query)}`);
  },
};

// Cart API methods (for persistence)
export const cartApi = {
  // Get cart items
  async getCart(): Promise<ApiResponse<any[]>> {
    return apiRequest<any[]>('/cart');
  },

  // Add item to cart
  async addToCart(item: any): Promise<ApiResponse<any>> {
    return apiRequest<any>('/cart', {
      method: 'POST',
      body: JSON.stringify(item),
    });
  },

  // Remove item from cart
  async removeFromCart(id: number): Promise<ApiResponse<void>> {
    return apiRequest<void>(`/cart/${id}`, {
      method: 'DELETE',
    });
  },

  // Clear cart
  async clearCart(): Promise<ApiResponse<void>> {
    return apiRequest<void>('/cart', {
      method: 'DELETE',
    });
  },
};

// Favorites API methods
export const favoritesApi = {
  // Get favorites
  async getFavorites(): Promise<ApiResponse<Product[]>> {
    return apiRequest<Product[]>('/favorites');
  },

  // Add to favorites
  async addToFavorites(product: Product): Promise<ApiResponse<Product>> {
    return apiRequest<Product>('/favorites', {
      method: 'POST',
      body: JSON.stringify(product),
    });
  },

  // Remove from favorites
  async removeFromFavorites(id: number): Promise<ApiResponse<void>> {
    return apiRequest<void>(`/favorites/${id}`, {
      method: 'DELETE',
    });
  },
}; 