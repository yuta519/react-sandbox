import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ReactDnD } from './components/ReactDnD';
import StyledComponentPage from "./pages/StyledComponent";
import {SortTable}  from "./pages/rsuite-sort-table";

const Hoge = () => {
  return (
    <a>hasdoghdasl;jdsa</a>
  )
}

function App() {
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path="/hoge" element={<Hoge />} />
          <Route path="/react-dnd" element={<ReactDnD />} />
          <Route path="/styled-component" element={<StyledComponentPage />} />
          <Route path="/sortable-table" element={<SortTable />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
