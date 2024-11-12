import { useState } from 'react';
import AuthFlow from './components/AuthFlow';
import DeviceManagement from './components/DeviceManagement';
import Layout from './components/Layout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {isAuthenticated ? (
        <Layout onLogout={handleLogout}>
          <DeviceManagement />
        </Layout>
      ) : (
        <div className="flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">HydroControl</h1>
              <p className="text-gray-600">Smart Hydroponic Management System</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <AuthFlow onAuthenticated={() => setIsAuthenticated(true)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;