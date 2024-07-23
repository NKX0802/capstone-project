import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
//import { Provider } from 'react-redux';
//import store from './store';
import { AuthProvider } from './components/AuthProvider';
import WeatherPage from './pages/WeatherPage';

export default function App() {
  return (
    <AuthProvider>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/weather' element={<WeatherPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </AuthProvider>
  )
}
