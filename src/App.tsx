import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Chat from './Components/Chat/Chat';
import Login from './Components/Login/Login';
import Sidebar from './Components/SideBar/Sidebar';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispath] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          <BrowserRouter>

            <Sidebar />

            <Switch>
              <Route path='/rooms/:roomId'>
                <Chat />
              </Route>

              <Route path="/">
                <Chat />
              </Route>

            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
