import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ReactDnD } from './components/ReactDnD';
import StyledComponentPage from "./pages/StyledComponent";

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
          <Route path="/styled-component" element={<StyledComponentPage />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
