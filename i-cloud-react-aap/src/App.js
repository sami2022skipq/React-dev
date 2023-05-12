import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import NoteStatus from './context/notes/NoteState';
import UserState from './context/user/UserState'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useRouteMatch,
} from "react-router-dom";
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
      <NoteStatus>
        <UserState>
          <Router>
            {/* wraapping UserState around Navbar to use context */}
            <Navbar />
            <Alert alert={alert} />
            <div className='container'>
              <Routes>
                <Route exact path='/' element={< Home showAlert={showAlert} />}></Route>
                <Route exact path='/about' element={< About />}></Route>
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
