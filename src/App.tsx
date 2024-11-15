import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<LandingPage />} />
        {/* Uncomment additional routes if needed */}
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default App;
