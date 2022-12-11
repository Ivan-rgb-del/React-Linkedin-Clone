import React, { useEffect } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './widgets';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase';

import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

function App() {
  const user = useSelector(selectUser);
  const auth = getAuth(app);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user logged in
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL
        }));
      } else {
        // user logged out
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">
      <Header />

      {!user
        ? <Login />
        : (
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        )
      }

    </div>
  );
}

export default App;