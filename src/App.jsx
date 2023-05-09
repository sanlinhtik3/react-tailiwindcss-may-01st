import { createContext } from "react";
import About from "./About";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";

export const StudentContext = createContext()

function App() {

  return (
    <>
      <h1>App.jsx</h1>

      <StudentContext.Provider value="Aung Gyi">
        <Home />
      </StudentContext.Provider>

      <About contact="09961537573" />

      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;