import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Header } from './components/layout/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <AppRoutes />
        </main>
        {/* A Footer component could be added here later */}
      </div>
    </BrowserRouter>
  );
}

export default App;
