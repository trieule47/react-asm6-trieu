import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { GlobalActions } from './redux/rootActions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import AuthRoute from './components/AuthRoute';
import Home from './components/home';
import NotFound from './components/notFound/notFound';
import Carts from './components/carts';
import Detail from './components/detail';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.GlobalReducer.count);

  const [user,setUser] = useState('admin');
  const [pass, setPass] = useState('admin');
  
  const setIsLoginFalse = () => {
    localStorage.setItem('user', null);
    setUser("");
    setPass("");
    console.log('set login True');
}

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact path='/login'
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>}
        />
        <Route
          exact path='/'
          element={
            <PrivateRoute>
              <Home setIsLoginFalse={setIsLoginFalse} />
            </PrivateRoute>
          } />
        <Route
          path='/carts'
          element={ 
          <PrivateRoute>
            <Carts />
          </PrivateRoute>}
          />
        <Route
          path='/detail'
          element={ 
          <PrivateRoute>
            <Detail />
          </PrivateRoute>}
          />
        <Route
          path='*'
          element={<NotFound />}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
