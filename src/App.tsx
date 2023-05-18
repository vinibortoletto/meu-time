import { FootballProvider } from './contexts/FootballContext';
import { Login } from './pages/Login';

export default function App() {
  return (
    <FootballProvider>
      <div>
        <Login />
      </div>
    </FootballProvider>
  );
}
