import "../index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/home";
import Nav from "../components/nav/nav";
import Assistent from "../pages/assistent/assitent";
import Management from "../pages/management/management";
import Profile  from "../pages/profile/profile";
import Settings from "../pages/settings/settings";

export default function mainRoute() {
    return (
        <BrowserRouter>
            <section className="body">
                <Nav />
                <section className="main">
                    <Routes>
                        <Route path="/inicio" element={<Home />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/main" element={<Home />} />
                        <Route path="/assistente" element={<Assistent />} />
                        <Route path="/gestão" element={<Management />} />
                        <Route path="/notas" element={<Home />} />
                        <Route path="/perfil" element={<Profile />} />
                        <Route path="/definições" element={<Settings />} />
                    </Routes>
                </section>
            </section>
        </BrowserRouter>
    );
}
