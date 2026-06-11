import { createRoot } from "react-dom/client";
import Resume from "./pages/resume/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<Resume />} />

      {/* <Route path="/freelancer" element={<Freelancer />} /> */}
    </Routes>
  </BrowserRouter>,
);
