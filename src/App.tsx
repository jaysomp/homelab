import React from 'react';
import { Header } from './components/Header';
import { ServiceCard } from './components/ServiceCard';
import { services } from './data/services';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Header />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.url} service={service} />
            ))}
          </div>

          <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Click on any card to access the service</p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;