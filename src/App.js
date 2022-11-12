import './App.css';
// import Chat from './Chat';
// import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppBody from './AppBody';

function App() {
  return (
    <div className="app">
      <div className='app_body'>
        <Router>
          <Routes>
            <Route path='/' element={<h1>Home Screen</h1>} >
            </Route>
            <Route path="/app" element={<AppBody />}  > 
            </Route>
            {/* <Route path="/app" element={<Chat />}>
            </Route> */}
          </Routes>
      </Router>

      </div>
    </div>
  );
}

export default App;
