# E-Commerce Mini App

A responsive e-commerce web application built with Next.js, featuring clean architecture, performance optimization, and modern UI/UX.

## Features

- **Product Catalog**: Browse and search products with filtering
- **Product Details**: Product info with images and features
- **Shopping Cart**: Add, remove, and update cart items
- **Favorites**: Save and manage favorite products
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with Material-UI components
- **State Management**: Redux Toolkit for global state
- **Data Fetching**: React Query for efficient API calls

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI)
- **State Management**: Redux Toolkit
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
    └── providers/         # App providers
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

## Development Notes

- Uses Next.js App Router for modern routing
- Redux Toolkit for predictable state management
- React Query for efficient data fetching and caching
- Material-UI for consistent, accessible components
- JSON Server for mock API endpoints
