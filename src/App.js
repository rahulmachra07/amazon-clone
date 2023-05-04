import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import CheckOut from './CheckOut';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import {auth} from './firebase';

function App() {
  const [{user},dispatch]=useStateValue();
  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    });

    return()=>{
      unsubscribe();
    }
  },[]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<><Header/><CheckOut/></>}/>
          <Route path="/login" element={<h1><Login></Login></h1>}/>
          <Route path="/" element={<><Header/><Home/></>}/>
        </Routes>
        
      </div>

    </Router>
  );
}

export default App;
