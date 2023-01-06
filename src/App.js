import { Routes, Route } from "react-router-dom";
// import Norecord from './components/no-record/Norecord.component.jsx'
// import Search from './components/search/Search.component.jsx';
import Addpage from "./components/addpage/Addpage.component";
import Home from "./components/home/Home.component";
import DetailPage from "./components/detailpage/Detailpage.component";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addContact" element={<Addpage />} />
      <Route path="/detailPage/:id" element={<DetailPage/>}/>
    </Routes>
  );
}

export default App;
