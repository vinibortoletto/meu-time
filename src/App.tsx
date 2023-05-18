import { Route } from 'react-router-dom';
import { FootballProvider } from './contexts/FootballContext';
import { Login } from './pages/Login';
import { SearchTeam } from './pages/SearchTeam';

export default function App() {
  return (
    <FootballProvider>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/busca-time" component={SearchTeam} />
      </div>
    </FootballProvider>
  );
}
