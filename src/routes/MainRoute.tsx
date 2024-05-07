import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Education } from "../pages/Education";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";

export function MainRoute(){
    return (
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="education" element={<Education />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}