import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteStatus from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useRouteMatch,
} from "react-router-dom";

// git comments
function App() {
  return (
    <>
      <NoteStatus>
        <Router>
          <Navbar />
          <Alert message="this is a default a alert message" />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/about' element={< About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteStatus>
    </>
  );
}

export default App;
