import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ReactDnD } from './components/ReactDnD';
// import { StyledComponent } from './components/styled-componet';
import StyledComponent from "./components/StyledComponet"

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
          <Route path="/styled-component" element={<StyledComponent />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
