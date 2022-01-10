import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import * as ReactDnD from './components/ReactDnD';
import * as Knight from './components/ReactDnD/Knight';

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
          <Route path="/hoge" element={<Hoge />} />
          <Route path="/react-dnd" element={<ReactDnD />} />
          <Route path="/knight" element={<Knight />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
