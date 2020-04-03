import React from 'react';
import { Route } from 'react-router-dom'; 
import Register from './components/Register';
import AddEntry from './components/AddEntry';
import Login from './components/Login';

function App() {
  return (
 <div>
   <Route exact path='/' component={Register}/>
   <Route exact path='/login' component={Login}/>
   <Route exact path='/diaryEntry' component={AddEntry}/>
 </div>
  )
}

export default App;
