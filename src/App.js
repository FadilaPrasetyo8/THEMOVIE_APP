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
import { DetailPages } from "./pages/DetailPages/DetailPages";
import { MyModal } from "./pages/Modal/Modal";
import { TopRatedPages } from "./pages/TopRatedPages/TopRatedPages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PopularPages />} />
        <Route path="/popular" element={<SearchList />} />
        <Route path="/top-rated" element={<TopRatedPages />} />
        <Route path="/movie/:id" element={<DetailPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
