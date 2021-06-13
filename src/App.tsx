import { useEffect } from 'react';
import './App.scss';
import { GamePage } from './pages/GamePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';
import { fetchUsers } from './store/actionCreators';

function App() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchUsers());
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/">
            <GamePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
