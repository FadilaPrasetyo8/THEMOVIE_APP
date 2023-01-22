import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Routes,
  Link,
} from "react-router-dom";
import { Navbar } from "./component/navbar/navbar";
import { PopularPages } from "./pages/Popular/PopularPages";
import { SearchList } from "./component/search/Search";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PopularPages />} />
        <Route path="/popular" element={<SearchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
