# E-Commerce Mini App

A responsive e-commerce web app built with Next.js. Features clean architecture, performance optimization, and modern UI/UX.

## What it does

- **Product Catalog**: Browse and search products with filtering
- **Product Details**: View product info with images and features
- **Shopping Cart**: Add, remove, and update cart items
- **Favorites**: Save and manage favorite products
- **Responsive Design**: Works on mobile, tablet, desktop
- **Modern UI**: Built with Material-UI components
- **State Management**: Redux Toolkit for global state
- **Data Fetching**: React Query for efficient API calls
- **Multi-language Support**: English, Spanish, and French
- **Dark/Light Mode**: Theme toggle functionality
- **Error Boundaries**: Graceful error handling

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI)
- **State Management**: Redux Toolkit + React Context
- **Data Fetching**: TanStack Query (React Query)
- **Styling**: MUI System + CSS
- **Mock Backend**: JSON Server

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── domain/                 # Domain types and interfaces
├── infrastructure/         # External dependencies
│   ├── services/          # API services
│   ├── store/             # Redux store and slices
│   └── query/             # React Query hooks
└── presentation/          # UI components
    ├── components/        # Reusable components
    ├── providers/         # App providers
    └── hooks/            # Custom hooks
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/reubie/e-commerce-mini.git
cd e-commerce-mini
```

2. Install dependencies:
```bash
npm install
```

3. Start the JSON server (mock backend):
```bash
npm run server
```

4. In a new terminal, start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run server` - Start JSON server (mock backend)

## Architecture

This project follows clean architecture principles:

- **Domain Layer**: Core business logic and types
- **Infrastructure Layer**: External dependencies (API, state management)
- **Presentation Layer**: UI components and user interface

### Key Design Patterns

- **Atomic Design**: Component structure follows atomic design principles
- **SOLID Principles**: Clean, maintainable, and extensible code
- **Separation of Concerns**: Clear boundaries between layers
- **Type Safety**: Full TypeScript implementation

## Features Overview

### Main Page
- Product grid with search and filtering
- Add to cart and favorite functionality
- Responsive design for all screen sizes
- Multi-language support

### Product Details
- Detailed product information
- Image gallery
- Add to cart and favorite actions
- Product features and specifications

### Shopping Cart
- Cart item management
- Quantity controls
- Order summary with tax calculation
- Clear cart functionality

### Favorites
- Saved products list
- Add/remove from favorites
- Clear all favorites

### Additional Features
- **Language Switching**: Toggle between English, Spanish, and French
- **Theme Toggle**: Switch between light and dark modes
- **Error Boundaries**: Graceful error handling throughout the app
- **Loading States**: Smooth loading indicators
- **Responsive Design**: Works on mobile, tablet, desktop, and large screens

## Testing the Application

1. **Start both servers**:
   ```bash
   # Terminal 1: Start JSON server
   npm run server
   
   # Terminal 2: Start Next.js dev server
   npm run dev
   ```

2. **Test Responsiveness**:
   - Open browser dev tools
   - Test on mobile (375px), tablet (768px), desktop (1024px), and large screens (1440px+)

3. **Test Features**:
   - Browse products on main page
   - Search and filter products
   - Add items to cart
   - Add items to favorites
   - View product details
   - Test language switching (header language selector)
   - Test theme toggle (header theme button)

4. **Test CRUD Operations**:
   - Add/remove from cart
   - Update quantities
   - Add/remove from favorites
   - Clear cart/favorites

## Development Notes

- Uses Next.js App Router for modern routing
- Redux Toolkit for predictable state management
- React Query for efficient data fetching and caching
- Material-UI for consistent, accessible components
- JSON Server for mock API endpoints
- React Context for theme and language state
- Error boundaries for graceful error handling
- Mobile-first responsive design

## API Endpoints

The JSON server provides the following endpoints:
- `GET /products` - Get all products
- `GET /products/:id` - Get specific product
- `GET /cart` - Get cart items
- `POST /cart` - Add item to cart
- `PUT /cart/:id` - Update cart item
- `DELETE /cart/:id` - Remove from cart
- `GET /favorites` - Get favorites
- `POST /favorites` - Add to favorites
- `DELETE /favorites/:id` - Remove from favorites
