import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Alert from './components/Alert';
import HomeUser from './components/HomeUser';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import NoteStatus from './context/notes/NoteState';
import UserState from './context/user/UserState'
import ResetPassword from './components/ResetPassword';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useRouteMatch,
} from "react-router-dom";
import AddANote from './components/AddANote';
// git comments
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)

  }

  return (
    <>
    {/* Note sta */}
      <NoteStatus>  
        <UserState>
          <Router>
            {/* wraapping UserState around Home/Navbar to use user Deatail context */}
            <Navbar />
            <Alert alert={alert} />
            <div className='container'>
              <Routes>
                <Route exact path='/userhome' element={< HomeUser showAlert={showAlert} />}></Route>
                <Route exact path='/passwordReset' element={< ResetPassword showAlert={showAlert} />}></Route>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/addanote' element={<AddANote showAlert={showAlert}/>}></Route>
                <Route exact path='/login' element={<Login showAlert={showAlert} />}></Route>
                <Route exact path='/signup' element={< SignUp showAlert={showAlert} />}></Route>
              </Routes>
            </div>
          </Router>
        </UserState>
      </NoteStatus>
    </>
  );
}

export default App;
