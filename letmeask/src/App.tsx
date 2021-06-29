import { createContext, useState, useEffect } from 'react'
import { Home } from './pages/home';
import { NewRoom } from './pages/NewRoom';

import { BrowserRouter, Route } from 'react-router-dom'
import { auth } from './services/firebase';
import firebase from 'firebase';

import { AuthContextProvider } from './contexts/AuthContexts'




function App() {



  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={ Home } />
        <Route path="/rooms/new" component={ NewRoom } />
      </AuthContextProvider>
    </BrowserRouter>
  );
}


export default App;
