import React from 'react';
import { Route } from 'react-router-dom'; 
import Register from './components/Register';
import AddEntry from './components/AddEntry';
import Login from './components/Login';
import DiaryList from './components/DiaryList';

function App() {
  return (
 <div>
   <Route exact path='/' component={Register}/>
   <Route exact path='/login' component={Login}/>
   <Route exact path='/diaryEntry' component={AddEntry}/>
   <Route exact path='/diaryList' component={DiaryList} />
 </div>
  )
}

export default App;
