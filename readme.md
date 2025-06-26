## Overview ✨

This is a full-stack portfolio application built with a modern React frontend and Express.js backend. The application showcases a personal portfolio for Pratyush Goutam, a Full Stack Developer, featuring sections for skills, projects, education, and contact functionality. The stack uses TypeScript throughout, shadcn/ui for components, Tailwind CSS for styling, and includes database integration capabilities with Drizzle ORM and PostgreSQL.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Deployment**: Configured for Replit autoscale deployment

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
- **Database Layer**: Drizzle ORM with PostgreSQL
- **API Structure**: RESTful endpoints with proper error handling
- **Middleware**: Custom logging middleware for API requests
- **Storage**: Abstract storage interface with in-memory implementation for development

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express routes handle requests with validation
3. **Database Operations**: Drizzle ORM manages database interactions
4. **Response Handling**: Structured error handling and logging
5. **State Updates**: TanStack Query manages cache invalidation and updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Database connectivity for serverless environments
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **drizzle-orm**: Type-safe database ORM
- **wouter**: Lightweight routing library

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking
- **tsx**: TypeScript execution for development

## Deployment Strategy

- **Build Process**: Vite builds the frontend, esbuild bundles the server
- **Environment**: Configured for both development and production environments
- **Port Configuration**: Server runs on port 5000, mapped to external port 80

### Build Commands
- **Development**: `npm run dev` - Runs server with hot reload
- **Build**: `npm run build` - Builds both frontend and backend
- **Production**: `npm run start` - Runs production server
