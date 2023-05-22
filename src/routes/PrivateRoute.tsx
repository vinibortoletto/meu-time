import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { FootballContext } from '../contexts/FootballContext';

interface Props {
  path: string;
  component: any;
}

export default function PrivateRoute(props: Props) {
  const { apiKey } = useContext(FootballContext);

  if (!apiKey) return <Redirect to="/" />;

  return <Route {...props} />;
}
