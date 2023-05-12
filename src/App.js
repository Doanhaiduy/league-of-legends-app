import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import ChampionDetail from "./pages/ChampionDetail";
import Champions from "./pages/Champions";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/champions" element={<Champions />} />
                    <Route path="/champion-detail/:id" element={<ChampionDetail />} />
                    <Route path="/collection" element={<Collection />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
