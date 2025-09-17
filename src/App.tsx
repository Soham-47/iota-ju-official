/**
 * Main Application Component
 * 
 * This is the root component of the application that sets up:
 * - React Query for server state management
 * - React Router for client-side routing
 * - Global layout and routing configuration
 */

// External Dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import projectsData from './data/projects';

// Layout Component
import { Layout } from '@/components/Layout';

// Page Components
import Index from './pages/Index';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import AlumniPage from './pages/AlumniPage';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';

/**
 * Query Client Configuration
 * 
 * Configures the React Query client with default options:
 * - Disables automatic refetching on window focus for better UX
 * - Sets retry attempts to 1 for failed queries
 * - Can be extended with more global query/mutation defaults
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevents unnecessary refetches when window regains focus
      retry: 1, // Only retry failed requests once
      staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    },
  },
});

/**
 * Main App Component
 * 
 * Wraps the entire application with necessary providers and sets up routing.
 * Uses React Query for server state management and React Router for navigation.
 */
const App = () => (
  // Provides React Query context to all child components
  <QueryClientProvider client={queryClient}>
    {/* Sets up client-side routing */}
    <BrowserRouter>
      {/* Global layout wrapper that appears on all pages */}
      <Layout>
        {/* Defines the route configuration */}
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/projects" element={<ProjectsPage projects={projectsData} />} />
          <Route path="/team" element={<TeamPage />} />
          
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Legacy Route Redirects - Handles old hash-based navigation */}
          <Route path="/#about" element={<Navigate to="/about" replace />} />
          <Route path="/#events" element={<Navigate to="/events" replace />} />
          <Route path="/#projects" element={<Navigate to="/projects" replace />} />
          <Route path="/#team" element={<Navigate to="/team" replace />} />
          <Route path="/#contact" element={<Navigate to="/contact" replace />} />
          
          {/* 404 - Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
