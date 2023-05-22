import { Route } from 'react-router-dom';
import { FootballProvider } from './contexts/FootballContext';
import { Login } from './pages/Login';
import { SearchTeam } from './pages/SearchTeam';
import PrivateRoute from './routes/PrivateRoute';
import { GlobalStyles } from './styles/GlobalStyles';

export default function App() {
  return (
    <FootballProvider>
      <GlobalStyles />
      <div>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/busca-time" component={SearchTeam} />
      </div>
    </FootballProvider>
  );
}
