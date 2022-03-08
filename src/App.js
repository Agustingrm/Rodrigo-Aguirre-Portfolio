import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import GlobalStyles from "./styles/GlobalStyles";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalState>
        <GlobalStyles />
        <Menu />
        <Routes basename="/test_repository">
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </GlobalState>
    </>
  );
}

export default App;
