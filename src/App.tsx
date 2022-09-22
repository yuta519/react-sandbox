import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ReactDnD } from './components/ReactDnD';
import StyledComponentPage from "./pages/StyledComponent";
import {SortTable}  from "./pages/rsuite-sort-table";

const Hoge = () => {
  return (
    <h1>hasdoghdasl;jdsa</h1>
  )
}

function App() {
  return (
    <div className="App" >
      <p><a href="/hoge">hoge</a></p>
      <p><a href="/react-dnd">react-dnd</a></p>
      <p><a href="/styled-component">styled-component</a></p>
      <p><a href="/sortable-table">sortable-table</a></p>
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
