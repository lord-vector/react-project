import "./App.css";
import Header from "./components/Header";
import CardsSection from "./components/CardsSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DescriptionPage from "./components/DescriptionPage";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/cards" element={<CardsSection />} />
        <Route path="/cards/description/:id" element={<DescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
