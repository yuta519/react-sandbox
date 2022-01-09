import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function Hoge() {
  return (
    <p>aaa</p>
  )
}

function App() {
  return (
    < div className="App" >
      <Router>
        <Routes>
          <Route path="/hoge" element={<Hoge />} >
          </Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
