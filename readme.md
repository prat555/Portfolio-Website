## Overview

This is a modern portfolio application built with React frontend and Express.js backend. The application showcases a personal portfolio for Pratyush Goutam, a Full Stack Developer, featuring sections for skills, projects, education, and contact functionality. The stack uses TypeScript throughout, shadcn/ui for components, and Tailwind CSS for styling.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **Component Structure**: Organized into pages and reusable UI components
- **Routing**: Uses wouter for lightweight client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query for API state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **API Structure**: RESTful endpoints with proper error handling
- **Middleware**: Custom logging middleware for API requests
- **Storage**: In-memory storage for development

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express routes handle requests with validation
3. **Response Handling**: Structured error handling and logging
4. **State Updates**: TanStack Query manages cache invalidation and updates

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Lightweight routing library
- **express**: Backend server framework

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking
- **tsx**: TypeScript execution for development

## API Endpoints

- **GET /api/download-resume**: Downloads the portfolio resume as PDF
- **Contact Form**: Uses Formspree for contact form submissions

## Deployment Strategy

- **Build Process**: Vite builds the frontend, esbuild bundles the server
- **Environment**: Configured for both development and production environments
- **Port Configuration**: Server runs on port 5000, mapped to external port 80

### Build Commands
- **Development**: `npm run dev` - Runs server with hot reload
- **Build**: `npm run build` - Builds both frontend and backend
- **Production**: `npm run start` - Runs production server
- **Type Check**: `npm run check` - Runs TypeScript type checking
