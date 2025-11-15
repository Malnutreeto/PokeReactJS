# PokéReactJS

A modern React application that displays all 1025 Pokémon with real-time search functionality.

## 💻 Getting Started (Local Setup)

Follow these steps to get the PokéReactJS application up and running on your local machine.

### Prerequisites

* **Node.js**: Ensure you have a recent version of Node.js installed.
* **npm** or **yarn**: A package manager for installing dependencies.

### Installation and Run

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/malnutreeto/PokeReactJS.git](https://github.com/malnutreeto/PokeReactJS.git)
    cd PokeReactJS
    ```

2.  **Install dependencies:**
    ```bash
    npm install 
    # OR
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    # OR
    yarn start
    ```

The application should now be running in your browser, typically at `http://localhost:3000`.

## Features

- **Complete Pokémon Database**: Displays all 1025 Pokémon from the API
- **Real-time Search**: Filter Pokémon by name or ID
- **Responsive Design**: Works on desktop and mobile devices
- **Fast Loading**: Optimized batch loading with progressive display
- **Clean UI**: Built with React Bootstrap components

## 🛠️ Technologies Used

- **Frontend**: React 18, React Bootstrap
- **HTTP Client**: Axios
- **State Management**: React Hooks (useState, useEffect, useMemo, useRef)
- **API**: [PokéAPI](https://pokeapi.co/)
- **Deployment**: GitHub Pages

## 🔧 Technical Highlights

### ⚡ Performance Optimizations
- **Batch Data Loading**: Loads Pokémon in batches of 100 for optimal performance
- **Progressive Rendering**: Displays initial 50 Pokémon quickly while loading the rest in background
- **Session Caching**: Uses React `useRef` hook for in-memory caching across sessions
- **Memoized Search**: Implements `useMemo` for efficient real-time filtering without unnecessary re-renders

### 🎯 State Management
- **React Hooks**: Utilizes `useState` for local component state
- **Effect Management**: `useEffect` with proper dependency arrays for side effects
- **Reference Persistence**: `useRef` for mutable values that persist across renders

### 🔍 Search & Filtering
- **Real-time Search**: Instant filtering as user types
- **Multi-field Search**: Search by Pokémon name (case-insensitive) or ID
- **Optimized Filtering**: Efficient array filtering with memoization

### 🛡️ Error Handling & Reliability
- **API Error Handling**: Comprehensive error handling for network requests
- **Graceful Degradation**: App remains functional even if some Pokémon fail to load
- **Loading States**: Clear loading indicators and progressive content display

### 📱 Responsive Design
- **Bootstrap Grid**: Responsive layout that adapts to all screen sizes
- **Mobile-First**: Optimized for mobile devices with touch-friendly interface
- **Flexible Components**: Cards and layout that work on desktop, tablet, and mobile

### 🔄 Data Flow Architecture
- **Component Composition**: Modular component structure with clear data flow
- **Props Management**: Efficient passing of data between parent and child components
- **State Lifting**: Centralized state management in main component

### 🌐 Deployment & Build
- **GitHub Pages**: Automated deployment via GitHub Actions
- **Production Build**: Optimized React production build with minification
- **Asset Optimization**: Efficient handling of static assets and dependencies
