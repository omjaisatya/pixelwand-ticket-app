# 🎫 PixelWand Ticket Booking App

A React Native ticket booking application built with Expo and TypeScript, featuring event browsing, ticket booking, and persistent storage.

## 🚀 Features

- Browse events with images, dates, and pricing
- Book tickets with quantity selection (1-10)
- Persistent booking storage using AsyncStorage
- Cancel bookings functionality
- Stack and Tab navigation
- TypeScript for type safety

## 🛠️ Tech Stack

- **Expo** with TypeScript template
- **React Navigation** (Stack + Bottom Tabs)
- **Context API** with useReducer for state management
- **AsyncStorage** for data persistence
- **Custom hooks** for storage operations

## 📱 Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npx expo start`

## 🏗️ Architecture

- **Components**: Reusable UI components
- **Screens**: Main application screens
- **Context**: Global state management
- **Hooks**: Custom hooks for storage and logic
- **Services**: API integration layer
- **Types**: TypeScript type definitions

## 🎯 Key Decisions

- Used Context API over Redux for simpler state management
- Implemented fallback data for offline functionality
- Created reusable components for better maintainability
- Used TypeScript for better developer experience and type safety
