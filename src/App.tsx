import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}