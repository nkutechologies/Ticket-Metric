import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import UpcomingSales from "./screen/UpcomingSales";
import EventAnalytics from "./screen/EventAnalytics";
import ArtistMetric from "./screen/ArtistMetric";
import Training from "./screen/Training";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/upcoming-sales");
  }, []);
  return (
    <Routes>
      <Route path="/" element={<UpcomingSales />} />
      <Route path="/upcoming-sales" element={<UpcomingSales />} />
      <Route path="/event-analytics" element={<EventAnalytics />} />
      <Route path="/artist-metric" element={<ArtistMetric />} />
      <Route path="/training" element={<Training />} />
    </Routes>
  );
}

export default App;
