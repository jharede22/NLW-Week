import { createContext, useState, useEffect } from 'react'
import { Home } from './pages/home';
import { NewRoom } from './pages/NewRoom';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { auth } from './services/firebase';
import firebase from 'firebase';

import { AuthContextProvider } from './contexts/AuthContexts'
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';




function App() {



  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/admin/rooms/:id" component={AdminRoom}/>
          <Route path="/" exact component={ Home } />
          <Route path="/rooms/new"  component={ NewRoom } />
          <Route path="/rooms/:id"  component={ Room } />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}


export default App;
