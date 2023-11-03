import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import {AuthContext, FirebaseContext} from './store/Context'
import Post, { postContext } from './store/postContext'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import ViewPost from './Pages/ViewPost';
import { Switch } from 'react-router-dom/cjs/react-router-dom';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const {postDetails} = useContext(postContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
    <Post>
      <Router>
      <Switch>
        <Route exact path='/'>
        <Home />
        </Route>
        <Route path='/signup'>
        <Signup/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/create'>
          <Create/>
        </Route>
        <Router>
          <ViewPost path='/viewPost'/>
        </Router>
      </Switch>
      </Router>
      </Post>
   
    </div>
  );
}

export default App;
